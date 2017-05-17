# Example of installable dev environment <small>cphjs-inst-dev-env</small>

## Included
 - bundling with Rollup (ES modules and CJS bundles)
 - support for latest ES syntax with Babel
 - SCSS support with importing from JS
 - linting with ESlint
 - autoformatting with Prettier (through ESlint fix editor support)
 - testing with Jest
 - TDD mode with testing on compiled output

## Using

```bash
yarn add cphjs-inst-dev-env -D
```

```bash
yarn cphjs-tdd
yarn cphjs-build
yarn cphjs-test
```

## Custom entry point
By default, the entry point is set to `index.js` in root folder, but can be changed using `entry` entry in `package.json`.

```json
    ...
    "entry": "src/entry.js",
    ...
```