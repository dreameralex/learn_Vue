//用于创建VUEX中最为核心的store
//引入Vuex
import Vuex from 'vuex'
import Vue from 'vue'
//应用Vuex插件
Vue.use(Vuex)
//准备actions, actions用于响应组件中的动作
const actions = {}
//准备mutations 用于操作数据(state)
const mutations = {}
//准备state 用于存储数据
const state = {}


//创建、暴露Store
export default  new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
})