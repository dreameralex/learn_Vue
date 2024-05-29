<template>
    <div class="school_style">
        <h2>School Name {{name}}</h2>
        <h2>School address {{address}}</h2>
    </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'PKU',
            address:'BeiJing'
        }
    },
}
</script>

<style>
    .school_style{
        background-color: cadetblue;
        
    }
</style>