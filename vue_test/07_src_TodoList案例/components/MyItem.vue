<template>
   <li>
        <label>
            
            <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)"/>
            <!-- 可以实现功能，但不推荐，因为违反原则，修改了props -->
            <!-- <input type="checkbox" v-model="todo.completed"/> -->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">Delete</button>
    </li>
</template>

<script>
export default {
    name:'MyItem',
    //声明接受todo对象
    props:['todo','checkTodo','deleteTodo'],
    methods:{
        //勾选
        handleCheck(id){
            this.checkTodo(id)
        },
        //删除
        handleDelete(id){
            if(confirm('Are you sure to delete?')){
                this.deleteTodo(id)
            }
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