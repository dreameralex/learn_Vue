<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

                <!-- 跳转路由并携带Query参数，to的对象写法 -->
                <router-link :to="{
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title
                        }
                    }    
                ">
                {{m.title}}
                </router-link>
                <button @click="pushShow(m)">push</button>
                <button @click="replaceShow(m)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Message',
        props:['id','title'],
        data(){
            return{
                messageList:[
                    {id:'001',title:"Message001"},
                    {id:'002',title:"Message002"},
                    {id:'003',title:"Message003"},
                ]
            }
        },
        methods:{
            pushShow(m){
                this.$router.push({
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })    
            },
            replaceShow(m){
                this.$router.replace({
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }) 
            }
        },
        beforeDestroy(){
            console.log('Message组件即将被销毁')
        }
    }
</script>