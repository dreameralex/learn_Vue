<template>
    <div>
        <h1>{{ msg }}</h1>
        <Student/>
        <hr>
        <School/>
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{Student,School},
        data() {
            return {
                msg:'Welcome to learn Vue!'
            }
        },        
    }
</script>