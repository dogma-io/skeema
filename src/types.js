/** @flow */

export type BooleanSchema = {|
  type: 'boolean',
|}

export type ConstSchema = {|
  // eslint-disable-next-line flowtype/no-weak-types
  const: any,
|}

export type IntegerSchema = {|
  exclusiveMaximum?: boolean,
  exclusiveMinimum?: boolean,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
  type: 'integer',
|}

export type NullSchema = {|
  type: 'null',
|}

export type NumberSchema = {|
  exclusiveMaximum?: boolean,
  exclusiveMinimum?: boolean,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
  type: 'number',
|}

export type StringSchema = {|
  enum?: Array<string>,
  format?: string,
  maxLength?: number,
  minLength?: number,
  pattern?: string,
  type: 'string',
|}

export type Schema =
  | ArraySchema // eslint-disable-line no-use-before-define
  | BooleanSchema
  | ConstSchema
  | IntegerSchema
  | NullSchema
  | NumberSchema
  | ObjectSchema // eslint-disable-line no-use-before-define
  | StringSchema

export type AllOfSchema = {|
  allOf: Array<Schema>,
|}

export type AnyOfSchema = {|
  anyOf: Array<Schema>,
|}

export type NotSchema = {|
  not: Schema,
|}

export type OneOfSchema = {|
  oneOf: Array<Schema>,
|}

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
