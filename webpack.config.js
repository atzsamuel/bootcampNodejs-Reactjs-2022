const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  mode: "development",
  devServer: {
    port: 5000,
    open: true,
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /.js$/,
        exclude: /node_modules/,
      },
      {
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        test: /.css$/,
      },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif)$/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

//module.exports = config;
