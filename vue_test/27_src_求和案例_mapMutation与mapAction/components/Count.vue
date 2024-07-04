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
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapState,mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: "Count",
    data(){
        return{
            n:1//用户选择的数字
        }
    },
    computed:{
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
        // 借助mapMutations生成对应的方法，方法中会调用commit 去联系Mutations（对象的写法）
        // ...mapMutations({increment:'add', decrement:'minus'}),

        // 借助mapMutations生成对应的方法，方法中会调用commit 去联系Mutations（数组的写法）
        // ...mapMutations({increment:'add', decrement:'minus'}),

        // incrementOdd(){
        //     this.$store.dispatch('addOdd',this.n)
        // },
        // incrementWait(){
        //     this.$store.dispatch('addWait',this.n)
        // }
        ...mapActions({incrementOdd:'addOdd', incrementWait:'addWait'}),
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