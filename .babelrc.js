module.exports = {
  presets: ["@babel/env", "@babel/preset-react"],
  only: ['src/index.js', 'src/components', 'src/icons', 'src/theme', 'src/utils', 'src/forms'],
  plugins: [
    // for absolute imports
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        root: ["./src/"],
        alias: {
          "dry": "./src"
        }
      },
    ],

    // for material-ui, minimize bundle, see: https://material-ui.com/guides/minimizing-bundle-size/#option-2
    [
      'babel-plugin-import',
      {
        'libraryName': '@material-ui/core',
        'libraryDirectory': 'esm',
        'camel2DashComponentName': false
      },
      'core'
    ],
    [
      'babel-plugin-import',
      {
        'libraryName': '@material-ui/icons',
        'libraryDirectory': 'esm',
        'camel2DashComponentName': false
      },
      'icons'
    ],
  ],
};
