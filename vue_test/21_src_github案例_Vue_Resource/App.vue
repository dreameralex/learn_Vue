<template>
	<div class="container">
		<!-- 头部搜索 -->
		<search/>
		<List/>
	</div>
</template>

<script>
	import Search from './components/search.vue';
	import List from './components/List.vue';
	export default {
		name:'App',
		components: {Search,List}
	}
</script>

<style>

</style>