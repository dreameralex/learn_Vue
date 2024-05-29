<template>
    <div>
        <h2 @click="showName">School Name: {{name}}</h2>
        <h2>Address: {{address}}</h2>
        </div>
</template>

<script>
    import {hunhe} from '../mixin'
    export default {
        name:'School',
        data() {
            return {
            name:'PKU',
            address:'BJ'
            }
        },
        mixins:[hunhe]
    }
    
</script>