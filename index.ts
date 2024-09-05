import { cpSync, existsSync } from 'node:fs'
import Bun, { Glob } from 'bun'
// @ts-ignore
import flowRemoveTypes from 'flow-remove-types'

const globFiles = (glob: string) => new Glob(glob)

const imports: {
  success: string[]
  failure: { name: string; error: unknown }[]
} = { success: [], failure: [] }

function resetImports() {
  imports.success = []
  imports.failure = []
}

const fileOverrides = [
  {
    local: 'files/react-native-index-esm.js',
    package: 'node_modules/react-native/index.js',
  },
  {
    local: 'files/react-native-private-interface.js',
    package: 'node_modules/react-native/Libraries/ReactPrivate/ReactNativePrivateInterface.js',
  },
  {
    local: 'files/react-native-platform.js',
    package: 'node_modules/react-native/Libraries/Utilities/Platform.js',
  },
]

const overrideFiles = fileOverrides.map((override) => override.package)

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Optimize later...
async function cleanPackage(name: string, checkImport: boolean) {
  console.log(`Cleaning package ${name}.`)
  console.log('Removing flow types...')
  // Removes flow type annotations that cannot be parsed by Bun from 'react-native' package.
  // @ts-ignore module: "preserve" required for imports to work.
  for await (const file of globFiles(`node_modules/${name}/**/*.js`).scan('.')) {
    const contents = await Bun.file(file).text()
    await Bun.write(file, flowRemoveTypes(contents).toString())
  }
  console.log('Applying file overrides.')
  for (const override of fileOverrides) {
    cpSync(override.local, override.package)
  }
  console.log('Converting package to ESM.')
  const packagePath = `node_modules/${name}/package.json`
  const packageJson = await Bun.file(packagePath).json()
  packageJson.type = 'module'
  await Bun.write(packagePath, JSON.stringify(packageJson, null, 2))
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
    if (overrideFiles.includes(file)) {
      console.log('skip')
      continue
    }
    let contents = await Bun.file(file).text()
    contents = contents.replace(/module\.exports\s*=\s*/g, 'export default ')
    contents = contents.replace("export default require('../Components/UnimplementedViews/UnimplementedView');", '') // Double default export error.
    if (contents.includes('export *')) {
      // TODO merge export * into export default.
      if (contents.includes('export default')) {
        // console.log("TODO merge double exports", file);
      }
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

    if (checkImport) {
      if (file.includes('/react-native/Libraries')) {
        try {
          await import(`./${file}`)
          imports.success.push(file)
        } catch (error) {
          imports.failure.push({ name: file, error })
        }
      }
    }
  }
}

export async function transform(checkImport = false) {
  resetImports()
  await cleanPackage('react-native', checkImport)
  await cleanPackage('@react-native/virtualized-lists', checkImport)

  if (checkImport) {
    return imports
  }

  return true
}
