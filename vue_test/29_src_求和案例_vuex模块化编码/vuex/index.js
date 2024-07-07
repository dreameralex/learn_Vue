//用于创建VUEX中最为核心的store
//引入Vuex
import Vuex from 'vuex'
import Vue from 'vue'
import countOptions from './count'
import personOptions from './person'

//应用Vuex插件
Vue.use(Vuex)

//创建、暴露Store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})