<template>
  	<section class="jumbotron">
	<h3 class="jumbotron-heading">Search Github Users</h3>
	<div>
		<input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
		<button @click="searchUsers">Search</button>
	</div>
	</section>
</template>
<script>
	export default {
		name: 'Search',
		data() {
			return{
				keyWord:''
			}
		},
		methods:{
			searchUsers(){
				请求前更新this数据
				this.$bus.$emit('unpdateListData', {isFirst:false,isLoading:true,errMsg:'',users:[]})
				this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
					Response => {
						//请求成功更新数据
						this.$bus.$emit('unpdateListData',{isLoading:true,errMsg:'',users:Response.data.items})
					},
					error => {
						//请求失败更新数据
						this.$bus.$emit('unpdateListData',{isLoading:false,errMsg:error.message,users:[]})
					}
				)
			}
		}
	}
</script>
