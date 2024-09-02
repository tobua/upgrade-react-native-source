import { expect, test } from 'bun:test'
import { execSync } from 'node:child_process'
import { rmSync } from 'node:fs'
import Bun from 'bun'
import { transform } from '../index'
import '../mock' // React Native globals.

test('expec', async () => {
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
