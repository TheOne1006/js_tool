require('./style.scss');

console.log('app');

function fun1(foo) {
  console.log(foo);
}

fun1('bar');

var same1 = require('./same1.js');
var same2 = require('./same2.js');
var orderTop = require('./order');
var orderTop2 = require('./order');
var orderTop3 = require('./order');

same1();
same2();
