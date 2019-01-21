const path = require("path");
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "src/styles/global.scss")]
    }
  }
  // chainWebpack: config => {
  //   config.module
  //     .rule("fonts")
  //     .use("url-loader")
  //     .loader("url-loader")
  //     .tap(options =>
  //       Object.assign(options, {
  //         limit: 10240,
  //         fallback: {
  //           loader: "file-loader",
  //           options: {
  //             name: "/assets/fonts/[name].[hash:8].[ext]"
  //           }
  //         },
  //         mimetype: "font/woff"
  //       })
  //     );
  // }
};
