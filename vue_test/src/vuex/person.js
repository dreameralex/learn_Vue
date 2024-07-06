//人员管理相关的配置
import axios from 'axios';
export default {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王')===0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须是王！')
            }
        },
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutation中ADD_PERSON被调用了')
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'Alex'}
        ]
    },
    getters:{
        firstPerson(state){
            console.log('state.personList[0].name')
            return state.personList[0].name
        }
    }
}