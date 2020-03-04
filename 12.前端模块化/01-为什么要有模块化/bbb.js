//小红

//方案一：常规写法
/* var name = '小红';

var flag = false;

console.log(name); */

//方案一：闭包
/* ;(function(){
	var name = '小红';
	
	var flag = false;
	
	console.log(name);
})() */

//方案三：模块化
var moduleB = (function() {
	var obj = {};
	var name = '小红';

	var flag = false;

	console.log(name);

	obj.flag = flag;

	return obj
})()
