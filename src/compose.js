/** @flow */

import validateArray from './validators/array'
import validateBoolean from './validators/boolean'
import validateInteger from './validators/integer'
import validateNumber from './validators/number'
import validateObject from './validators/object'
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
  return error({...schema, type: 'array'}, validateArray)
}

export function boolean(schema?: $Shape<BooleanSchema>): BooleanSchema {
  return error({...schema, type: 'boolean'}, validateBoolean)
}

export function integer(schema?: $Shape<IntegerSchema>): IntegerSchema {
  return error({...schema, type: 'integer'}, validateInteger)
}

export function number(schema?: $Shape<NumberSchema>): NumberSchema {
  return error({...schema, type: 'number'}, validateNumber)
}

export function object(
  schema?: $Diff<ObjectSchema, {|type: 'object'|}>,
): ObjectSchema {
  return error({...schema, type: 'object'}, validateObject)
}

export function string(schema?: $Shape<StringSchema>): StringSchema {
  return error({...schema, type: 'string'}, validateString)
}
