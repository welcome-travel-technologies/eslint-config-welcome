# eslint-config-welcome

ESLint proposed configuration for Welcome Pickups JavaScript projects

# Include these rules in your project

## Installation
Run `npm install -D eslint prettier eslint-config-welcome babel-eslint`

To use these rules on your project, add the Welcome Pickups configuration on your `.eslintrc` file.

*.eslintrc*
```js
{
  "extends": "eslint-config-welcome",
  "parser": "babel-eslint"
}
```

## Contributing
All rules are grouped by concern under [`src/rules`](src/rules), please add or edit rules there.
The main index.js file is generated on build and is used only by NPM.

The code is transpiled using [bublé-rollup](https://github.com/rollup/rollup-plugin-buble).

## Prettier proposed rules

At Welcome Pickups we use a standard set of Prettier rules for our JavaScript code, along with the ESLint setup, which you can find below and add on your *.prettierrc* file in the top level of your project.

*.prettierrc*
```js
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false,
  "bracketSpacing": true,
  "arrowParens": "always"
}
```