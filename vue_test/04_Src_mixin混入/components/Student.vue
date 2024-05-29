<template>
    <div>
        <h2 @click="showName">Student Name: {{name}}</h2>
        <h2>Student Gender: {{sex}}</h2>
        </div>
</template>

<script>
    //引入混合
    import {hunhe,hunhe2} from '../mixin'
    export default {
        name:'Student',
        data() {
            return {
            name:'Alex',
            sex:'Male'
            }
        },
        mixins:[hunhe,hunhe2]
    }
</script>