<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM" ref="btn">Click to show head DOM element</button>

        <School ref="sch"/>
    </div>
</template>

<script>
    import School from './components/School.vue'

    export default {
        name:'App',
        components:{School},
        data() {
            return {
                msg:'Welcome to learn Vue!'
            }
        },
        methods: {
            showDOM(){
                console.log(this.$refs.title)//真实DOM元素
                console.log(this.$refs.btn)//真实DOM元素
                console.log(this.$refs.sch)//School组件的实例对象(vc)
            }
        },
        
    }
</script>