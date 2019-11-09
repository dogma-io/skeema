/** @flow */

import {constant} from '../index'

describe('constant()', () => {
  it('should return expected object when called without arguments', () => {
    expect(constant()).toEqual({const: undefined})
  })

  it('should return expected object when called with array value', () => {
    expect(constant([1, true, 'foo'])).toEqual({const: [1, true, 'foo']})
  })

  it('should return expected object when called with boolean value', () => {
    expect(constant(true)).toEqual({const: true})
  })

  it('should return expected object when called with integer value', () => {
    expect(constant(1)).toEqual({const: 1})
  })

  it('should return expected object when called with null value', () => {
    expect(constant(null)).toEqual({const: null})
  })

  it('should return expected object when called with number value', () => {
    expect(constant(1.2)).toEqual({const: 1.2})
  })

  it('should return expected object when called with object value', () => {
    expect(constant({foo: 'bar'})).toEqual({const: {foo: 'bar'}})
  })

  it('should return expected object when called with string value', () => {
    expect(constant('foo')).toEqual({const: 'foo'})
  })
})
