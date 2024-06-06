<template>
   <li>
        <label>          
            <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
                type="text" 
                v-show="todo.isEdit"    
                :value="todo.title" 
                @blur="handleBlur(todo,$event)"
                ref="inputTitle"
            >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">Delete</button>
        <button class="btn btn-edit" @click="handleEdit(todo)">Edit</button>
    </li>
</template>

<script>
    import PubSub from 'pubsub-js';
    export default {
        name:'MyItem',
        //声明接受todo对象
        props:['todo'],
        methods:{
            //勾选
            handleCheck(id){
                //this.checkTodo(id)
                this.$bus.$emit('checkTodo',id)
            },
            //删除
            handleDelete(id){
                if(confirm('Are you sure to delete?')){
                    //this.deleteTodo(id)
                    // this.$bus.$emit('deleteTodo',id)
                    PubSub.publish('deleteTodo',id)
                }
            },
            //编辑
            handleEdit(todo){
                if(todo.hasOwnProperty.call(todo, "idEdit")){
                    todo.isEdit = true
                }else{
                    this.$set(todo,'isEdit',true)
                }
                //nextTick 让DOM更新完后再调用函数
                this.$nextTick(function(){
                    this.$refs.inputTitle.focus()
                })
            },
            //失去焦点(回调)，真正执行修改逻辑
            handleBlur(todo,e){
                todo.isEdit = false
                if(!e.target.value.trim()) return alert('Input can\'t be empty')
                this.$bus.$emit('updateTodo',todo.id,e.target.value)
            }
        }
    }
</script>

<style scoped>
    li {
        list-style:none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label{
        float: left;
        cursor: pointer;
    }

    li label li input{
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li before{
        content: initial;
    }

    li:last-child{
        border-bottom: none;
    }

    li:hover{
        background-color: beige;
    }

    li:hover button{
        display: block;
    }
</style>