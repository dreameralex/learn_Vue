<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>Complete {{doneTotal}}</span>/ ALL {{total}}
        </span>
        <button class="btn btn-danger" @click="cleanAll">Clean up Finished tasks</button>
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
        },
        total(){
            return this.todos.length
        },
        isAll:{
            get(){
                return this.doneTotal === this.total && this.total > 0
            },
            set(value){
                this.$emit('checkAllTodo',value)
            }
        }
    },
    methods:{
        // checkAll(e){
        //     this.checkAllTodo(e.target.checked)
        // }
        cleanAll(){
            this.$emit('cleanAllTodo')
            //this.cleanAllTodo()
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