<template>
    <div class="test">
        <h2>Student Name: {{name}}</h2>
        <h2 class="qwe">Student Gender: {{sex}}</h2>
        </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
            name:'Alex',
            sex:'Male'
            }
        }
    }
</script>

<style lang="less">
    .test{
        background-color: chocolate;
        .qwe{
            font-size: larger;
        }
    }
</style>