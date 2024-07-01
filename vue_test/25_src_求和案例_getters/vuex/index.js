//用于创建VUEX中最为核心的store
//引入Vuex
import Vuex from 'vuex'
import Vue from 'vue'
//应用Vuex插件
Vue.use(Vuex)
//准备actions, actions用于响应组件中的动作
const actions = {
    add: function(context,value){
        context.commit('Add',value)
    },
    minus:function(context,value){
        context.commit('Minus',value)
    },
    addOdd(context,value){
        if(context.state.sum % 2){
            context.commit('Add',value)
        }
    },
    addWait(context,value){
        setTimeout(()=>{
            context.commit('Add',value)
        },500)
    }
}
//准备mutations 用于操作数据(state)
const mutations = {
    Add(state,value){
        state.sum += value
    },
    Minus(state,value){
        state.sum -= value
    }
}
//准备state 用于存储数据
const state = {
    sum:0 //当前的和
}
//准备getters 用于将state中的数据用于加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}


//创建、暴露Store
export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters
})