<!-- 组价结构 -->
<template>
    <div class="demo">
        <h2>School Name:{{schooltName}}</h2>
        <h2>School Address:{{address}}</h2>
        <button @click="showName">Click to show school name</button>
    </div>
</template>

<!-- 组价交互 -->
<script>
    export default {
        name: 'School',
        data() {
            return {
                schoolName:'PKU',
                Address:'Beijing'
            }                
        },
        methods:{
            showName(){
                alert(this.console.clear())
            }
        }
    }
    //export{school}//同意暴露
    //export default school //默认暴露
</script>


<!-- 组价的样式 -->
<style>
    .demo{
        background-color: aqua;
    }
</style>

