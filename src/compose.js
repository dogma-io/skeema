/** @flow */

import validateBoolean from './validators/boolean'
import validateConst from './validators/const'
import {validateArray, validateObject} from './validators/index'
import validateInteger from './validators/integer'
import validateNull from './validators/null'
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

export function allOf(...schemas: Array<Schema>): AllOfSchema {
  return {allOf: schemas}
}

export function anyOf(...schemas: Array<Schema>): AnyOfSchema {
  return {anyOf: schemas}
}

export function array(schema?: $Shape<ArraySchema>): ArraySchema {
  return error({type: 'array', ...schema}, validateArray)
}

export function boolean(schema?: $Shape<BooleanSchema>): BooleanSchema {
  return error({type: 'boolean', ...schema}, validateBoolean)
}

// eslint-disable-next-line flowtype/no-weak-types
export function constant(value: any): ConstSchema {
  return error({const: value}, validateConst)
}

export function integer(schema?: $Shape<IntegerSchema>): IntegerSchema {
  return error({type: 'integer', ...schema}, validateInteger)
}

export function nil(schema?: $Shape<NullSchema>): NullSchema {
  return error({type: 'null', ...schema}, validateNull)
}

export function not(schema: Schema): NotSchema {
  return {not: schema}
}

export function number(schema?: $Shape<NumberSchema>): NumberSchema {
  return error({type: 'number', ...schema}, validateNumber)
}

export function oneOf(...schemas: Array<Schema>): OneOfSchema {
  return {oneOf: schemas}
}

export function object(
  schema?: $Diff<ObjectSchema, {|type: 'object'|}>,
): ObjectSchema {
  return error({type: 'object', ...schema}, validateObject)
}

export function string(schema?: $Shape<StringSchema>): StringSchema {
  return error({type: 'string', ...schema}, validateString)
}
