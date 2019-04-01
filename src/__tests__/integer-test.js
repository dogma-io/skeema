/** @flow */

import {integer} from '../index'

function itShouldThrow(desc: string, input: *, errorMessage: string) {
  it(`should throw ${desc}`, () => {
    expect(() => {
      integer(input)
    }).toThrow(errorMessage)
  })
}

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

  itShouldThrow(
    'when type is an array',
    ({type: []}: any),
    'type must be string literal "integer"',
  )

  itShouldThrow(
    'when type is a boolean',
    ({type: true}: any),
    'type must be string literal "integer"',
  )

  itShouldThrow(
    'when type is null',
    ({type: null}: any),
    'type must be string literal "integer"',
  )

  itShouldThrow(
    'when type is a number',
    ({type: 1}: any),
    'type must be string literal "integer"',
  )

  itShouldThrow(
    'when type is an object',
    ({type: {}}: any),
    'type must be string literal "integer"',
  )

  itShouldThrow(
    'when type is an invalid string',
    ({type: 'boolean'}: any),
    'type must be string literal "integer"',
  )

  itShouldThrow(
    'when unknown properties included',
    ({foo: 'bar'}: any),
    'unknown key "foo"',
  )

  itShouldThrow(
    'when exclusiveMaximum is present and maximum is not',
    {exclusiveMaximum: true},
    'exclusiveMaximum should not be present when maximum is not',
  )

  itShouldThrow(
    'when exclusiveMinimum is present and minimum is not',
    {exclusiveMinimum: true},
    'exclusiveMinimum should not be present when minimum is not',
  )

  itShouldThrow(
    'when maximum is less than minimum',
    {maximum: 1, minimum: 2},
    'maximum cannot be less than minimum',
  )

  itShouldThrow(
    'when maximum is a non-integer number',
    {maximum: 1.2},
    'maximum must be an integer',
  )

  itShouldThrow(
    'when minimum is a non-integer number',
    {minimum: 1.2},
    'minimum must be an integer',
  )

  itShouldThrow(
    'when multipleOf is a negative integer',
    {multipleOf: -1},
    'multipleOf must be a positive integer',
  )

  itShouldThrow(
    'when multipleOf is a non-integer number',
    {multipleOf: 1.2},
    'multipleOf must be a positive integer',
  )
})
