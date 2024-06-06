<template>
    <div>
        <button @click="isShow = !isShow" >Show/Hide</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">Hello</h1>
        </transition>        
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
    .hello-enter-active{
        animation: atguigu 1s;
    }
    .hello-leave-active{
        animation: atguigu 1s reverse;
    }

    @keyframes atguigu {
        from{
            transform: translateX(-100px);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>