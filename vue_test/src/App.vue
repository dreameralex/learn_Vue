<template>
	<div class="container">
		<Category title="games" :listData = "games">
			<template scope="atguigu">
				<ul>
           			<li v-for="(item,index) in atguigu.games" :key="index">{{item}}</li>
       			</ul>
			</template>
		</Category>
		<Category title="games">
			<template scope="atguigu">
				<ol>
           			<li v-for="(item,index) in atguigu.games" :key="index">{{item}}</li>
       			</ol>
			</template>
		</Category>
		<Category title="games">
			<template scope="atguigu">
           		<h4 v-for="(item,index) in atguigu.games" :key="index">{{item}}</h4>
			</template>
		</Category>

	</div>
</template>

<script scoped>
	import Category from './components/Category.vue'
	export default {
		name:'App',
		components: {Category},
		
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
	
