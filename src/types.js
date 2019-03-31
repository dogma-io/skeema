/** @flow */

export type BooleanSchema = {|
  type: 'boolean',
|}

export type IntegerSchema = {|
  exclusiveMaximum?: boolean,
  exclusiveMinimum?: boolean,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
  type: 'integer',
|}

export type NumberSchema = {|
  exclusiveMaximum?: boolean,
  exclusiveMinimum?: boolean,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
  type: 'number',
|}

export type Format =
  | 'date'
  | 'date-time'
  | 'email'
  | 'hostname'
  | 'idn-email'
  | 'idn-hostname'
  | 'ipv4'
  | 'ipv6'
  | 'iri'
  | 'iri-reference'
  | 'json-pointer'
  | 'regex'
  | 'relative-json-pointer'
  | 'time'
  | 'uri'
  | 'uri-reference'
  | 'uri-template'

export type StringSchema = {|
  enum?: Array<string>,
  format?: Format,
  maxLength?: number,
  minLength?: number,
  pattern?: string,
  type: 'string',
|}

export type Schema =
  | ArraySchema // eslint-disable-line no-use-before-define
  | BooleanSchema
  | IntegerSchema
  | NumberSchema
  | ObjectSchema // eslint-disable-line no-use-before-define
  | StringSchema

export type ArraySchema = {|
  additionalItems?: boolean | Schema,
  contains?: Schema,
  items?: Schema | Array<Schema>,
  maxItems?: number,
  minItems?: number,
  type: 'array',
  uniqueItems?: boolean,
|}

// TODO: add support for property dependencies and schema dependencies
export type ObjectSchema = {|
  additionalProperties?: boolean | Schema,
  maxProperties?: number,
  minProperties?: number,
  patternProperties?: {|[key: string]: Schema|},
  properties: {[key: string]: Schema},
  propertyNames?: StringSchema,
  required?: Array<string>,
  type: 'object',
|}

export type Reference = {|
  message: string,
  path: string,
|}

export type State = {|
  errors: Array<Reference>,
  warnings: Array<Reference>,
|}
