module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: [2, "double", { allowTemplateLiterals: true, avoidEscape: true }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/button-has-type": 0,
    "linebreak-style": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.stories.js"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["./node_modules", "./src"],
      },
    },
  },
};
