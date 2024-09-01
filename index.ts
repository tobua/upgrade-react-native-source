import { cpSync, existsSync } from 'node:fs'
import Bun, { Glob } from 'bun'
// @ts-ignore
import flowRemoveTypes from 'flow-remove-types'

const globFiles = (glob: string) => new Glob(glob)

async function cleanPackage(name: string) {
  console.log(`Cleaning package ${name}.`)
  console.log('Removing flow types...')

  // Removes flow type annotations that cannot be parsed by Bun from 'react-native' package.
  // @ts-ignore module: "preserve" required for imports to work.
  for await (const file of globFiles(`node_modules/${name}/**/*.js`).scan('.')) {
    const contents = await Bun.file(file).text()
    await Bun.write(file, flowRemoveTypes(contents).toString())
  }
  console.log('Converting entry file to ESM.')
  if (name === 'react-native') {
    cpSync('files/react-native-index-esm.js', `node_modules/${name}/index.js`)
    cpSync('files/react-native-private-interface.js', `node_modules/${name}/Libraries/ReactPrivate/ReactNativePrivateInterface.js`)
  }

  const platform: 'ios' | 'android' = 'ios'
  console.log(`Moving platform specific files for "${platform}" in...`)
  // @ts-ignore module: "preserve" required for imports to work.
  for await (const filePlatform of globFiles(`node_modules/${name}/**/*.${platform}.js`).scan('.')) {
    const otherPlatform = platform === 'ios' ? 'android' : 'ios'
    const file = filePlatform.replace(`.${platform}`, '')
    const fileOtherPlatform = filePlatform.replace(`.${platform}`, `.${otherPlatform}`)
    if (existsSync(file)) {
      // Other platform file must not exist otherwise this case doesn't make sense.
      if (existsSync(fileOtherPlatform)) {
        // Already transformed probably, ignore.
      } else {
        cpSync(file, fileOtherPlatform)
        cpSync(filePlatform, file)
      }
    } else {
      // Make current platform file the default.
      cpSync(filePlatform, file)
    }
  }
  console.log('Updating files with old CJS export syntax...')
  // @ts-ignore module: "preserve" required for imports to work.
  for await (const file of globFiles(`node_modules/${name}/**/*.js`).scan('.')) {
    let contents = await Bun.file(file).text()
    contents = contents.replace(/module\.exports\s*=\s*/g, 'export default ')
    contents = contents.replace("export default require('../Components/UnimplementedViews/UnimplementedView');", '') // Double default export error.
    if (contents.includes('export *') && contents.includes('export default')) {
      // TODO merge export * into export default.
      // "exports *" (not needed) and export default often found in same file...
      contents = contents.replace(/^\s*export \*.*$/gm, '')
    }
    if (file.includes('Core/ExceptionsManager.js') && !contents.includes('SyntheticRenamedError')) {
      contents = contents.replaceAll('SyntheticError', 'SyntheticRenamedError') // Important to make sure this doesn't match again.
      contents = contents.replaceAll('handleException', 'handleRenamedException') // Important to make sure this doesn't match again.

      contents += `export const handleException = handleRenamedException
export const SyntheticError =  SyntheticRenamedError`
    }
    await Bun.write(file, contents)
  }
}

export async function transform() {
  await cleanPackage('react-native')
  await cleanPackage('@react-native/virtualized-lists')

  return true
}
