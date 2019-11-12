/** @flow */

import {constant} from '../index'

function itShouldThrow(desc: string, input: *, errorMessage: string) {
  it(`should throw ${desc}`, () => {
    expect(() => {
      constant('foo', input)
    }).toThrow(errorMessage)
  })
}

describe('constant()', () => {
  it('should return expected object when called without arguments', () => {
    expect(constant()).toEqual({const: undefined})
  })

  it('should return expected object when called with array value', () => {
    expect(constant([1, true, 'foo'])).toEqual({const: [1, true, 'foo']})
  })

  it('should return expected object when called with boolean value', () => {
    expect(constant(true)).toEqual({const: true})
  })

  it('should return expected object when called with integer value', () => {
    expect(constant(1)).toEqual({const: 1})
  })

  it('should return expected object when called with null value', () => {
    expect(constant(null)).toEqual({const: null})
  })

  it('should return expected object when called with number value', () => {
    expect(constant(1.2)).toEqual({const: 1.2})
  })

  it('should return expected object when called with object value', () => {
    expect(constant({foo: 'bar'})).toEqual({const: {foo: 'bar'}})
  })

  it('should return expected object when annotations provided', () => {
    expect(
      constant('foo', {
        description: 'Some useful text',
        examples: ['foo'],
        title: 'Some useful title',
      }),
    ).toEqual({
      const: 'foo',
      description: 'Some useful text',
      examples: ['foo'],
      title: 'Some useful title',
    })
  })

  it('should return expected object when called with string value', () => {
    expect(constant('foo')).toEqual({const: 'foo'})
  })

  it('should return expected object when $comment is provided', () => {
    expect(constant('foo', {$comment: 'Foo bar'})).toEqual({
      $comment: 'Foo bar',
      const: 'foo',
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
