export default{
    install(Vue,x,y,z){
        console.log(x,y,z)
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        //定义全局指令
        Vue.directive('fbind',{
            //指令与元素绑定成功时（一上来）
            bind(element,binding){
                element.value = binding.value
            },
            //指令与所在元素被插入页面时
            inserted(element,binding){
                element.focus()
            },
            //指令所在模板被重新解析时
            update(element,binding){
                element.value = binding.value
            }
        })

        //定义混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            }
        })
        //Vue原型上增添方法
        Vue.prototype.hello = ()=>{alert('Hello')}


    }
}