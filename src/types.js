/** @flow */

type Annotations = {|
  description?: string,
  // eslint-disable-next-line flowtype/no-weak-types
  examples?: Array<any>,
  title?: string,
|}

type Comments = {|
  $comment?: string
|}

export type BooleanSchema = {|
  ...Annotations,
  ...Comments,
  type: 'boolean',
|}

export type ConstSchema = {|
  ...Annotations,
  ...Comments,
  // eslint-disable-next-line flowtype/no-weak-types
  const: any,
|}

export type IntegerSchema = {|
  ...Annotations,
  ...Comments,
  exclusiveMaximum?: boolean,
  exclusiveMinimum?: boolean,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
  type: 'integer',
|}

export type NullSchema = {|
  ...Annotations,
  ...Comments,
  type: 'null',
|}

export type NumberSchema = {|
  ...Annotations,
  ...Comments,
  exclusiveMaximum?: boolean,
  exclusiveMinimum?: boolean,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
  type: 'number',
|}

export type StringSchema = {|
  ...Annotations,
  ...Comments,
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
  ...Annotations,
  ...Comments,
  allOf: Array<Schema>,
|}

export type AnyOfSchema = {|
  ...Annotations,
  ...Comments,
  anyOf: Array<Schema>,
|}

export type NotSchema = {|
  ...Annotations,
  ...Comments,
  not: Schema,
|}

export type OneOfSchema = {|
  ...Annotations,
  ...Comments,
  oneOf: Array<Schema>,
|}

export type ArraySchema = {|
  ...Annotations,
  ...Comments,
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
  ...Annotations,
  ...Comments,
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
