//小明

//方案一：常规写法
/* var name = '小明';
var age = 22;

function sum(num1, num2) {
	return num1 + num2;
}

var flag = true;

if (flag) {
	console.log(sum(10, 20));
} */

//方案二：闭包
/* ;(function(){
	
	var name = '小明';
	var age = 22;
	
	function sum(num1, num2) {
		return num1 + num2;
	}
	
	var flag = true;
	
	if (flag) {
		console.log(sum(10, 20));
	}
})() */

//方案三：模块化
var moduleA = (function() {

	var obj = {}
	var name = '小明';
	var age = 22;

	function sum(num1, num2) {
		return num1 + num2;
	}

	var flag = true;

	if (flag) {
		console.log(sum(10, 20));
	}

	obj.flag = flag;
	obj.sum = sum;

	return obj;
})()
