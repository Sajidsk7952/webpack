const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require('./package.json').dependencies;
module.exports = {
  entry: "./src/index.js",  // ✅ Fixed entry format
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "auto",  // ✅ Explicit publicPath
  },
  devServer: {
    port: 5015,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
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
      name: "remoteA",
      filename: "remoteEntry.js",
      exposes: {
        "./remoteApp": "./src/bootstrap",
      },
      shared: {
        "react": { singleton: true, eager: false, },
        "react-dom": { singleton: true, eager: false, },
      },
    }),
  ],
};
