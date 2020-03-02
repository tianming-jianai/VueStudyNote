const app = new Vue({
	el: '#app',
	data: {
		message: 'message',
		books: [{
				id: 1,
				name: '叶辛眼中的上海',
				date: '2006-7',
				price: 32.00,
				count: 1
			},
			{
				id: 2,
				name: '电脑爱好者',
				date: '2019-12',
				price: 25.00,
				count: 1
			},
			{
				id: 3,
				name: '考研5500',
				date: '2019-11',
				price: 18.00,
				count: 1
			},
			{
				id: 4,
				name: '张宇30讲',
				date: '2019-12',
				price: 30.00,
				count: 1
			}
		],
	},
	computed:{
		totalPrice(){
			let result=0;
			for (var i = 0; i < this.books.length; i++) {
				result+=(this.books[i].price*this.books[i].count)
			}
			return result;
		}
	},
	methods: {
		incre(i){
			console.log(i);
			return this.books[i].count++
		},
		decre(i){
			return this.books[i].count--
		},
		remove(i){
			this.books.splice(i,1)
		}
	},
	filters: {
		getFinalPrice(price) {
			return '¥' + price.toFixed(2)
		}
	}
});
