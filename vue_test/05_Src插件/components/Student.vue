<template>
    <div>
        <h2>Student Name: {{name}}</h2>
        <h2>Student Gender: {{sex}}</h2>
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