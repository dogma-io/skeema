# skeema [![NPM][npm-img]][npm-url] [![Coverage][cov-img]][cov-url]

JSON schema utilities.

## Table of Contents

*   [Installation](#installation)
*   [Documentation](#documentation)
*   [Code of Conduct](#code-of-conduct)
*   [Contributing](#contributing)
*   [License](#license)

## Installation

**npm**

```bash
npm install skeema
```

**yarn**

```bash
yarn add skeema
```

## Documentation

First if you are unfamiliar with JSON schema you should [read up on it first][json-schema-url].

### Schema helpers

The following methods are meant to help you build a schema, with built in Flow types and runtime validation. If you use Flow for type checking then Flow should catch errors for you, otherwise you'll still get runtime errors when these methods are executed.

#### `allOf(schemas, rest)`

`schemas` is an optional argument which should be an array of schemas.

`rest` is an optional argument which when present should be an object with the following attributes:

| Attribute     | Required | Type            | Description                                                 |
| ------------- | -------- | --------------- | ----------------------------------------------------------- |
| `$comment`    | No       | `string`        | Useful for leaving notes for maintainer of schema           |
| `description` | No       | `string`        | Long explanation about purpose of data described by schema  |
| `examples`    | No       | `Array<any>`    | A place to provide examples that validate against schema    |
| `title`       | No       | `string`        | Short explanation about purpose of data described by schema |

#### `anyOf(schemas, rest)`

`schemas` is an optional argument which should be an array of schemas.

`rest` is an optional argument which when present should be an object with the following attributes:

| Attribute     | Required | Type            | Description                                                 |
| ------------- | -------- | --------------- | ----------------------------------------------------------- |
| `$comment`    | No       | `string`        | Useful for leaving notes for maintainer of schema           |
| `description` | No       | `string`        | Long explanation about purpose of data described by schema  |
| `examples`    | No       | `Array<any>`    | A place to provide examples that validate against schema    |
| `title`       | No       | `string`        | Short explanation about purpose of data described by schema |

#### `array(schema)`

`schema` is an optional argument which when present should be an object with the following attributes:

| Attribute         | Required | Type                        | Description                                                 |
| ----------------- | -------- | --------------------------- | ----------------------------------------------------------- |
| `$comment`        | No       | `string`                    | Useful for leaving notes for maintainer of schema           |
| `additionalItems` | No       | `boolean` or `Schema`       | Whether or not to allow additional items and their schema   |
| `contains`        | No       | `Schema`                    | Schema one or more items should adhere to                   |
| `description`     | No       | `string`                    | Long explanation about purpose of data described by schema  |
| `examples`        | No       | `Array<Array<any>>`         | A place to provide examples that validate against schema    |
| `items`           | No       | `Schema` or `Array<Schema>` | Schema items should adhere to                               |
| `maxItems`        | No       | `number`                    | Maximum number of items allowed                             |
| `minItems`        | No       | `number`                    | Minimum number of items allowed                             |
| `title`           | No       | `string`                    | Short explanation about purpose of data described by schema |
| `type`            | No       | `"boolean"`                 | This is added automatically but can still be included       |
| `uniqueItems`     | No       | `boolean`                   | Whether or not to ensure each item is unique                |

#### `boolean(schema)`

`schema` is an optional argument which when present should be an object with the following attributes:

| Attribute     | Required | Type             | Description                                                 |
| ------------- | -------- | ---------------- | ----------------------------------------------------------- |
| `$comment`    | No       | `string`         | Useful for leaving notes for maintainer of schema           |
| `description` | No       | `string`         | Long explanation about purpose of data described by schema  |
| `examples`    | No       | `Array<boolean>` | A place to provide examples that validate against schema    |
| `title`       | No       | `string`         | Short explanation about purpose of data described by schema |
| `type`        | No       | `"boolean"`      | This is added automatically but can still be included       |

#### `constant(value, rest)`

`value` is a required argument which can be anything (a string, number, object with deeply nested attributes, etc).

`rest` is an optional argument which when present should be an object with the following attributes:

| Attribute     | Required | Type            | Description                                                 |
| ------------- | -------- | --------------- | ----------------------------------------------------------- |
| `$comment`    | No       | `string`        | Useful for leaving notes for maintainer of schema           |
| `description` | No       | `string`        | Long explanation about purpose of data described by schema  |
| `examples`    | No       | `Array<any>`    | A place to provide examples that validate against schema    |
| `title`       | No       | `string`        | Short explanation about purpose of data described by schema |

#### `integer(schema)`

`schema` is an optional argument which when present should be an object with the following attributes:

| Attribute          | Required | Type            | Description                                                  |
| ------------------ | -------- | --------------- | ------------------------------------------------------------ |
| `$comment`         | No       | `string`        | Useful for leaving notes for maintainer of schema            |
| `description`      | No       | `string`        | Long explanation about purpose of data described by schema   |
| `examples`         | No       | `Array<number>` | A place to provide examples that validate against schema     |
| `exclusiveMaximum` | No       | `boolean`       | Whether or not `maximum` is exclusive                        |
| `exclusiveMinimum` | No       | `boolean`       | Whether or not `minimum` is exclusive                        |
| `maximum`          | No       | `number`        | The maximum value the integer should be (must be an integer) |
| `minimum`          | No       | `number`        | The minimum value the integer should be (must be an integer) |
| `multipleOf`       | No       | `number`        | What the number should e a multiple of (must be an integer)  |
| `title`            | No       | `string`        | Short explanation about purpose of data described by schema  |
| `type`             | No       | `"integer"`     | This is added automatically but can still be included        |

#### `nil(schema)`

`schema` is an optional argument which when present should be an object with the following attributes:

| Attribute     | Required | Type            | Description                                                 |
| ------------- | -------- | --------------- | ----------------------------------------------------------- |
| `$comment`    | No       | `string`        | Useful for leaving notes for maintainer of schema           |
| `description` | No       | `string`        | Long explanation about purpose of data described by schema  |
| `examples`    | No       | `Array<null>`   | A place to provide examples that validate against schema    |
| `title`       | No       | `string`        | Short explanation about purpose of data described by schema |
| `type`        | No       | `"null"`        | This is added automatically but can still be included       |

#### `not(schema, rest)`

`schemas` is a required argument which should be a schema.

`rest` is an optional argument which when present should be an object with the following attributes:

| Attribute     | Required | Type            | Description                                                 |
| ------------- | -------- | --------------- | ----------------------------------------------------------- |
| `$comment`    | No       | `string`        | Useful for leaving notes for maintainer of schema           |
| `description` | No       | `string`        | Long explanation about purpose of data described by schema  |
| `examples`    | No       | `Array<any>`    | A place to provide examples that validate against schema    |
| `title`       | No       | `string`        | Short explanation about purpose of data described by schema |

#### `number(schema)`

`schema` is an optional argument which when present should be an object with the following attributes:

| Attribute          | Required | Type            | Description                                                 |
| ------------------ | -------- | --------------- | ----------------------------------------------------------- |
| `$comment`         | No       | `string`        | Useful for leaving notes for maintainer of schema           |
| `description`      | No       | `string`        | Long explanation about purpose of data described by schema  |
| `examples`         | No       | `Array<number>` | A place to provide examples that validate against schema    |
| `exclusiveMaximum` | No       | `boolean`       | Whether or not `maximum` is exclusive                       |
| `exclusiveMinimum` | No       | `boolean`       | Whether or not `minimum` is exclusive                       |
| `maximum`          | No       | `number`        | The maximum value the number should be                      |
| `minimum`          | No       | `number`        | The minimum value the number should be                      |
| `multipleOf`       | No       | `number`        | What the number should e a multiple of                      |
| `title`            | No       | `string`        | Short explanation about purpose of data described by schema |
| `type`             | No       | `"number"`      | This is added automatically but can still be included       |

#### `object(schema)`

`schema` is a required argument which when present should be an object with the following attributes:

| Attribute              | Required | Type                  | Description                                                    |
| ---------------------- | -------- | --------------------- | -------------------------------------------------------------- |
| `$comment`             | No       | `string`              | Useful for leaving notes for maintainer of schema              |
| `additionalProperties` | No       | `boolean` or `Schema` | Whether or not to allow additional properties and their schema |
| `description`          | No       | `string`              | Long explanation about purpose of data described by schema     |
| `examples`             | No       | `Array<Object>`       | A place to provide examples that validate against schema       |
| `maxProperties`        | No       | `number`              | The maximum number of properties object may contain            |
| `minProperties`        | No       | `number`              | The minimum number of properties object may contain            |
| `patternProperties`    | No       | `Object`              | Map of regex keys to schemas for validating properties against |
| `properties`           | Yes      | `Object`              | Map of property names to schemas                               |
| `propertyNames`        | No       | `Object`              | Schema to validate property names against                      |
| `required`             | No       | `Array<string>`       | List of required properties                                    |
| `title`                | No       | `string`              | Short explanation about purpose of data described by schema    |
| `type`                 | No       | `"object"`            | This is added automatically but can still be included       |

#### `oneOf(schemas, rest)`

`schemas` is an optional argument which should be an array of schemas.

`rest` is an optional argument which when present should be an object with the following attributes:

| Attribute     | Required | Type            | Description                                                 |
| ------------- | -------- | --------------- | ----------------------------------------------------------- |
| `$comment`    | No       | `string`        | Useful for leaving notes for maintainer of schema           |
| `description` | No       | `string`        | Long explanation about purpose of data described by schema  |
| `examples`    | No       | `Array<any>`    | A place to provide examples that validate against schema    |
| `title`       | No       | `string`        | Short explanation about purpose of data described by schema |

#### `string(schema)`

`schema` is an optional argument which when present should be an object with the following attributes:

| Attribute     | Required | Type            | Description                                                 |
| ------------- | -------- | --------------- | ----------------------------------------------------------- |
| `$comment`    | No       | `string`        | Useful for leaving notes for maintainer of schema           |
| `description` | No       | `string`        | Long explanation about purpose of data described by schema  |
| `enum`        | No       | `Array<string>` | List of valid string values                                 |
| `examples`    | No       | `Array<string>` | A place to provide examples that validate against schema    |
| `format`      | No       | `string`        | Format that the string should match                         |
| `maxLength`   | No       | `number`        | The maximum length the string should be                     |
| `minLength`   | No       | `number`        | The minimum length the string should be                     |
| `pattern`     | No       | `string`        | A regular expression pattern the string should match        |
| `title`       | No       | `string`        | Short explanation about purpose of data described by schema |
| `type`        | No       | `"string"`      | This is added automatically but can still be included       |

## Code of Conduct

Please see the [code of conduct](CODE_OF_CONDUCT.md).

## Contributing

Please see the [contributing guide](CONTRIBUTING.md).

## License

[MIT](LICENSE.md)

[cov-img]: https://img.shields.io/codecov/c/github/dogma-io/skeema.svg "Code Coverage"
[cov-url]: https://codecov.io/gh/dogma-io/skeema

[json-schema-url]: https://json-schema.org/understanding-json-schema/index.html

[npm-img]: https://img.shields.io/npm/v/skeema.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/skeema
