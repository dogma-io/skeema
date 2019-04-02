/** @flow */

import type {State, StringSchema} from '../types'
import {isPositiveInteger} from './numeric'
import {validateSchema} from './utils'

export default function validateString(
  schema: StringSchema,
  path: string,
): State {
  const state = validateSchema(
    'string',
    schema,
    path,
    ['type'],
    ['enum', 'format', 'maxLength', 'minLength', 'pattern'],
  )

  const {enum: schemaEnum, format, maxLength, minLength, pattern} = schema

  if (
    schemaEnum !== undefined &&
    (!Array.isArray(schemaEnum) ||
      schemaEnum.some((value: string): boolean => typeof value !== 'string'))
  ) {
    state.errors.push({
      message: 'enum must be an array of strings',
      path: `${path}.enum`,
    })
  }

  if (Array.isArray(schemaEnum)) {
    const set = new Set()

    schemaEnum.forEach((value: string, index: number) => {
      if (set.has(value)) {
        state.warnings.push({
          message: 'duplicate enum value',
          path: `${path}.enum[${index}]`,
        })
      }

      set.add(value)
    })
  }

  if (format !== undefined && typeof format !== 'string') {
    state.errors.push({
      message: 'format must be a string',
      path: `${path}.format`,
    })
  }

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

    if (Array.isArray(schemaEnum)) {
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

    if (Array.isArray(schemaEnum)) {
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
    if (typeof pattern !== 'string') {
      state.errors.push({
        message: 'pattern must be a string',
        path: `${path}.pattern`,
      })
    } else {
      let regex

      try {
        regex = RegExp(pattern)
      } catch (err) {
        state.errors.push({
          message: 'pattern is invalid',
          path: `${path}.pattern`,
        })
      }

      if (Array.isArray(schemaEnum)) {
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
  }

  return state
}
