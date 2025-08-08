const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  devServer: {
    port: 4003,
    historyApiFallback: true,
    static: [
      {
        directory: path.resolve(__dirname, "../shared/assets/images"),
        publicPath: "/images",
      },
            {
        directory: path.resolve(__dirname, "../shared/assets/fonts"),
        publicPath: "/fonts",
      },
    ],
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name][ext]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteC",
      filename: "remoteEntryC.js",
      // exposes: {
      //   "./App": "./src/App",
      //   "./polestar_logo.png": "./public/assets/image/polestar_logo.png",
      // },
      shared: {
        react: { singleton: true, requiredVersion: "18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "18.2.0" },
      },
    }),
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html",
    // }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
