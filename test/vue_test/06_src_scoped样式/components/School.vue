<template>
    <div class="demo">
        <h2>School Name: {{name }}</h2>
        <h2>Address: {{address}}</h2>
        </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
            name:'PKU_GFY',
            address:'BJ'
            }
        },
        methods:{
            test(){
                this.hello()
            }
        }
    }
</script>
<style scoped>
    .demo{
        background-color: aquamarine;
    }
</style>