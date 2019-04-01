/** @flow */

import {array, boolean} from '../index'

function itShouldThrow(desc: string, input: *, errorMessage: string) {
  it(`should throw ${desc}`, () => {
    expect(() => {
      array(input)
    }).toThrow(errorMessage)
  })
}

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

  itShouldThrow(
    'when type is an array',
    ({type: []}: any),
    'type must be string literal "array"',
  )

  itShouldThrow(
    'when type is a boolean',
    ({type: true}: any),
    'type must be string literal "array"',
  )

  itShouldThrow(
    'when type is null',
    ({type: null}: any),
    'type must be string literal "array"',
  )

  itShouldThrow(
    'when type is a number',
    ({type: 1}: any),
    'type must be string literal "array"',
  )

  itShouldThrow(
    'when type is an object',
    ({type: {}}: any),
    'type must be string literal "array"',
  )

  itShouldThrow(
    'when type is an invalid string',
    ({type: 'boolean'}: any),
    'type must be string literal "array"',
  )

  itShouldThrow(
    'when unknown properties included',
    ({foo: 'bar'}: any),
    'unknown key "foo"',
  )

  itShouldThrow(
    'when additionalItems is an array',
    ({additionalItems: [], items: [{type: 'string'}]}: any),
    'additionalItems must be a boolean',
  )

  itShouldThrow(
    'when additionalItems is null',
    ({additionalItems: null, items: [{type: 'string'}]}: any),
    'additionalItems must be a boolean',
  )

  itShouldThrow(
    'when additionalItems is a number',
    ({additionalItems: 1, items: [{type: 'string'}]}: any),
    'additionalItems must be a boolean',
  )

  itShouldThrow(
    'when additionalItems is an object',
    ({additionalItems: {}, items: [{type: 'string'}]}: any),
    'additionalItems must be a boolean',
  )

  itShouldThrow(
    'when additionalItems is a string',
    ({additionalItems: 'foo', items: [{type: 'string'}]}: any),
    'additionalItems must be a boolean',
  )

  itShouldThrow(
    'when additionalItems present and items is not an Array',
    {additionalItems: true, items: boolean()},
    'additionalItems should not be present when items is not an Array',
  )

  itShouldThrow(
    'when contains is an array',
    ({contains: []}: any),
    'schema must be an Object',
  )

  itShouldThrow(
    'when contains is a boolean',
    ({contains: true}: any),
    'schema must be an Object',
  )

  itShouldThrow(
    'when contains is null',
    ({contains: null}: any),
    'schema must be an Object',
  )

  itShouldThrow(
    'when contains is a number',
    ({contains: 1}: any),
    'schema must be an Object',
  )

  itShouldThrow(
    'when contains is a string',
    ({contains: 'foo'}: any),
    'schema must be an Object',
  )

  itShouldThrow(
    'when contains is schema of unknown type',
    ({contains: {type: 'foo'}}: any),
    'unknown type "foo"',
  )

  itShouldThrow(
    'when contains and items both present',
    {contains: boolean(), items: boolean()},
    'contains should not be present when items is present',
  )

  itShouldThrow(
    'when items is a boolean',
    ({items: true}: any),
    'items must be a schema or Array of schemas',
  )

  itShouldThrow(
    'when items is null',
    ({items: null}: any),
    'items must be a schema or Array of schemas',
  )

  itShouldThrow(
    'when items is a number',
    ({items: 1}: any),
    'items must be a schema or Array of schemas',
  )

  itShouldThrow(
    'when items is a string',
    ({items: 'foo'}: any),
    'items must be a schema or Array of schemas',
  )

  itShouldThrow(
    'when items is an array containing non-schema',
    ({items: ['foo']}: any),
    'schema must be an Object',
  )

  itShouldThrow(
    'when items is schema of unknown type',
    ({items: {type: 'foo'}}: any),
    'unknown type "foo"',
  )

  itShouldThrow(
    'when maxItems is less than minItems',
    {maxItems: 1, minItems: 2},
    'maxItems cannot be less than minItems',
  )

  itShouldThrow(
    'when maxItems is a negative integer',
    {maxItems: -1},
    'maxItems must be a positive integer',
  )

  itShouldThrow(
    'when maxItems is a non-integer number',
    {maxItems: 1.2},
    'maxItems must be a positive integer',
  )

  itShouldThrow(
    'when minItems is a negative integer',
    {minItems: -1},
    'minItems must be a positive integer',
  )

  itShouldThrow(
    'when minItems is a non-integer number',
    {minItems: 1.2},
    'minItems must be a positive integer',
  )
})
