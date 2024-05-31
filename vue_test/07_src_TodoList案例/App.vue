<template>
    <div class="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodo='addTodo' />
                <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
                <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :cleanAllTodo="cleanAllTodo"/>
            </div>
        </div>
    </div>
</template>

<script>
    import MyFooter from './components/MyFooter.vue';
    import MyHeader from './components/MyHeader.vue';
    import MyList from './components/MyList.vue';

    export default {
        name:'App',
        components:{MyFooter,MyHeader,MyList},
        data(){
        return{
            todos:[
                {id:'0001',title:'Eat',completed:true},
                {id:'0002',title:'Sleep',completed:true},
                {id:'0003',title:'Somoke',completed:true},
                {id:'0004',title:'Fight',completed:false}
                ]
            }
        },
        methods:{
            //添加todo
            addTodo(x){
                this.todos.unshift(x)
            },
            //勾选or取消勾选
            checkTodo(id){
                this.todos.forEach((todo)=>{
                    if(todo.id === id) todo.completed = !todo.completed
                })
            },
            //删除
            deleteTodo(id){
                this.todos = this.todos.filter((todo)=>{
                    return todo.id !== id
                })
            },
            //全选
            checkAllTodo(done){
                this.todos.forEach((todo)=>{
                    todo.completed = done
                })
            },
            //取消全选
            cleanAllTodo(){
                this.todos = this.todos.filter((todo)=>{
                    return !todo.completed
                })
            }
        }
    }
</script>

<style>
    body {
        background-color: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(225, 225, 225, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger{
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover{
        color:#fff;
        background-color: #bd362f;
    }

    .btn:focus{
        outline: none;
    }

    .todo-container{
        width:600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap{
        padding: 10px;
        border:1px solid #ddd;
        border-radius: 5px;
    }



</style>