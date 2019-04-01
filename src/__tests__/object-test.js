/** @flow */

import {boolean, object, string} from '../index'

function itShouldThrow(desc: string, input: *, errorMessage: string) {
  it(`should throw ${desc}`, () => {
    expect(() => {
      object(input)
    }).toThrow(errorMessage)
  })
}

describe('object()', () => {
  it('should return expected object when called with empty properties', () => {
    expect(object({properties: {}})).toEqual({properties: {}, type: 'object'})
  })

  it('should return expected object when called with non-empty properties', () => {
    const properties = {
      bar: boolean(),
      baz: string(),
    }

    expect(object({properties})).toEqual({
      properties: {
        bar: {type: 'boolean'},
        baz: {type: 'string'},
      },
      type: 'object',
    })
  })

  itShouldThrow(
    'when type is an array',
    ({properties: {}, type: []}: any),
    'type must be string literal "object"',
  )

  itShouldThrow(
    'when type is a boolean',
    ({properties: {}, type: true}: any),
    'type must be string literal "object"',
  )

  itShouldThrow(
    'when type is null',
    ({properties: {}, type: null}: any),
    'type must be string literal "object"',
  )

  itShouldThrow(
    'when type is a number',
    ({properties: {}, type: 1}: any),
    'type must be string literal "object"',
  )

  itShouldThrow(
    'when type is an object',
    ({properties: {}, type: {}}: any),
    'type must be string literal "object"',
  )

  itShouldThrow(
    'when type is an invalid string',
    ({properties: {}, type: 'boolean'}: any),
    'type must be string literal "object"',
  )

  itShouldThrow(
    'when unknown properties included',
    ({foo: 'bar', properties: {}}: any),
    'unknown key "foo"',
  )
})
