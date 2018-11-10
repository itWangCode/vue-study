/*实例化vue对象*/
new Vue({
	el:"#vue-app",
	data:{
		age:30,
		x:0,
		y:0
	},
	methods:{
		add:function(inc){
			this.age += inc;
		},
		subtract:function(dec){
			this.age -= dec;
		},
		updateXY:function(event){
			//console.log(event);
			this.x = event.offsetX;
			this.y = event.offsetY;
		}
	}
});

/*
	el:element 需要获取的元素，一定是html中的根容器元素
	data:用于数据的存储
	methods:用于存储各种方法
	data-binding:给属性绑定对应的值
*/