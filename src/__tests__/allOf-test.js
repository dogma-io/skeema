/** @flow */

import {allOf, boolean, nil, string} from '../index'

function itShouldThrow(desc: string, input: *, rest: *, errorMessage: string) {
  it(`should throw ${desc}`, () => {
    expect(() => {
      allOf(input, rest)
    }).toThrow(errorMessage)
  })
}

describe('allOf()', () => {
  it('should return expected object when called without arguments', () => {
    expect(allOf()).toEqual({allOf: []})
  })

  it('should return expected object when called with one schema', () => {
    expect(allOf([boolean()])).toEqual({allOf: [{type: 'boolean'}]})
  })

  it('should return expected object when called with multiple schemas', () => {
    expect(allOf([boolean(), nil(), string()])).toEqual({
      allOf: [{type: 'boolean'}, {type: 'null'}, {type: 'string'}],
    })
  })

  it('should return expected object when annotations provided', () => {
    expect(
      allOf([boolean()], {
        description: 'Some useful text',
        examples: [true, false],
        title: 'Some useful title',
      }),
    ).toEqual({
      allOf: [{type: 'boolean'}],
      description: 'Some useful text',
      examples: [true, false],
      title: 'Some useful title',
    })
  })

  it('should return expected object when $comment is provided', () => {
    expect(allOf([boolean()], {$comment: 'Foo bar'})).toEqual({
      $comment: 'Foo bar',
      allOf: [{type: 'boolean'}],
    })
  })

  itShouldThrow(
    'when $comment is an array',
    [boolean()],
    ({$comment: []}: any),
    '$comment must be a string',
  )

  itShouldThrow(
    'when $comment is a boolean',
    [boolean()],
    ({$comment: true}: any),
    '$comment must be a string',
  )

  itShouldThrow(
    'when $comment is null',
    [boolean()],
    ({$comment: null}: any),
    '$comment must be a string',
  )

  itShouldThrow(
    'when $comment is a number',
    [boolean()],
    ({$comment: 1}: any),
    '$comment must be a string',
  )

  itShouldThrow(
    'when $comment is an object',
    [boolean()],
    ({$comment: {}}: any),
    '$comment must be a string',
  )

  itShouldThrow(
    'when allOf is a boolean',
    (true: any),
    undefined,
    'allOf must be an array',
  )

  itShouldThrow(
    'when allOf is a number',
    (1: any),
    undefined,
    'allOf must be an array',
  )

  itShouldThrow(
    'when allOf is an object',
    ({}: any),
    undefined,
    'allOf must be an array',
  )

  itShouldThrow(
    'when allOf is a string',
    ('foo': any),
    undefined,
    'allOf must be an array',
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
