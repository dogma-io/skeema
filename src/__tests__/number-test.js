/** @flow */

import {number} from '../index'

function itShouldThrow(desc: string, input: *, errorMessage: string) {
  it(`should throw ${desc}`, () => {
    expect(() => {
      number(input)
    }).toThrow(errorMessage)
  })
}

describe('number()', () => {
  it('should return expected object when called without arguments', () => {
    expect(number()).toEqual({type: 'number'})
  })

  it('should return expected object when options are provided', () => {
    expect(
      number({
        exclusiveMaximum: true,
        exclusiveMinimum: true,
        maximum: 10.5,
        minimum: 0.5,
        multipleOf: 0.5,
      }),
    ).toEqual({
      exclusiveMaximum: true,
      exclusiveMinimum: true,
      maximum: 10.5,
      minimum: 0.5,
      multipleOf: 0.5,
      type: 'number',
    })
  })

  itShouldThrow(
    'when type is an array',
    ({type: []}: any),
    'type must be string literal "number"',
  )

  itShouldThrow(
    'when type is a boolean',
    ({type: true}: any),
    'type must be string literal "number"',
  )

  itShouldThrow(
    'when type is null',
    ({type: null}: any),
    'type must be string literal "number"',
  )

  itShouldThrow(
    'when type is a number',
    ({type: 1}: any),
    'type must be string literal "number"',
  )

  itShouldThrow(
    'when type is an object',
    ({type: {}}: any),
    'type must be string literal "number"',
  )

  itShouldThrow(
    'when type is an invalid string',
    ({type: 'boolean'}: any),
    'type must be string literal "number"',
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
    'when multipleOf is a negative number',
    {multipleOf: -1},
    'multipleOf must be a positive number',
  )
})
