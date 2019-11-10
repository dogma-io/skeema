/** @flow */

import type {State} from '../types'

export function initState(): State {
  return {
    errors: [],
    warnings: [],
  }
}

export function mergeState(...states: Array<State>): State {
  return states.reduce(
    (accumulator: State, currentValue: State): State => ({
      errors: accumulator.errors.concat(currentValue.errors),
      warnings: accumulator.warnings.concat(currentValue.warnings),
    }),
    initState(),
  )
}

export function validateSchema(
  type?: string,
  schema: Object, // eslint-disable-line flowtype/no-weak-types
  path: string,
  requiredKeys: Array<string>,
  allowedKeys?: Array<string> = [],
): State {
  const newState = initState()
  const allAllowedKeys = ['description', 'examples', 'title'].concat(
    allowedKeys,
  )

  requiredKeys.forEach((key: string) => {
    if (!(key in schema)) {
      newState.errors.push({
        message: `required key "${key}" is missing`,
        path,
      })
    }
  })

  Object.keys(schema).forEach((key: string) => {
    if (!requiredKeys.includes(key) && !allAllowedKeys.includes(key)) {
      newState.warnings.push({
        message: `unknown key "${key}"`,
        path,
      })
    }
  })

  if (type !== undefined && schema.type !== type) {
    newState.errors.push({
      message: `type must be string literal "${type}"`,
      path: `${path}.type`,
    })
  }

  const {description, examples, title} = schema

  if (description !== undefined && typeof description !== 'string') {
    newState.errors.push({
      message: 'description must be a string',
      path: `${path}.description`,
    })
  }

  if (examples !== undefined && !Array.isArray(examples)) {
    newState.errors.push({
      message: 'examples must be an array',
      path: `${path}.examples`,
    })
  }

  if (title !== undefined && typeof title !== 'string') {
    newState.errors.push({
      message: 'title must be a string',
      path: `${path}.title`,
    })
  }

  return newState
}
