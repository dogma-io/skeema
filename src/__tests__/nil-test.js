/** @flow */

import {nil} from '../index'

function itShouldThrow(desc: string, input: *, errorMessage: string) {
  it(`should throw ${desc}`, () => {
    expect(() => {
      nil(input)
    }).toThrow(errorMessage)
  })
}

describe('nil()', () => {
  it('should return expected object when called without arguments', () => {
    expect(nil()).toEqual({type: 'null'})
  })

  it('should return expected object when annotations provided', () => {
    expect(
      nil({
        description: 'Some useful text',
        examples: [null],
        title: 'Some useful title',
      }),
    ).toEqual({
      description: 'Some useful text',
      examples: [null],
      title: 'Some useful title',
      type: 'null',
    })
  })

  it('should return expected object when $comment is provided', () => {
    expect(nil({$comment: 'Foo bar'})).toEqual({
      $comment: 'Foo bar',
      type: 'null',
    })
  })

  itShouldThrow(
    'when $comment is an array',
    ({$comment: []}: any),
    '$comment must be a string',
  )

  itShouldThrow(
    'when $comment is a boolean',
    ({$comment: true}: any),
    '$comment must be a string',
  )

  itShouldThrow(
    'when $comment is null',
    ({$comment: null}: any),
    '$comment must be a string',
  )

  itShouldThrow(
    'when $comment is a number',
    ({$comment: 1}: any),
    '$comment must be a string',
  )

  itShouldThrow(
    'when $comment is an object',
    ({$comment: {}}: any),
    '$comment must be a string',
  )

  itShouldThrow(
    'when type is an array',
    ({type: []}: any),
    'type must be string literal "null"',
  )

  itShouldThrow(
    'when type is a boolean',
    ({type: true}: any),
    'type must be string literal "null"',
  )

  itShouldThrow(
    'when type is null',
    ({type: null}: any),
    'type must be string literal "null"',
  )

  itShouldThrow(
    'when type is a number',
    ({type: 1}: any),
    'type must be string literal "null"',
  )

  itShouldThrow(
    'when type is an object',
    ({type: {}}: any),
    'type must be string literal "null"',
  )

  itShouldThrow(
    'when type is an invalid string',
    ({type: 'string'}: any),
    'type must be string literal "null"',
  )

  itShouldThrow(
    'when unknown properties included',
    ({foo: 'bar'}: any),
    'unknown key "foo"',
  )

  itShouldThrow(
    'when description is an array',
    ({description: []}: any),
    'description must be a string',
  )

  itShouldThrow(
    'when description is a boolean',
    ({description: true}: any),
    'description must be a string',
  )

  itShouldThrow(
    'when description is null',
    ({description: null}: any),
    'description must be a string',
  )

  itShouldThrow(
    'when description is a number',
    ({description: 1}: any),
    'description must be a string',
  )

  itShouldThrow(
    'when description is an object',
    ({description: {}}: any),
    'description must be a string',
  )

  itShouldThrow(
    'when examples is a boolean',
    ({examples: true}: any),
    'examples must be an array',
  )

  itShouldThrow(
    'when examples is null',
    ({examples: null}: any),
    'examples must be an array',
  )

  itShouldThrow(
    'when examples is a number',
    ({examples: 1}: any),
    'examples must be an array',
  )

  itShouldThrow(
    'when examples is an object',
    ({examples: {}}: any),
    'examples must be an array',
  )

  itShouldThrow(
    'when examples is a string',
    ({examples: {}}: any),
    'examples must be an array',
  )

  itShouldThrow(
    'when title is an array',
    ({title: []}: any),
    'title must be a string',
  )

  itShouldThrow(
    'when title is a boolean',
    ({title: true}: any),
    'title must be a string',
  )

  itShouldThrow(
    'when title is null',
    ({title: null}: any),
    'title must be a string',
  )

  itShouldThrow(
    'when title is a number',
    ({title: 1}: any),
    'title must be a string',
  )

  itShouldThrow(
    'when title is an object',
    ({title: {}}: any),
    'title must be a string',
  )
})
