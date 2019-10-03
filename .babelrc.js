module.exports = {
  presets: ["@babel/env", "@babel/preset-react"],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        root: ["./src/"],
      },
    ],
  ],
};
