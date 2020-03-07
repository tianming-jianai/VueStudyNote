// 1.使用Commonjs的模块化规范
const {
	add,
	mul
} = require("./js/mathUtils.js")

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import {
	name,
	age,
	height
} from "./js/info"

console.log(name);
console.log(age);
console.log(height);

// 3.依赖CSS文件
require("./css/normal.css")
//You may need an appropriate loader to handle this file type.

// 4.依赖less文件
require("./css/special.less")
// 为了查看less生效的代码，添加了文字
document.writeln("你好啊，天气很不错哦")

// t.引入Vue
import Vue from "vue"

import App from "./vue/app.js" 

const app = new Vue({
	el: '#app',
	template: `<App/>`,
	components:{
		App
	}
});
