# Laravel Mix React and TypeScript Extension

Laravel Mix already supports React and TypeScript. But combining those two are rather undocumented. I have made my custom extension to easily start React/TypeScript applications.

Please note that this extension compiles everything using the `babel-loader` and not the `ts-loader`. This is possible due to `@babel/preset-typescript`. Please read the following blog post if you want to know more about this: https://iamturns.com/typescript-babel/

By using `babel-loader`, webpack configuration becomes much simpler and compilation performance is higher. However during compilation `babel-loader` will simply remove everything TypeScript without checking anyting.

To see TypeScript errors you should manually check using the `tsc` command. `tsc` command becomes available because this extension installs `typescript` using npm. You should also have your `tsconfig.json` file in the project root. You can use the `example.tsconfig.json` file provided in this repository.

## Installation

`npm install laravel-mix-react-typescript-extension`

## Usage

```js
let mix = require("laravel-mix");

require("laravel-mix-react-typescript-extension");

mix
  .reactTypeScript("resources/js/app.js", "public/js")
  .sass("resources/sass/app.scss", "public/css");
```
