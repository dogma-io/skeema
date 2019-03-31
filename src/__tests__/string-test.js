/** @flow */

import {string} from '../index'

describe('string()', () => {
  it('should return expected object when called without arguments', () => {
    expect(string()).toEqual({type: 'string'})
  })

  it('should return expected object when options are provided', () => {
    expect(
      string({
        maxLength: 2,
        minLength: 1,
        pattern: '\\d+',
      }),
    ).toEqual({
      maxLength: 2,
      minLength: 1,
      pattern: '\\d+',
      type: 'string',
    })
  })

  it('should throw error when unknown properties included', () => {
    expect(() => {
      string(({foo: 'bar'}: any))
    }).toThrow('unknown key "foo"')
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

  it('should throw when invalid pattern', () => {
    expect(() => {
      string({pattern: '^('})
    }).toThrow('pattern is invalid')
  })

  it('should throw when enum value is longer than maxLength', () => {
    expect(() => {
      string({enum: ['foo', 'foobar'], maxLength: 5})
    }).toThrow('enum value "foobar" is longer than maxLength')
  })

  it('should throw when enum value is shorter than minLength', () => {
    expect(() => {
      string({enum: ['foobar', 'foo'], minLength: 5})
    }).toThrow('enum value "foo" is shorter than minLength')
  })

  it('should thro when enum value does not match pattern', () => {
    expect(() => {
      string({enum: ['bar', 'baz', 'foo'], pattern: '^ba.$'})
    }).toThrow('enum value "foo" does not match pattern')
  })
})
