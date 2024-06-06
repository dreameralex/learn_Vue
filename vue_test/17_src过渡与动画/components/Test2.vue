<template>
    <div>
        <button @click="isShow = !isShow" >Show/Hide</button>
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1">Hello</h1>
            <h1 v-show="isShow" key="2">Alex</h1>
        </transition-group>        
    </div>
</template>

<script>
export default {
    name:'Test',
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style scoped>
    h1{
        background-color: brown;
        
    }
    /* 进入起点，离开终点 */
    .hello-enter，.hello-leave-to{
        transform: translate(-100%);
    }
    /* 进入终点，离开起点 */
    .hello-enter-to，  .hello-leave{
        transform: translate(0);
    }
    .hello-enter-active, .hello-leave-active{
        transition: 0.5s linear;
    }

</style>