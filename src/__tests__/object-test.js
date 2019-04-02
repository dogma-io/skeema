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

    expect(object({additionalProperties: false, properties})).toEqual({
      additionalProperties: false,
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

  itShouldThrow(
    'when additionalProperties is an array',
    ({additionalProperties: [], properties: {}}: any),
    'additionalProperties must be a boolean or a schema',
  )

  itShouldThrow(
    'when additionalProperties is null',
    ({additionalProperties: null, properties: {}}: any),
    'additionalProperties must be a boolean or a schema',
  )

  itShouldThrow(
    'when additionalProperties is a number',
    ({additionalProperties: 1, properties: {}}: any),
    'additionalProperties must be a boolean or a schema',
  )

  itShouldThrow(
    'when additionalProperties is a string',
    ({additionalProperties: 'foo', properties: {}}: any),
    'additionalProperties must be a boolean or a schema',
  )

  itShouldThrow(
    'when additionalProperties is an invalid schema',
    ({additionalProperties: {type: 'foo'}, properties: {}}: any),
    'unknown type "foo"',
  )

  itShouldThrow(
    'when properties is an array',
    ({properties: []}: any),
    'properties must be an object',
  )

  itShouldThrow(
    'when properties is a boolean',
    ({properties: true}: any),
    'properties must be an object',
  )

  itShouldThrow(
    'when properties is null',
    ({properties: null}: any),
    'properties must be an object',
  )

  itShouldThrow(
    'when properties is a number',
    ({properties: 1}: any),
    'properties must be an object',
  )

  itShouldThrow(
    'when properties is a string',
    ({properties: 'foo'}: any),
    'properties must be an object',
  )

  itShouldThrow(
    'when property is not a valid schema',
    ({properties: {foo: 'bar'}}: any),
    'schema must be an Object',
  )
})
