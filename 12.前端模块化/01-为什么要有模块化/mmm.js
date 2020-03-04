//小明
//方案一：常规写法
/* if(flag){
	console.log("小明很帅，哈哈哈");
} */

//方案三：模块化
;
(function() {
	var flag = moduleA.flag;
	if (flag) {
		console.log("小明很帅，哈哈哈");
	}
})()
