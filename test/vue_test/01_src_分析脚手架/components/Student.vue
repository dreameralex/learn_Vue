<!-- 组价结构 -->
<template>
    <div class="demo">
        <h2>Student Name:{{studentName}}</h2>
        <h2>Age:{{age}}</h2>
    </div>
</template>

<!-- 组价交互 -->
<script>
    export default {
        name: 'Student',
        data(){
                return {
                    studentName:'Alex',
                    age:18
                }                
            },
    }
    //export{student}//同意暴露
    //export default school //默认暴露
</script>



