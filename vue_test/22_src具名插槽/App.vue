<template>
	<div class="container">
		<!-- 头部搜索 -->
		<Category title="foods" :listData = "foods">
			<img slot="center" src="https://s1.cdn.jiaonizuocai.com/caipu/201607/3110/311017139485.jpg/NjAwX2MyXzQwMA.webp" alt="">
			<a slot="footer" href="http://baidu.com">More</a>
		</Category>

		<Category title="games" :listData = "games">
			<ul slot="center">
           		<li v-for="(item,index) in games" :key="index">{{item}}</li>
       		</ul>
			<div class="foot" slot="footer">
				<a href="http://baidu.com">经典</a>
				<a href="http://baidu.com">热门</a>
			</div>
		</Category>

		<Category title="films" :listData = "films">
			<video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
			<template v-slot:footer>
				<div class="foot">
					<a href="http://baidu.com">经典</a>
					<a href="http://baidu.com">热门</a>
					<a href="http://baidu.com">推荐</a>
				</div>
				<h4>Welcome</h4>
			</template>
		</Category>
	</div>
</template>

<script scoped>
	import Category from './components/Category.vue'
	export default {
		name:'App',
		components: {Category},
		data(){
			return{
				foods:['火锅','烧烤','小龙虾','牛排'], 
				games:['红色警戒','穿越火线','劲舞团','超级玛'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
			}
		}
	}
</script>

<style lang="css">
	.container, .foot{
		display: flex;
		justify-content: space-around;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>
	
