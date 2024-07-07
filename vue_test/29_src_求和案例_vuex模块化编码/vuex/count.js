//求和相关的配置
export default {
    namespaced:true,
    actions: {
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
    },
    mutations: {
        Add(state,value){
            console.log('mutation中Add被调用了')
            state.sum += value
        },
        Minus(state,value){
            console.log('mutation中Minus被调用了')
            state.sum -= value
        }
    },
    state:{
        sum:0, //当前的和
        school: 'PKU',
        subject: 'Math',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}

