const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const isDev = process.env.NODE_ENV === "development";

const sourceMapOptions = isDev ? { sourceMap: true } : {};

const styleLoader = {
  loader: "style-loader",
  options: {
    hmr: true
  }
};

let devServer;

function reloadHtml() {
  const cache = {};
  const plugin = { name: "CustomHtmlReloadPlugin" };

  this.hooks.compilation.tap(plugin, compilation => {
    compilation.hooks.htmlWebpackPluginAfterEmit.tap(plugin, data => {
      const orig = cache[data.outputName];
      const html = data.html.source();
      // plugin seems to emit on any unrelated change?
      if (orig && orig !== html) {
        devServer.sockWrite(devServer.sockets, "content-changed");
      }
      cache[data.outputName] = html;
    });
  });
}

let config = {
  entry: ["./src/index.js", "./src/index.scss"],
  output: {
    path: path.resolve(__dirname, "elliewem2/static/"),
    filename: "js/elliewem2.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          // Use either style-loader with HMR in dev or MiniCssExtractPlugin in production
          { loader: MiniCssExtractPlugin.loader },
          {
            // Translates CSS into CommonJS
            loader: "css-loader",
            options: sourceMapOptions
          },
          {
            // Post process SASS
            loader: "postcss-loader",
            options: sourceMapOptions
          },
          {
            // Compiled SASS
            loader: "sass-loader",
            options: sourceMapOptions
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 3000,
        proxy: "http://localhost:8000"
      },
      {
        injectCss: true
      }
    ),
    new MiniCssExtractPlugin({
      filename: "css/elliewem2.css"
    })
  ]
};

if (isDev) {
  config.devtool = "inline-source-map";
}

module.exports = config;
