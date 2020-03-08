<template>
	<div>
		<p>我是cpn组件</p>
		<p>{{name}}</p>
	</div>
</template>

<script>
	export default {
		name: "Cpn",
		data() {
			return {
				name: '我是cpn的name'
			}
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>
