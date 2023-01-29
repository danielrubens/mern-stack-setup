# Full Stack Setup

This is a configuration project, going step-by-step on how to setup a client-server environment.

## If you want to go step by step:
In the root directory, start by creating your React App under a TypeScript template:
#### `npx create-react-app client`

Setup ESLint
#### `cd client`
#### `npm init @eslint/config`
For this project I choosed:
- "To check syntax, find problems and enforce code style"
- JavaScript modules (import/export)
- React
- TypeScript: no
- Browser
- Standard
- JSON

On the `.eslintrc.json` add `"jest": true` to the `env` key.
On the `package.json` add `"lint": "eslint ."` and `"lint:fix": "eslint --fix"` to the `scripts` key.

To format the correct way to work with ESLint:
#### `npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev`
On the `.eslintrc.json` add `"plugin:prettier/recommended"` inside the array of the `extends` key. The same goes for the string `"prettier"` inside the array of the `plugins` key.