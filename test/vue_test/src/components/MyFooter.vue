<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox"/>
        </label>
        <span>
            <span>Complete {{doneTotal}}</span>/ ALL {{todos.length}}
        </span>
        <button class="btn btn-danger">Clean up Finished tasks</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos'],
    computed:{
        doneTotal(){
            //方法1
            // let i = 0
            // this.todos.forEach((todo) => {
            //     if(todo.completed) i++
            // })
            // return i
            //方法2
            return this.todos.reduce((pre,current)=>{
                return pre + (current.completed ? 1 : 0)
            },0)
        }
    }
}
</script>

<style scoped>
    .todo-footer{
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }
    .todo-footer label{
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }
    .todo-footer label input{
        position: relative;
        top:-1px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .todo-footer button{
        float: right;
        margin-top: 5px;
    }
</style>