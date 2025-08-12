const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    port: 4004,
    static: path.join(__dirname, "public"),
    headers: { "Access-Control-Allow-Origin": "*" },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        },
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: { shared: path.resolve(__dirname, "../shared") },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteD",
      filename: "remoteEntryD.js",
      exposes: {
        "./DrawerAgGrid": "./src/DrawerAgGrid",
      },
      shared: {
        react: { singleton: true, requiredVersion: "18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "18.2.0" },
        antd: { singleton: true, requiredVersion: "^5.15.2" },
        "ag-grid-community": { singleton: true, requiredVersion: "^31.2.1" },
        "ag-grid-react": { singleton: true, requiredVersion: "^31.2.1" },
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
