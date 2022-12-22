# Peak Test Task

This project provides flexible form editor, with possibility to add the following types of fields: number, text and checkbox, plus divider, which is rendered into h2 element. Default values and required attribute are supported.

Order of the fields can be changed as needed with drag'n'drop via Move button on each field.

Form config is being encoded into Base64 string, which can be used on Render page, to actually render the form. Form submit can be emulated with Submit button, basic HTML5 validation is implemented. Form values will be grabbed into JSON like <fieldId, fieldValue> and printed in the console.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
