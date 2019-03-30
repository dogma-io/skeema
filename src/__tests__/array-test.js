/** @flow */

import array from '../array'
import boolean from '../boolean'

describe('array()', () => {
  it('should return expected object when called without arguments', () => {
    expect(array()).toEqual({type: 'array'})
  })

  it('should return expected object when options are provided', () => {
    expect(array({items: boolean(), maxItems: 2, minItems: 1})).toEqual({
      items: {
        type: 'boolean',
      },
      maxItems: 2,
      minItems: 1,
      type: 'array',
    })
  })

  it('should throw when contains and items both present', () => {
    expect(() => {
      array({contains: boolean(), items: boolean()})
    }).toThrow('contains should not be present when items is present')
  })

  it('should throw when maxItems is less than minItems', () => {
    expect(() => {
      array({maxItems: 1, minItems: 2})
    }).toThrow('maxItems cannot be less than minItems')
  })

  it('should throw when maxItems is a negative integer', () => {
    expect(() => {
      array({maxItems: -1})
    }).toThrow('maxItems must be a positive integer')
  })

  it('should throw when maxItems is a non-integer number', () => {
    expect(() => {
      array({maxItems: 1.2})
    }).toThrow('maxItems must be a positive integer')
  })

  it('should throw when minItems is a negative integer', () => {
    expect(() => {
      array({minItems: -1})
    }).toThrow('minItems must be a positive integer')
  })

  it('should throw when minItems is a non-integer number', () => {
    expect(() => {
      array({minItems: 1.2})
    }).toThrow('minItems must be a positive integer')
  })
})
