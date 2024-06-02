<template>
    <div class="school">
        <h2>School Name: {{name }}</h2>
        <h2>Address: {{address}}</h2>
        </div>
</template>

<script>
    import PubSub from 'pubsub-js';
    export default {
        name:'School',
        data() {
            return {
            name:'PKU_GFY',
            address:'BJ'
            }
        },
        mounted(){
            this.pubId = PubSub.subscribe('hello',(msgName,data)=>{
                console.log('有人发布了hello消息，hello消息的回调执行成功了',msgName,data)
                console.log(this)
            })
        },
        beforeDestroy(){
            PubSub.unsubscribe(this.pubId)
        }
    }
</script>
<style scoped>
    .school{
        background-color: aquamarine;
    }
</style>