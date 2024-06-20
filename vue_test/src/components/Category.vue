<template>
    <div class="category">
        <h3>{{title}}Category</h3>
        <slot></slot>
    </div>
    
</template>

<script>
export default {
    name: "Category",
    props:['title']
}
</script>

<style>
    .category{
        background-color: aquamarine;
        width: 200px;
        height: 300px;
    }
    h3{
		text-align: center;
		background-color: blanchedalmond;
	}
</style>