import {
  describe,
  expect,
  test,
  vi,
} from 'vitest'

import welcome from '../src'

describe('index', () => {
  test('hello world should console', () => {
    console.log = vi.fn()
    welcome()
    expect(console.log).toHaveBeenCalledWith('hello world')
  })
})
