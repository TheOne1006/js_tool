// entry.js
document.write('It works.');

document.write(require('./module.js')) // 添加模块

require("./style.css");

var bigimg = require("./imgBig.png")
var smallimg = require("./imgSmall.png")

document.write(`<img src=${bigimg}>`);
document.write(`<img src=${smallimg}>`);
