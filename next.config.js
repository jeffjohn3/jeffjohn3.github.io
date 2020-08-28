const path = require("path");
const withImages = require("next-images");
const withTM = require("next-transpile-modules");
// const withTypescript = require("@zeit/next-typescript");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withImages(
    withLess(
      withTM({
        transpileModules: [
          "react-native-elements",
          "react-native-paper",
          "react-native-ratings",
          "react-native-safe-area-view",
          "react-native-status-bar-height",
          "react-native-vector-icons",
        ],
        webpack(config, options) {
          return {
            ...config,
            module: {
              ...config.module,
              rules: [
                ...config.module.rules,
                {
                  test: /\.ttf$/,
                  loader: "url-loader", // or directly file-loader
                  include: path.resolve(
                    __dirname,
                    "node_modules/react-native-vector-icons"
                  ),
                },
                {
                  test: /\.less$/,
                  use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" },
                  ],
                },
              ],
            },
            resolve: {
              ...config.resolve,
              extensions: [
                ".web.ts",
                ".web.tsx",
                ".ts",
                ".tsx",
                ".web.js",
                ".web.jsx",
                ".js",
                ".jsx",
                ...config.resolve.extensions,
              ],
              alias: {
                ...config.resolve.alias,
                "mobx-react/native$": "mobx-react",
                "react-native$": "react-native-web",
                "react-pdf": "react-pdf/build/entry.webpack",
              },
            },
          };
        },
      })
    )
  )
);
