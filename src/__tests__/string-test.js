/** @flow */

import string from '../string'

describe('string()', () => {
  it('should return expected object when called without arguments', () => {
    expect(string()).toEqual({type: 'string'})
  })

  it('should return expected object when options are provided', () => {
    expect(string({maxLength: 2, minLength: 1})).toEqual({
      maxLength: 2,
      minLength: 1,
      type: 'string',
    })
  })

  it('should throw when maxLength is less than minLength', () => {
    expect(() => {
      string({maxLength: 1, minLength: 2})
    }).toThrow('maxLength cannot be less than minLength')
  })

  it('should throw when maxLength is a negative integer', () => {
    expect(() => {
      string({maxLength: -1})
    }).toThrow('maxLength must be a positive integer')
  })

  it('should throw when maxLength is a non-integer number', () => {
    expect(() => {
      string({maxLength: 1.2})
    }).toThrow('maxLength must be a positive integer')
  })

  it('should throw when minLength is a negative integer', () => {
    expect(() => {
      string({minLength: -1})
    }).toThrow('minLength must be a positive integer')
  })

  it('should throw when minLength is a non-integer number', () => {
    expect(() => {
      string({minLength: 1.2})
    }).toThrow('minLength must be a positive integer')
  })
})
