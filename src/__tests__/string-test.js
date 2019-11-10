/** @flow */

import {string} from '../index'

function itShouldThrow(desc: string, input: *, errorMessage: string) {
  it(`should throw ${desc}`, () => {
    expect(() => {
      string(input)
    }).toThrow(errorMessage)
  })
}

describe('string()', () => {
  it('should return expected object when called without arguments', () => {
    expect(string()).toEqual({type: 'string'})
  })

  it('should return expected object when options are provided', () => {
    expect(
      string({
        maxLength: 2,
        minLength: 1,
        pattern: '\\d+',
      }),
    ).toEqual({
      maxLength: 2,
      minLength: 1,
      pattern: '\\d+',
      type: 'string',
    })
  })

  it('should return expected object when annotations provided', () => {
    expect(
      string({
        description: 'Some useful text',
        examples: ['foo', 'bar'],
        title: 'Some useful title',
      }),
    ).toEqual({
      description: 'Some useful text',
      examples: ['foo', 'bar'],
      title: 'Some useful title',
      type: 'string',
    })
  })

  itShouldThrow(
    'when type is an array',
    ({type: []}: any),
    'type must be string literal "string"',
  )

  itShouldThrow(
    'when type is a boolean',
    ({type: true}: any),
    'type must be string literal "string"',
  )

  itShouldThrow(
    'when type is null',
    ({type: null}: any),
    'type must be string literal "string"',
  )

  itShouldThrow(
    'when type is a number',
    ({type: 1}: any),
    'type must be string literal "string"',
  )

  itShouldThrow(
    'when type is an object',
    ({type: {}}: any),
    'type must be string literal "string"',
  )

  itShouldThrow(
    'when type is an invalid string',
    ({type: 'boolean'}: any),
    'type must be string literal "string"',
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
    'when enum is a boolean',
    ({enum: true}: any),
    'enum must be an array of strings',
  )

  itShouldThrow(
    'when enum is null',
    ({enum: null}: any),
    'enum must be an array of strings',
  )

  itShouldThrow(
    'when enum is a number',
    ({enum: 1}: any),
    'enum must be an array of strings',
  )

  itShouldThrow(
    'when enum is an object',
    ({enum: {}}: any),
    'enum must be an array of strings',
  )

  itShouldThrow(
    'when enum is a string',
    ({enum: 'foo'}: any),
    'enum must be an array of strings',
  )

  itShouldThrow(
    'when enum value is longer than maxLength',
    {enum: ['foo', 'foobar'], maxLength: 5},
    'enum value "foobar" is longer than maxLength',
  )

  itShouldThrow(
    'when enum value is shorter than minLength',
    {enum: ['foobar', 'foo'], minLength: 5},
    'enum value "foo" is shorter than minLength',
  )

  itShouldThrow(
    'when enum value does not match pattern',
    {enum: ['bar', 'baz', 'foo'], pattern: '^ba.$'},
    'enum value "foo" does not match pattern',
  )

  itShouldThrow(
    'when enum has duplicate values',
    {enum: ['foo', 'bar', 'foo']},
    'duplicate enum value',
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
    'when format is an array',
    ({format: 1}: any),
    'format must be a string',
  )

  itShouldThrow(
    'when format is a boolean',
    ({format: true}: any),
    'format must be a string',
  )

  itShouldThrow(
    'when format is null',
    ({format: null}: any),
    'format must be a string',
  )

  itShouldThrow(
    'when format is a number',
    ({format: 1}: any),
    'format must be a string',
  )

  itShouldThrow(
    'when format is an object',
    ({format: {}}: any),
    'format must be a string',
  )

  itShouldThrow(
    'when maxLength is an array',
    ({maxLength: []}: any),
    'maxLength must be a positive integer',
  )

  itShouldThrow(
    'when maxLength is a boolean',
    ({maxLength: true}: any),
    'maxLength must be a positive integer',
  )

  itShouldThrow(
    'when maxLength is null',
    ({maxLength: null}: any),
    'maxLength must be a positive integer',
  )

  itShouldThrow(
    'when maxLength is an object',
    ({maxLength: {}}: any),
    'maxLength must be a positive integer',
  )

  itShouldThrow(
    'when maxLength is a string',
    ({maxLength: 'foo'}: any),
    'maxLength must be a positive integer',
  )

  itShouldThrow(
    'when maxLength is less than minLength',
    {maxLength: 1, minLength: 2},
    'maxLength cannot be less than minLength',
  )

  itShouldThrow(
    'when maxLength is a negative integer',
    {maxLength: -1},
    'maxLength must be a positive integer',
  )

  itShouldThrow(
    'when maxLength is a non-integer number',
    {maxLength: 1.2},
    'maxLength must be a positive integer',
  )

  itShouldThrow(
    'when minLength is an array',
    ({minLength: []}: any),
    'minLength must be a positive integer',
  )

  itShouldThrow(
    'when minLength is a boolean',
    ({minLength: true}: any),
    'minLength must be a positive integer',
  )

  itShouldThrow(
    'when minLength is null',
    ({minLength: null}: any),
    'minLength must be a positive integer',
  )

  itShouldThrow(
    'when minLength is an object',
    ({minLength: {}}: any),
    'minLength must be a positive integer',
  )

  itShouldThrow(
    'when minLength is a string',
    ({minLength: 'foo'}: any),
    'minLength must be a positive integer',
  )

  itShouldThrow(
    'when minLength is a negative integer',
    {minLength: -1},
    'minLength must be a positive integer',
  )

  itShouldThrow(
    'when minLength is a non-integer number',
    {minLength: 1.2},
    'minLength must be a positive integer',
  )

  itShouldThrow(
    'when pattern is an array',
    ({pattern: []}: any),
    'pattern must be a string',
  )

  itShouldThrow(
    'when pattern is a boolean',
    ({pattern: true}: any),
    'pattern must be a string',
  )

  itShouldThrow(
    'when pattern is null',
    ({pattern: null}: any),
    'pattern must be a string',
  )

  itShouldThrow(
    'when pattern is a number',
    ({pattern: 1}: any),
    'pattern must be a string',
  )

  itShouldThrow(
    'when pattern is an object',
    ({pattern: {}}: any),
    'pattern must be a string',
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

  itShouldThrow('when invalid pattern', {pattern: '^('}, 'pattern is invalid')
})
