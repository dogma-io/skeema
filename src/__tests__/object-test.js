/** @flow */

import boolean from '../boolean'
import object from '../object'
import string from '../string'

describe('object()', () => {
  it('should return expected object when called with empty properties', () => {
    expect(object({properties: {}})).toEqual({properties: {}, type: 'object'})
  })

  it('should return expected object when called with non-empty properties', () => {
    const properties = {
      bar: boolean(),
      baz: string(),
    }

    expect(object({properties})).toEqual({
      properties: {
        bar: {type: 'boolean'},
        baz: {type: 'string'},
      },
      type: 'object',
    })
  })
})
