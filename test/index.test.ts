import welcome from '../src'
import { describe, test, expect, vi } from 'vitest'

describe('index', () => {
  test('hello world should console', () => {
    console.log = vi.fn()
    welcome()
    expect(console.log).toHaveBeenCalledWith('hello world')
  })
})
