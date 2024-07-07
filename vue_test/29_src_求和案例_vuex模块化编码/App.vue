<template>
	<div>
		<Count/>
		<Person/>
	</div>
</template>

<script scoped>
	import Count from './components/Count.vue'
	import Person from './components/Person'	
	export default {
		name:'App',
		components: {Count,Person},
	}
</script>


