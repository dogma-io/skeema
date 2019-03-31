/** @flow */

import {integer} from '../index'

describe('integer()', () => {
  it('should return expected object when called without arguments', () => {
    expect(integer()).toEqual({type: 'integer'})
  })

  it('should return expected object when options are provided', () => {
    expect(
      integer({
        exclusiveMaximum: true,
        exclusiveMinimum: true,
        maximum: 10,
        minimum: 0,
        multipleOf: 2,
      }),
    ).toEqual({
      exclusiveMaximum: true,
      exclusiveMinimum: true,
      maximum: 10,
      minimum: 0,
      multipleOf: 2,
      type: 'integer',
    })
  })

  it('should throw when exclusiveMaximum is present and maximum is not', () => {
    expect(() => {
      integer({exclusiveMaximum: true})
    }).toThrow('exclusiveMaximum should not be present when maximum is not')
  })

  it('should throw when exclusiveMinimum is present and minimum is not', () => {
    expect(() => {
      integer({exclusiveMinimum: true})
    }).toThrow('exclusiveMinimum should not be present when minimum is not')
  })

  it('should throw when maximum is less than minimum', () => {
    expect(() => {
      integer({maximum: 1, minimum: 2})
    }).toThrow('maximum cannot be less than minimum')
  })

  it('should throw when maximum is a non-integer number', () => {
    expect(() => {
      integer({maximum: 1.2})
    }).toThrow('maximum must be an integer')
  })

  it('should throw when minimum is a non-integer number', () => {
    expect(() => {
      integer({minimum: 1.2})
    }).toThrow('minimum must be an integer')
  })

  it('should throw when multipleOf is a negative integer', () => {
    expect(() => {
      integer({multipleOf: -1})
    }).toThrow('multipleOf must be a positive integer')
  })

  it('should throw when multipleOf is a non-integer number', () => {
    expect(() => {
      integer({multipleOf: 1.2})
    }).toThrow('multipleOf must be a positive integer')
  })
})
