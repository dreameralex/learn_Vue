<template>
    <div class="student">
        <h2>Student Name: {{name}}</h2>
        <h2>Student Gender: {{sex}}</h2>
        <button @click="sendStudentName">Give student name to school</button>
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
        },
        methods: {
            sendStudentName(){
                this.x.$emit('hello',666)
            }
        },
        mounted(){
            console.log('School',this)
            this.x.$on('hello',(data)=>{
                console.log('I am Shool\'s component, i reveived data',data)
            })
        }
    }
</script>

<style lang="less">
    .student{
        background-color: chocolate;
        .qwe{
            font-size: larger;
        }
    }
</style>