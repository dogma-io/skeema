/** @flow */

import array from '../array'
import boolean from '../boolean'
import * as exp from '../index'
import integer from '../integer'
import number from '../number'
import object from '../object'
import string from '../string'

describe('index', () => {
  it('should export array()', () => {
    expect(exp.array).toBe(array)
  })

  it('should export boolean()', () => {
    expect(exp.boolean).toBe(boolean)
  })

  it('should export integer()', () => {
    expect(exp.integer).toBe(integer)
  })

  it('should export number()', () => {
    expect(exp.number).toBe(number)
  })

  it('should export object()', () => {
    expect(exp.object).toBe(object)
  })

  it('should export string()', () => {
    expect(exp.string).toBe(string)
  })
})
