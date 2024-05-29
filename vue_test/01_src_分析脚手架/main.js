import Vue from 'vue'
//引入APP组件，它是所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //完成讲App组件放入容器中
  el:'#app',
  //创造HTML中的APP元素
  render: h => h(App),
})
