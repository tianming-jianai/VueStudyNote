<template>
	<div>
		<h2 class="title">{{message}}</h2>
		<button @click="btnClick">按钮</button>
		<h2>{{name}}</h2>
		<Cpn/>
	</div>
</template>

<script>
	import Cpn from "./Cpn"//Cpn.vue

	export default {
		name: "App",
		components:{
			Cpn
		},		
		data() {
			return {
				message: 'hello vue',
				name: '我是小明'
			}
		},
		methods: {
			btnClick() {
				console.log("btnClick");
			}
		},
	}
</script>

<style scoped>
	.title {
		color: green;
	}
</style>
