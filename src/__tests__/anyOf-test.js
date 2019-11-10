/** @flow */

import {anyOf, boolean, nil, string} from '../index'

function itShouldThrow(desc: string, input: *, rest: *, errorMessage: string) {
  it(`should throw ${desc}`, () => {
    expect(() => {
      anyOf(input, rest)
    }).toThrow(errorMessage)
  })
}

describe('anyOf()', () => {
  it('should return expected object when called without arguments', () => {
    expect(anyOf()).toEqual({anyOf: []})
  })

  it('should return expected object when called with one schema', () => {
    expect(anyOf([boolean()])).toEqual({anyOf: [{type: 'boolean'}]})
  })

  it('should return expected object when called with multiple schemas', () => {
    expect(anyOf([boolean(), nil(), string()])).toEqual({
      anyOf: [{type: 'boolean'}, {type: 'null'}, {type: 'string'}],
    })
  })

  it('should return expected object when annotations provided', () => {
    expect(
      anyOf([boolean()], {
        description: 'Some useful text',
        examples: [true, false],
        title: 'Some useful title',
      }),
    ).toEqual({
      anyOf: [{type: 'boolean'}],
      description: 'Some useful text',
      examples: [true, false],
      title: 'Some useful title',
    })
  })

  itShouldThrow(
    'when anyOf is a boolean',
    (true: any),
    undefined,
    'anyOf must be an array',
  )

  itShouldThrow(
    'when anyOf is a number',
    (1: any),
    undefined,
    'anyOf must be an array',
  )

  itShouldThrow(
    'when anyOf is an object',
    ({}: any),
    undefined,
    'anyOf must be an array',
  )

  itShouldThrow(
    'when anyOf is a string',
    ('foo': any),
    undefined,
    'anyOf must be an array',
  )

  itShouldThrow(
    'when description is an array',
    [boolean()],
    ({description: []}: any),
    'description must be a string',
  )

  itShouldThrow(
    'when description is a boolean',
    [boolean()],
    ({description: true}: any),
    'description must be a string',
  )

  itShouldThrow(
    'when description is null',
    [boolean()],
    ({description: null}: any),
    'description must be a string',
  )

  itShouldThrow(
    'when description is a number',
    [boolean()],
    ({description: 1}: any),
    'description must be a string',
  )

  itShouldThrow(
    'when description is an object',
    [boolean()],
    ({description: {}}: any),
    'description must be a string',
  )

  itShouldThrow(
    'when examples is a boolean',
    [boolean()],
    ({examples: true}: any),
    'examples must be an array',
  )

  itShouldThrow(
    'when examples is null',
    [boolean()],
    ({examples: null}: any),
    'examples must be an array',
  )

  itShouldThrow(
    'when examples is a number',
    [boolean()],
    ({examples: 1}: any),
    'examples must be an array',
  )

  itShouldThrow(
    'when examples is an object',
    [boolean()],
    ({examples: {}}: any),
    'examples must be an array',
  )

  itShouldThrow(
    'when examples is a string',
    [boolean()],
    ({examples: {}}: any),
    'examples must be an array',
  )

  itShouldThrow(
    'when title is an array',
    [boolean()],
    ({title: []}: any),
    'title must be a string',
  )

  itShouldThrow(
    'when title is a boolean',
    [boolean()],
    ({title: true}: any),
    'title must be a string',
  )

  itShouldThrow(
    'when title is null',
    [boolean()],
    ({title: null}: any),
    'title must be a string',
  )

  itShouldThrow(
    'when title is a number',
    [boolean()],
    ({title: 1}: any),
    'title must be a string',
  )

  itShouldThrow(
    'when title is an object',
    [boolean()],
    ({title: {}}: any),
    'title must be a string',
  )
})