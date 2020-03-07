export default {
	template:`
		<div>
			<p>{{message}}</p>
			<button @click="btnClick">按钮</button>
			<h4>{{name}}</h4>
		</div>
	`,
	data(){
		return {
			message: 'hello webpack',
			name: '我是小明'
		}
	},
	methods: {
		btnClick() {
			console.log("btnClick");
		}
	}
}