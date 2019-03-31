/** @flow */

import {validateSchema} from '../index'
import type {Reference} from '../types'

function expectState(
  schema: any,
  errors?: Array<Reference> = [],
  warnings?: Array<Reference> = [],
) {
  expect(validateSchema(schema)).toEqual({errors, warnings})
}

function itShouldInvalidate(
  desc: string,
  schema: *,
  errors: Array<Reference>,
  warnings?: Array<Reference> = [],
) {
  it(`should invalidate ${desc}`, () => {
    expectState(schema, errors, warnings)
  })
}

function itShouldValidate(desc: string, schema: *) {
  it(`should validate ${desc}`, () => {
    expectState(schema)
  })
}

describe('validateSchema()', () => {
  itShouldValidate('array type', {type: 'array'})
  itShouldValidate('boolean type', {type: 'boolean'})
  itShouldValidate('integer type', {type: 'integer'})
  itShouldValidate('number type', {type: 'number'})
  itShouldValidate('object type', {type: 'object'})
  itShouldValidate('string type', {type: 'string'})
  itShouldInvalidate('unknown type', {type: 'foo'}, [
    {message: 'Unknown type "foo"', path: '.type'},
  ])
})
