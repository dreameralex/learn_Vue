# 对组件的理解

- 非单文件组件
	一个文件中包含有n个组件。
- 单文件组件
	一个文件中包含有1个组件。

Vue使用组件的步骤
1. 定义组件
使用`Vue.extend(options)` 创建
	el不需要写
	data必须写成函数
```js
const school = Vue.extend({
            //不写EL配置项，因为最终所有的组件都被VM管理，由VM决定服务于那个容器
            template:`
            <div>
                <h2>School:{{schoolName}}</h2>
                <h2>Address:{{Address}}</h2>
            </div>
            `,
            data(){
                return {
                    schoolName:'PKU',
                    Address:'Beijing'
                }                
            }
        })
```

2. 注册组件
局部注册：靠new Vue的时候传入components选项
```js
new Vue({
            el:'#root',
            //Step2: 注册组件
            components:{
                school:school,
                student
            }
        })
```
全局注册：
```js
Vue.component('组件名',组件)
```
4. 使用组件

如何定义组件？

如何

## 组件的嵌套
```js
        const school = Vue.extend({
            template:`
            <div>
                <h2>School:{{schoolName}}</h2>
                <h2>Address:{{Address}}</h2>
            </div>
            `,
            data(){
                return {
                    schoolName:'PKU',
                    Address:'Beijing'
                }                
            }
        })
        const student = Vue.extend({
            template:`
            <div>
                <h2>Student Name:{{studentName}}</h2>
                <h2>Student Age:{{age}}</h2>
                <school></school>
            </div>
            `,
            data(){
                return{
                    studentName:"Alex",
                    age:18
                }
            },
            components:{
                school
            }
        })

        new Vue({
            el:'#root',
            data:{
                msg:'Welcome'
            },
            //Step2: 注册组件
            components:{
                student
            }
        })
```

## VueComponent构造函数
组件是构造函数

关于VueComponent:
1.schoo1组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。

2.我们只需要写`<school/>`或`<schoo1×</schoo1>`，Vue解析时会帮我们创建schoo1组件的实例对象，即Vue帮我们执行的：newVuecomponent（options）。

3.特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！！

4.关于this指向：
（1）.组件配置中：
	data函数、methods中的函数、Watch中的函数、computed中的函数它们的this均是【Vuecomponent实例对象】。
（2）.newVue()配置中：
	data函数、methods中的函数、Watch中的函数、computed中的函数它们的this均是【Vue实例对象】。
	
5.Vuecomponent的实例对象，**以后简称vc**（也可称之为：组件实例对象）
	Vue的实例对象，以后简称vm。

## 一个重要的内置关系
一个重要的内置关系：
```js
VueComponent.prototype.__proto__ === Vue.prototype
```
为什么要有这个关系：让实例对象（vc）可以访问到Vue原型上的属性、方法

```js
function Demo(){
            this.a = 1
            this.b = 2
        }
        //创建Demo的实例对象
        const d = new Demo()

        console.log(Demo.prototype)//显示原型属性
        console.log(Demo.__proto__)//隐式原型属性
```

![[Pasted image 20240513235518.png]]

# 单文件组件


# 使用VUE脚手架
Vue脚手架是Vue官方提供的标准化开发工具（开发平台）。
最新的版本是4.x。
文档：https://cli.vuejs.org/zh/。


```cmd
切换到目录，创建
vue create xxx
启动项目
npm run server
```
