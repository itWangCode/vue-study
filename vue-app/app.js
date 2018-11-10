/*实例化vue对象*/
var app = new Vue({
	el:"#vue-app",
	data:{
		name:"hello vue",
		job:"软件工程师",
		website:"http:itwangyang.xyz",
		websiteTag:"<a href='http:itwangyang.xyz'>itwangyang</a>",
	},
	methods:{
		greet:function(time){
			return 'good'+" "+ time + " " + this.name + "!";
		}
	}
});

app.name = "wangyang";

/*
	el:element 需要获取的元素，一定是html中的根容器元素
	data:用于数据的存储
	methods:用于存储各种方法
	data-binding:给属性绑定对应的值
*/