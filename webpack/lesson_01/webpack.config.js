module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.(png|jpg|gif|woff|woff2)$/,
              /**
               * 返回文件最终资源文件地址, 当图片小于 8k, 直接内嵌
               */
              loader: 'url-loader?limit=8192'
            }
        ]
    }
};
