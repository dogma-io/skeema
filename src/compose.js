/** @flow */

import validateBoolean from './validators/boolean'
import {validateArray, validateObject} from './validators/index'
import validateInteger from './validators/integer'
import validateNumber from './validators/number'
import validateString from './validators/string'
import type {
  ArraySchema,
  BooleanSchema,
  IntegerSchema,
  NumberSchema,
  ObjectSchema,
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

export function array(schema?: $Shape<ArraySchema>): ArraySchema {
  return error({type: 'array', ...schema}, validateArray)
}

export function boolean(schema?: $Shape<BooleanSchema>): BooleanSchema {
  return error({type: 'boolean', ...schema}, validateBoolean)
}

export function integer(schema?: $Shape<IntegerSchema>): IntegerSchema {
  return error({type: 'integer', ...schema}, validateInteger)
}

export function number(schema?: $Shape<NumberSchema>): NumberSchema {
  return error({type: 'number', ...schema}, validateNumber)
}

export function object(
  schema?: $Diff<ObjectSchema, {|type: 'object'|}>,
): ObjectSchema {
  return error({type: 'object', ...schema}, validateObject)
}

export function string(schema?: $Shape<StringSchema>): StringSchema {
  return error({type: 'string', ...schema}, validateString)
}
