<template>
    <div class="school">
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
    }
</script>
<style scoped>
    .school{
        background-color: aquamarine;
    }
</style>