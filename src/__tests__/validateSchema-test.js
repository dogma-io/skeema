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

const VALID_TESTS = [
  ['array type', {type: 'array'}],
  ['boolean type', {type: 'boolean'}],
  ['integer type', {type: 'integer'}],
  ['number type', {type: 'number'}],
  ['object type', {type: 'object'}],
  ['string type', {type: 'string'}],
]

describe('validateSchema()', () => {
  VALID_TESTS.forEach(([desc, schema]) => {
    itShouldValidate(desc, schema)
  })

  itShouldInvalidate('unknown type', {type: 'foo'}, [
    {message: 'Unknown type "foo"', path: '.type'},
  ])

  itShouldInvalidate(
    'integer type with errors and warnings',
    {
      exclusiveMaximum: true,
      exclusiveMinimum: true,
      multipleOf: 1.2,
      type: 'integer',
    },
    [
      {
        message: 'multipleOf must be a positive integer',
        path: '.multipleOf',
      },
    ],
    [
      {
        message: 'exclusiveMaximum should not be present when maximum is not',
        path: '.exclusiveMaximum',
      },
      {
        message: 'exclusiveMinimum should not be present when minimum is not',
        path: '.exclusiveMinimum',
      },
    ],
  )

  itShouldInvalidate(
    'number type with errors and warnings',
    {
      exclusiveMaximum: true,
      exclusiveMinimum: true,
      multipleOf: -1.2,
      type: 'number',
    },
    [
      {
        message: 'multipleOf must be a positive number',
        path: '.multipleOf',
      },
    ],
    [
      {
        message: 'exclusiveMaximum should not be present when maximum is not',
        path: '.exclusiveMaximum',
      },
      {
        message: 'exclusiveMinimum should not be present when minimum is not',
        path: '.exclusiveMinimum',
      },
    ],
  )
})
