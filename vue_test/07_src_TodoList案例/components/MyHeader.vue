<template>
    <div class="todo-header">
        <input type="text" placeholder="Please input your task name, press enter to confirm!" v-model="title" @keyup.enter="add">
    </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
    
    name:'MyHeader',
    props:['addTodo'],
    data(){
        return{
            title:''
        }
    },
    methods:{
        add(e){
            //将用户的输入包装成为一个todo对象
            const todoObj = {id:nanoid(),title:e.target.value,done:false}
            //通知APP组件添加一个todo对象
            this.addTodo(todoObj)
            //清空输入
            this.title = ""
        }
    }
}
</script>

<style scoped>
    .todo-header input{
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82,168,236,0.8);
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.075) 0 0 8px rgba(82,168,236,0.6);
    }
</style>