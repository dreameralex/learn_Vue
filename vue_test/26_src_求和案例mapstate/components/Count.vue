<template>
    <div>
        <h1>当前求和为{{he}}</h1>
        <h2>结果放大10倍: {{bigSum}}</h2>
        <h3>我在{{xuexiao}}，学习{{xueke}}</h3>
        <select v-model.number="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "Count",
    data(){
        return{
            n:1//用户选择的数字
        }
    },
    computed:{
        // he(){
        //     return this.$store.state.sum
        // },
        // 
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // }
        //借助mapState生成计算属性，从state中读取数据
        ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),
        bigSum(){
            return this.$store.getters.bigSum
        },
    },
    methods:{
        increment(){
            this.$store.dispatch('add',this.n)
        },
        decrement(){
            this.$store.dispatch('minus',this.n)
        },
        incrementOdd(){
            this.$store.dispatch('addOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('addWait',this.n)
        }
    },
    mounted(){
        const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
        console.log(x)
    }
}
</script>

<style lang="css">
    button{
        margin-left: 5px;
    }
</style>