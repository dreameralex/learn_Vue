<template>
	<div>
		<div class="row">
		<div class="col-xs-offset-2 col-xs-8">
=			<Banner/>
		</div>
		</div>
		<div class="row">
		<div class="col-xs-2 col-xs-offset-2">
			<div class="list-group">
			<!-- 原始HTML中使用a标签实现页面的跳转
			<a class="list-group-item active" href="./about.html">About</a>
			
			<a class="list-group-item" href="./home.html">Home</a> -->

			<!-- 原始HTML中使用router-link标签实现路由的跳转-->
			<router-link :replace="true" class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link>
			<router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link> 
			</div>
		</div>
		<div class="col-xs-6">
			<div class="panel">
			<div class="panel-body">
				<router-view></router-view>
			</div>
			</div>
		</div>
		</div>
  </div>
</template>

<script scoped>
	import Banner from './components/Banner.vue';
	export default {
		name:'App',
		// components: {Count,Person},
		components: {Banner}
	}
</script>


