import { expect, test } from 'bun:test'
import Bun from 'bun'
import { transform } from '../index'

test('expec', async () => {
  expect(await transform()).toBe(true)
  expect(await Bun.file('./node_modules/react-native/index.js').text()).not.toContain('module.exports')
})
