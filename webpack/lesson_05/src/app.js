var $ = require('jquery');
require('./style.scss');

console.log('app');

function fun1(foo) {
  console.log(foo);
}

fun1('bar');

var orderTop = require('./order');


// orderTop();
//
// window.orderTop = orderTop;

// var demo = document.getElementById('demo');
// demo.onclick = function(){
//   console.log('123');
// };
