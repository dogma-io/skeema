/** @flow */

import validateAllOf from './validators/allOf'
import validateAnyOf from './validators/anyOf'
import validateBoolean from './validators/boolean'
import validateConst from './validators/const'
import {validateArray, validateObject} from './validators/index'
import validateInteger from './validators/integer'
import validateNot from './validators/not'
import validateNull from './validators/null'
import validateOneOf from './validators/oneOf'
import validateNumber from './validators/number'
import validateString from './validators/string'
import type {
  AllOfSchema,
  AnyOfSchema,
  ArraySchema,
  BooleanSchema,
  ConstSchema,
  IntegerSchema,
  NotSchema,
  NullSchema,
  NumberSchema,
  OneOfSchema,
  ObjectSchema,
  Schema,
  StringSchema,
  State,
} from './types'

function error<T>(schema: T, validator: (schema: T, path: string) => State): T {
  const state = validator(schema, '')

  if (state.errors.length) {
    throw new Error(state.errors[0].message)
  }

  if (state.warnings.length) {
    throw new Error(state.warnings[0].message)
  }

  return schema
}

export function allOf(
  schemas?: Array<Schema>,
  rest?: $Shape<$Rest<AllOfSchema, {|allOf: Array<Schema>|}>>,
): AllOfSchema {
  return error({...rest, allOf: schemas || []}, validateAllOf)
}

export function anyOf(
  schemas?: Array<Schema>,
  rest?: $Shape<$Rest<AnyOfSchema, {|anyOf: Array<Schema>|}>>,
): AnyOfSchema {
  return error({...rest, anyOf: schemas || []}, validateAnyOf)
}

export function array(schema?: $Shape<ArraySchema>): ArraySchema {
  return error({type: 'array', ...schema}, validateArray)
}

export function boolean(schema?: $Shape<BooleanSchema>): BooleanSchema {
  return error({type: 'boolean', ...schema}, validateBoolean)
}

/* eslint-disable flowtype/no-weak-types */
export function constant(
  value: any,
  rest?: $Shape<$Rest<ConstSchema, {|const: any|}>>,
): ConstSchema {
  return error({...rest, const: value}, validateConst)
}
/* eslint-enable flowtype/no-weak-types */

export function integer(schema?: $Shape<IntegerSchema>): IntegerSchema {
  return error({type: 'integer', ...schema}, validateInteger)
}

export function nil(schema?: $Shape<NullSchema>): NullSchema {
  return error({type: 'null', ...schema}, validateNull)
}

export function not(
  schema: Schema,
  rest?: $Shape<$Rest<NotSchema, {|not: Schema|}>>,
): NotSchema {
  return error({...rest, not: schema}, validateNot)
}

export function number(schema?: $Shape<NumberSchema>): NumberSchema {
  return error({type: 'number', ...schema}, validateNumber)
}

export function oneOf(
  schemas?: Array<Schema>,
  rest?: $Shape<$Rest<OneOfSchema, {|oneOf: Array<Schema>|}>>,
): OneOfSchema {
  return error({...rest, oneOf: schemas || []}, validateOneOf)
}

export function object(
  schema?: $Diff<ObjectSchema, {|type: 'object'|}>,
): ObjectSchema {
  return error({type: 'object', ...schema}, validateObject)
}

export function string(schema?: $Shape<StringSchema>): StringSchema {
  return error({type: 'string', ...schema}, validateString)
}
