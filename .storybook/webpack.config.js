const path = require("path");

module.exports = ({ config }) => {
  // scss loader
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../src"),
    exclude: [
      path.resolve(__dirname, "../lib"),
      path.resolve(__dirname, "../node_modules"),
    ],
  });

  // story source
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    enforce: "pre",
  });

  return config;
};
