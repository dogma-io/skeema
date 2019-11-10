/** @flow */

import {boolean, not} from '../index'

function itShouldThrow(desc: string, input: *, errorMessage: string) {
  it(`should throw ${desc}`, () => {
    expect(() => {
      not(boolean(), input)
    }).toThrow(errorMessage)
  })
}

describe('not()', () => {
  it('should return expected object', () => {
    expect(not(boolean())).toEqual({not: {type: 'boolean'}})
  })

  it('should return expected object when annotations provided', () => {
    expect(
      not(boolean(), {
        description: 'Some useful text',
        examples: [1, 'foo'],
        title: 'Some useful title',
      }),
    ).toEqual({
      description: 'Some useful text',
      examples: [1, 'foo'],
      not: {type: 'boolean'},
      title: 'Some useful title',
    })
  })

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
