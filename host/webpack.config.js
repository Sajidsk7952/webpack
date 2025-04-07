const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
require('dotenv').config()
module.exports = {
  entry: {
    index: "./src/index",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devServer: {
    port: 5000,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "hostApp",
      remotes: {
        remoteA: `remoteA@${process.env.REMOTE_A_URL}/remoteAremoteEntry.js`,
        remoteB: `remoteB@${process.env.REMOTE_B_URL}/remoteBremoteEntry.js`,
      },
      shared: {"react" : {singleton : true}, "react-dom" : {singleton : true}},
    }),
  ],
};
