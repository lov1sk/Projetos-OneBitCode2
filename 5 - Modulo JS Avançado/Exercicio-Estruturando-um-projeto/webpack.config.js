const cssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].min.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [cssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },

    ],
  },
  plugins: [new cssExtractPlugin()],
  mode: "development",
};
