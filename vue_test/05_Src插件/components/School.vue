<template>
    <div>
        <h2>School Name: {{name | mySlice }}</h2>
        <h2>Address: {{address}}</h2>
        <button @click="test">Click to test hello </button>
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