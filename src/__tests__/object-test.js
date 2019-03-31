/** @flow */

import {boolean, object, string} from '../index'

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

  it('should throw error when unknown properties included', () => {
    expect(() => {
      object(({foo: 'bar', properties: {}}: any))
    }).toThrow('unknown key "foo"')
  })
})
