# webpack

- 安装
- 特色
- 版本
- demo 使用
- Loader
- 配置文件
- 开发技巧

## 安装

```bash
npm install -g webpack

# 帮助
webpack -h
```

Webpack 开发工具，要单独安装：  

```bash
npm install webpack-dev-server --save-dev
```

## 特色

- `code splitting`: 代码分割,自动
- `loader`: 支持各种静态文件,并且支持串联操作


## 版本
Webpack 目前有两个主版本，一个是在 master 主干的稳定版，一个是在 webpack-2 分支的测试版，测试版拥有一些实验性功能并且和稳定版不兼容，在正式项目中应该使用稳定版。


## lesson_01

在 lesson_01 目录下执行:  
```bash
webpack entry.js  bundle.js
```

操作结果:

```bash
Hash: 9a900046d0cd62cc0a31
Version: webpack 1.13.1
Time: 56ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.43 kB       0  [emitted]  main
   [0] ./entry.js 41 bytes {0} [built]
```

生成 bundle.js  

增加代码,再次执行打包命令  

```js
// module.js
module.exports = 'It works from module.js.'

// entry.js 修改成
document.write('It works.')
document.write(require('./module.js')) // 添加模块
```

Webpack 会分析入口文件，解析包含依赖关系的各个文件。
这些文件（模块）都打包到 bundle.js 。
Webpack 会给每个模块分配一个唯一的 id 并通过这个 id 索引和访问模块。
在页面启动时，会先执行 entry.js 中的代码，其它模块会在运行 require 的时候再执行。



## Loader

Webpack 本身只能处理 JavaScript 模块，
如果要 _处理其他类型_ 的文件，就需要使用 loader 进行转换。  

Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。
这样，我们就可以通过 require 来加载任何类型的模块或文件，比如 CoffeeScript、 JSX、 LESS 或图片。  

__loader特性__:

1. Loader 可以通过管道方式链式调用，
  - 每个 loader 可以把资源转换成任意格式并传递给下一个 loader ，但是最后一个 loader __必须返回 JavaScript__。
2. Loader 可以同步或异步执行
3. Loader 运行在 node.js 环境中
4. Loader 可以接受参数，以此来传递配置项给 loader。
5. Loader 可以通过文件扩展名（或正则表达式）绑定给不同类型的文件
6. Loader 可以通过 npm 发布和安装
7. 除了通过 package.json 的 main 指定，通常的模块也可以导出一个 loader 来使用
8. Loader 可以访问配置。
9. 插件可以让 loader 拥有更多特性。
10. Loader 可以分发出附加的任意文件

> loader 也是 node 的模块所以, 可以通过 npm 安装

按照惯例，而非必须，loader 一般以 xxx-loader 的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 json-loader  


## 配置文件

```js
var webpack = require('webpack')

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
}
```



## 开发技巧

```bash
# 让编译的输出内容带有进度和颜色
webpack --progress --colors
```

如果不想每次修改模块后都重新编译，那么可以启动监听模式。开启监听模式后，没有变化的模块会在编译后缓存到内存中，而不会每次都被重新编译，所以监听模式的整体速度是很快的。

```bash
webpack --watch
```

`webpack-dev-server`:  

它将在 localhost:8080 启动一个 express 静态资源 web 服务器，并且会以监听模式自动运行 webpack，在浏览器打开 http://localhost:8080/ 或 http://localhost:8080/webpack-dev-server/ 可以浏览项目中的页面和编译后的资源输出，并且通过一个 socket.io 服务实时监听它们的变化并自动刷新页面。




- - -
