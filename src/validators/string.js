/** @flow */

import type {State, StringSchema} from '../types'
import {isPositiveInteger} from './numeric'
import {validateKeys} from './utils'

export default function validateString(
  schema: StringSchema,
  path: string,
): State {
  const state = validateKeys(
    schema,
    path,
    ['type'],
    ['enum', 'format', 'maxLength', 'minLength', 'pattern'],
  )

  const {enum: schemaEnum, maxLength, minLength, pattern} = schema

  if (maxLength !== undefined) {
    if (!isPositiveInteger(maxLength)) {
      state.errors.push({
        message: 'maxLength must be a positive integer',
        path: `${path}.maxLength`,
      })
    }

    if (minLength !== undefined && maxLength < minLength) {
      state.errors.push({
        message: 'maxLength cannot be less than minLength',
        path: `${path}.maxLength`,
      })
    }

    if (schemaEnum !== undefined) {
      schemaEnum.forEach((value: string, index: number) => {
        if (value.length > maxLength) {
          state.errors.push({
            message: `enum value "${value}" is longer than maxLength`,
            path: `${path}.enum[${index}]`,
          })
        }
      })
    }
  }

  if (minLength !== undefined) {
    if (!isPositiveInteger(minLength)) {
      state.errors.push({
        message: 'minLength must be a positive integer',
        path: `${path}.minLength`,
      })
    }

    if (schemaEnum !== undefined) {
      schemaEnum.forEach((value: string, index: number) => {
        if (value.length < minLength) {
          state.errors.push({
            message: `enum value "${value}" is shorter than minLength`,
            path: `${path}.enum[${index}]`,
          })
        }
      })
    }
  }

  if (pattern !== undefined) {
    let regex

    try {
      regex = RegExp(pattern)
    } catch (err) {
      state.errors.push({
        message: 'pattern is invalid',
        path: `${path}.pattern`,
      })
    }

    if (schemaEnum !== undefined) {
      schemaEnum.forEach((value: string, index: number) => {
        if (!regex.test(value)) {
          state.errors.push({
            message: `enum value "${value}" does not match pattern`,
            path: `${path}.enum[${index}]`,
          })
        }
      })
    }
  }

  return state
}
