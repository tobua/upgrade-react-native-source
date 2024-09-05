import { expect, test } from 'bun:test'
import { execSync } from 'node:child_process'
import { rmSync } from 'node:fs'
import Bun from 'bun'
import { transform } from '../index'
import '../mock' // React Native globals.

test('Successfully transforms the source files.', async () => {
  rmSync('./node_modules/react-native', { recursive: true })
  execSync('bun install', { stdio: 'inherit' })
  expect(await transform()).toBe(true)
  expect(await Bun.file('./node_modules/react-native/index.js').text()).not.toContain('module.exports')

  // try {
  //   expect((await import('react-native')).Alert).toBeDefined()
  // } catch (error) {
  //   console.log('error', error)
  // }
})

test('Can import all the transformed source files.', async () => {
  rmSync('./node_modules/react-native', { recursive: true })
  execSync('bun install', { stdio: 'inherit' })

  const imports = await transform(true)
  expect(imports).not.toBe(true)
  if (imports !== true) {
    // Currently: 227 289 => 248 268 => 277 237
    console.log(imports.success.length, imports.failure.length)

    if (imports.failure.length) {
      console.log(imports.failure[0].name, imports.failure[0].error)
    }
  }
})
