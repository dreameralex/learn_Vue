# 对组件的理解

- 非单文件组件
	一个文件中包含有n个组件。
- 单文0件组件
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

关于不同版本的Vue:
1.vue.jslvue.runtime.xxx.js的的区别：
（1）.vue.js是完整版的Vue，包含：核心功能+模板解析器。
（2）.vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。

### 文件结构
## 脚手架文件结构
- node_modules
	public
	favicon.ico：页签图标
	index.html：主页面
- src
	assets：存放静态资源10go.png
	component：存放组件
	Hellolorld.vue
	App.vue：汇总所有组件
	main.js：入口文件
- ·gitignore:git版本管制忽略的配置
- babel.config.js:babel的配置文件
- package.json：应用包配置文件
- README.md：应用描述文件
- package-lock.json：包版本控制文件
### 不同版本的vue
vue.js与vue.runtime.xxx.js的区别：
（1）.vue.js是完整版的Vue，包含：核心功能+模板解析器。
（2）.vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
-因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
render函数接收到的createElement函数去指定具体内容。

### vue.config.js配置文件
使用ueinspect>output.js可以查看到Vue脚手架的默认配置。
使用vue.config·js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

## ref属性
1.被用来给元素或子组件注册引用信息（id的替代者）
2.应用在htm1标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
3.使用方式
打标识：`<h1ref="xxx>.....</h1>`或`<Schoolref="xxx">/School>`
获取：`this.$refs.xxX`

## props配置
功能：让组件接收外部传过来的数据
（1）.传递数据：
	`<Demoname="xXx”/>`
（2）.接收数据：
	第一种方式（只接收）：
		`props:[‘name＇]`
	第二种方式（限制类型）：
```js
	props:{
		name:Number
	}	
```
第三种方式（限制类型、限制必要性、指定默认值）
```js
	props:t
	name:t
	type：String，//类型
	required:true，//必要性
	default：老王”//默认值
```
备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，	若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中	的数据。

```js
<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>Student Name: {{name}}</h2>
        <h2>Age: {{age}}</h2>
        <h2>Gender: {{sex}} </h2>
        <button @click="updateAge">Try to change receive Name</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            msg:'Student Info:'
        }
    },
    //props:['name','sex','age']

    //接受的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }

    //接受的时候对数据：进行类型限制+默认值的指定+必要性的限制
    props:{
        name:{
            type:String,//name的类型是字符串
            required:true//name是必须的
        },
        age:{
            type:Number,
            default:99//默认值
        },
        sex:{
            type:String,
            default:'Male'
        },

    },
    methods:{
        updateAge(){
            this.age = 99
        }
    }
}
</script>
```
## Mixin混入
功能：可以把多个组件共用的配置提取成一个混入对象
使用方式：
第一步定义混合，例如：
```js
data(){...}，
methods:{...}
```
第二步使用混入，例如：
（1）.全局混入：Vue.mixin（xxx）
（2）.局部混入：mixins:['xXx]

## 插件
功能：用于增强Vue
本质：包含insta11方法的一个对象，insta11的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
定义插件：
```js
对象install=function（vue，options）
{
	//1.添加全局过滤器
	Vue.filter(....)
	
	//2，添加全局指令
	Vue.directive(....)
	
	//3，配置全局混入（合）
	Vue.mixin(....)
	
	//4.添加实例方法
	Vue·prototype.smyMethod = function （） {···J
	Vue·prototype.smyProperty= XXXX
	
	//使用插件
	Vue.use()
```

## ToList案例总结
1.组件化编码流程：
	（1）拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
	（2）实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
		1）一个组件在用：放在组件自身即可。
		2）一些组件在用：放在他们共同的父组件上(状态提升)
	（3）实现交互：从绑定事件开始。
2.props适用于：
	（1）.父组件==>子组件通信
	（2）.子组件==>父组件通信（要求父先给子一个函数
3.使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！
4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## 组件自定义事件

1. 一种组件间通信的方式，适用于：**子组件===>父组件**
2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）
3. 绑定自定义事件：
	1.第一种方式，在父组件中：`<Demo @atguigu='test"/>` 或 `<Demov-on:atguigu="test”/>`

	2.第二种方式，在父组件中：
```js
	<Demoref=”demo”/>
	mounted()t
	this.refs.xxx.Son（'atguigu'，this.test）
```
``
	3.若想让自定义事件只能触发一次，可以使用`once`修饰符，或`$once`方法
4. 触发自定义事件：`this.$emit（atguigu，数据）`
5. 解绑自定义事件`this.$off（atguigu'）`
6. 组件上也可以绑定原生DOM事件，需要使用`native`修饰符
7. 注意：通过`this.$refs.xxx.$on（‘atguigu'，回调）`绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题！！


APP
```js
<template>
    <div class="app">
        <h1>{{msg}},Student name is: {{studentName}}</h1>
        <!-- 触发了atguigu事件，则demo函数被触发 -->
        <!-- <Student v-on:atguigu="getStudentlName"/> -->

        <!-- this.$refs.student 通过这种方式可以获取student组件的实例对象 -->
        <!-- <student ref="student"/> -->
        <!-- <student @atguigu="getStudentlName" @demo="m1"/> -->
        <hr>
        <!-- 通过父组件给子组件传递props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>

        <!-- 此处认为click是自定义事件，而非原生DOM,想要使用呢要在student中注册 -->
        <!-- <student ref="student" @click="show"/> -->
        <!-- 想要识别原生DOM的 -->
        <student ref="student" @click.native="show"/>

    </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{Student,School},
        data() {
            return {
                msg:'Welcome to learn Vue!',
                studentName:''
            }
        }, 
        methods:{
            getSchoolName(name){
                console.log("App get school name: ", name)
            },
            getStudentlName(name){
                console.log('App get student name:!',name)
                this.studentName = name
            },
            m1(){
                console.log('Deno event have been triggered!')
            },
            show(){
                alert(123)
            }
        },
        mounted(){

            //this.$refs.student.$on('atguigu',this.getStudentlName)
            //this.$refs.student.$once('atguigu',this.getStudentlName)

            this.$refs.student.$on('atguigu',this.getStudentlName)

            // this.$refs.student.$on('atguigu',(name) => {
            //     //这里的this是student组件对象，箭头函数没有自己的this，所以往外找this指向app的实例对象
            //     console.log('App get student name:!',name)
            //     this.studentName = name
            // })
        }
    }
</script>
```

Student:
```js
<template>
    <div class="student">
        <h2>Student Name: {{name}}</h2>
        <h2>Student Gender: {{sex}}</h2>
        <button @click="sendStudentName">Give Student name to App</button>
        <button @click="unbind">Unbind atguigu</button>
        <button @click="death">销毁当前Student组件的实例对象</button>
        </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'Alex',
                sex:'Male'
            }
        },
        methods:{
            sendStudentName(){
                //触发student组件实例身上的atguigu
                this.$emit('atguigu',this.name)
                this.$emit('demo')
                this.$emit('click')
            },
            unbind(){
                //this.$off('atguigu')//解绑一个事件
                //this.$off(['atguigu','demo'])//解绑多个事件
                this.$off()//解绑所有的
            },
            death(){
                this.$destroy()//销毁当前Student组件的实例对象
            }
        }
    }
</script>
```
# Vue中的ajax

## 全局事件总线：任意组件间通信
![[Pasted image 20240602095736.png]]


1 一种组件间的通信方式，适用于任意组件间同行 
2 安装全局总线
Main.js
```js
//创建vm
new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this //安装全局事件总线
    }
})

```

3 使用事件总线：
接受数据：A组件想接受数据，则A组件汇总给$bus绑定自定义事件，时间在回调留在A组件自身
```js
methods(){
	demo(data){......}
}
......
mounted(){
	this.$bus.$on('xxx',this.demo)
}
```
提供数据：
```js
this.$bus.$emit('xxx',data)
```
4 最好在beforeDestroy钩子中，用$off去解绑组件用到的事件



## 配置代理
解决跨域，使用cors解决跨域

方法一：
```js
devServer: {
	proxy: 'http://localhost:5000'
}
```
方法二：
```js
module.exports = {
  pages:{
    index: {
      entry: 'src/main.js'
    },
  },

  lintOnSave:false,//关闭语法检查
  // 开启代理服务器（方式1）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  // 开启代理服务器（方式2）
  devServer: {
    proxy: {
      '/api':{//匹配所有以'/api'开头的请求路径
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''}
      // ws: true,//Websocket
      // changeOrigin: true
      },
      '/demo':{
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''}
      // ws: true,//Websocket
      // changeOrigin: true
      }
    }
  }
}

```
target: 'http://localhost:5000',基础路径
## 插槽
1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于父组件===>子组件。
2.分类：默认插槽、具名插槽、作用域插槽
3.使用方式
1.默认插槽：
```js
父组件中：
<Category>
	<div>htm1结构1</div>
</Category>
子组件中：
<template>
	<div>
		<！--定义插槽-->
		<s1ot>插槽默认内容...</s1ot>
	</div>
</template>
```
\
2.具名插槽：
```js
父组件中：
<Category>
	<template slot="center”
		<div>html结构1</div>
	</template>
	
	<template v-slot:footer>
		<div>html结构2</div>
	</template>
</Category>

子组件中：
<template>
	<div>
		<slot :games="games"></slot>
	</div>
</template>

<script>
export default {
	name:'Category'
	props:['title']，
	//数据在子组件自身
	data(){
		return {
			 games:[红色警戒”，穿越火线”，劲舞团”，超级玛丽”]
		}
	}
}

</script>

```


# 过渡与动画
1. 作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名
![[Pasted image 20240607002326.png]]
2. 写法
准备好样式：
	元素进入的样式：
	1.v-enter：进入的起点
	2.v-enter-active：进入过程中
	3.v-enter-to：进入的终点
元素离开的样式：
	1.v-leave：离开的起点
	2.v-leave-active：离开过程中
	3.v-leave-to：离开的终点

使用`<transition>`包裹要过度的元素，并配置name属性

```js
<transition name="hel1o”
<hlv-show="isShow"你好啊！</h1>
</transition>

```


3.备注：若有多个元素需要过度，则需要使用：`<transition-group>`且每个元素都要指定`key`值



# Vuex
## 理解Vuex

1. 概念：专门在Vue 中实现集中式状态（数据）管理的一个Vue 插件，对vue 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。
2. Github 地址: https://github.com/vuejs/vuex

什么时候使用Vuex
1. 多个组件依赖于同一状态
2. 来自不同组件的行为需要变更同一状态
![[Pasted image 20240623115303.png]]

## 基本使用
1. 初始化核心数据、配置`actions`、配置`mutations`，操作文件`store.js`
```js
//引入Vue核心库
import Vue from 'vue' 
/入Vuex
import Vuex from 'vuex'
//引1用Vuex
Vue.use(Vuex)

const actions={
	//响应组件中加的动作
	jia(context,value){
		//console.log（'actions中的jia被调用了'，ministore，value)
		Context.commit('JIA'value）
	}
	
}

const mutations ={
	//执行加
	JIA（state，value）{
		//console.log('mutations中的]IA被调用了'，state，value)
		state.sum += value
	}
}


//初始化数据
const state ={
	sum:0
}
//创建并暴露store
exportdefault new Vuex.Store({
	actions,
	mutations,
	state
})
```

2. 组件读取vuex数据：`$store.state.sum`
3.  组件修改vuex数据：`$store.dispatch('action中的方法名，数据)` 或`$store.commit('mutations中的方法名'，数据)`

## 基本使用

6.四个map方法的使用
1.mapstate方法：用于帮助我们映射`state`中的数据为计算属性
```js
computed:{
	//借助mapstate生成计算属性：sum、school、subject（对象写法）
	...mapState({sum:sum’,school:school',subject:subject'）
	//借助mapState生成计算属性：sum、schoo1、subject（数组写法
	...mapState(['sum＇,school','subject']）,
}
```

2.mapGetters方法：用于帮助我们映射`getters`中的数据为计算属性
```js
computed{
	//借助mapGetters生成计算属性：bigsum(对象写法）
	...mapGetters({bigSum:'bigSum'}）,
	//借助mapGetters生成计算属性：bigSum(数组写法）
	...mapGetters(['bigSum'])
}
```

3.mapActions方法：用于帮助我们生成与`actions`对话的方法,即：包含`$store.dispatch(xxx)`的函数
```js
methods{
	//靠mapActions生成：incrementOdd、incrementWait(对象形式)
	...mapActions(fincrementOdd:'jiaOdd’,incrementWait:‘jialait')
	//靠mapActions生成：incrementOdd、incrementWait(数组形式)
	...mapActions(['jiaOdd','jiawait'])
}
```
4.mapMutations方法：用于帮助我们生成与`mutations`对话的方法,即：包含`$store.commit(xxx)`的函数
```js
methods:{
	//靠mapActions生成：increment、decrement(对象形式)
	...mapMutations({increment:'JIA',decrement:'JIAN'}),
	//靠mapMutations生成：JIA、JIAN(对象形式
	...maplutations(['JIA','JIAN']),
}
```
# vue-router
![[Pasted image 20240707101747.png]]

## vue-router 的理解
vue 的一个插件库，专门用来实现SPA 应用
6.1.2 对SPA 应用的理解
1. 单页Web 应用（single page web application，SPA）。
2. 整个应用只有一个完整的页面。
3. 点击页面中的导航链接不会刷新页面，只会做页面的局部更新。
4. 数据需要通过ajax 请求获取。

6.1.3 路由的理解
1. 什么是路由?
1. 一个路由就是一组映射关系（key - value）
2. key 为路径, value 可能是function 或component
2. 路由分类
1. 后端路由：
1) 理解：value 是function, 用于处理客户端提交的请求。
2) 工作过程：服务器接收到一个请求时, 根据请求路径找到匹配的函数
来处理请求, 返回响应数据。
2. 前端路由：
1) 理解：value 是component，用于展示页面内容。
2) 工作过程：当浏览器的路径改变时, 对应的组件就会显示。

## 路由

1. 理解： 一个路由（route）就是一组映射关系（key - value），多个路由需要路由器（router）进行管理。

2. 前端路由：key是路径，value是组件。

### 1.基本使用
1. 安装vue-router，命令：```npm i vue-router```
2. 应用插件：```Vue.use(VueRouter)```
3. 编写router配置项:

   ```js
   //引入VueRouter
   import VueRouter from 'vue-router'
   //引入Luyou 组件
   import About from '../components/About'
   import Home from '../components/Home'
   //创建router实例对象，去管理一组一组的路由规则
   const router = new VueRouter({
      routes:[
         {
            path:'/about',
            component:About
         },
         {
            path:'/home',
            component:Home
         }
      ]
   })
   //暴露router
   export default router

   ```
4. 实现切换（active-class可配置高亮样式）
   ```vue
   <router-link active-class="active" to="/about">About</router-link>
   ```

5. 指定展示位置

   ```vue
   <router-view></router-view>
   ```

### 2.几个注意点

1. 路由组件通常存放在```pages```文件夹，一般组件通常存放在```components```文件夹。
2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
3. 每个组件都有自己的```$route```属性，里面存储着自己的路由信息。
4. 整个应用只有一个router，可以通过组件的```$router```属性获取到。

### 3.多级路由（多级路由）
1.配置路由规则，使用children配置项：
```js
routes:[
	{
		path:'/about'，
		component:About
	},
	{
		path:'/home'
		component:Home
		children：[//通过children配置子级路由
			{
				path：'news'，//此处一定不要写：/news
				Component:News
			},
			{
				path:'message'，//此处一定不要写：/message
				component:Message
			}
		]
	}
]
```

2.跳转（要写完整路径）
```js
	<router-link to="/home/news">News</router-link>
```

### 4.路由的query参数
1.传递参数
```js
<！--跳转并携带query参数，to的字符串写法-->
<router-link：to=”/home/message/detail？id=6668title=你好”跳转</router-link>

<！--跳转并携带query参数，to的对象写法-->
<router-link
	:to="{
		path:'/home/message/detail',
		query:{
			id:666，
			title:'你好'
		}
	}"
跳转</router-link>
```

2.接收参数：
```js
$route.query.id
$route.query.title
```

### 6.路由的params参数
1.配置路由，声明接收params参数
```js
{
	path:'/home'
	component:Home
	children:[
	{
		path:'news'
		component:News
	},
	{
		Component:Message
		{
			children:[
			{
				name:'xiangqing'
				path：'detail/：id/:title'，//使用占位符声明接收params参数
				component:Detail
			}
			
		}
		
	}
}
```


2.传递参数
```js
<1--跳转并携带params参数，to的字符串写法-->
<router-link :to="/home/message/detail/666/你好">跳转</router-link>
<！--跳转并携带params参数，to的对象写法>
<router-link
	:to{
		name:'xiangqing'
		params:{
			id:666，
			title:你好
		}
	}
>跳转</router-1ink>
```
特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！

3.接受参数
```js
$route.params.id
$route.params.title
```


### 7. 路由的props配置

```js
{
name:'xiangqing',
    path:'detail/:id/:title',
    component:Detail,
    //props的第一种写法，值为对象,该对象的所有key-value都会一props的形式传给Detail组件。
    // props:{
    //     a:1,b:'hello'
    // }
    //props的第二种写法，值为布尔值，若布尔值为真，则吧改路由组件收到的所有params参数，以props的形式传给detail组件
    // props:true
    //props:的第三种写法，值为函数
    props({query:{id,title}}){
        return {id, t}
    }
}
```


### 8. `<router-link>`的repace属性
1.作用：控制路由跳转时操作浏览器历史记录的模式
2.浏览器的历史记录有两种写入方式：分别为puch和replace，push是追加历史记录，replace是替换当前记录。路由跳转时候
默认为push
3.如何开启replace模式：<router-link replace> News </router-link >



### 9.编程式路由导航
1.作用：不借助`<router-link>` 实现路由跳转，让路由跳转更加灵活
2.具体编码：
``` js 
//srouter的两个API
this.Srouter.push({
	name:'xiangqing'
	params:{
		id:xxx，
		title:xxx
	}
}

this.Srouter.replace({
	name:'xiangqing'
	params:{
		id:xxx，
		title:xxx
	}
}
//前进
this.$router.forward()
//后退
this.$router.backward()
//可前进，可后退
this.$router.go(n)
```


10.缓存路由组件
1.作用：让不展示的路由组件保持挂载，不被销毁
2.县体编码
```js
<keep-alive include="News">
	<router-view></router-view>
</keep-alive>
```


# 其他

## 浏览器本地存储
1.存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
2.浏览器端通过`Window.sessionStorage`和`Window.localStorage`属性来实现本地存储机制
3.相关API
	`xxxxStorage.setItem('key','value');`
	该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值
	`XxxxxStorage.getItem('person');``
	该方法接受一个键名作为参数，返回键名对应的值
	`3xxxxxStorage.removeItem('key');``
	该方法接受一个键名作为参数，并把该键名从存储中删除
	`XXxxxStorage.clear()
	该方法会清空存储中的所有数据
4.备注：
	1. `SessionStorage`存储的内容会随看浏览器窗口关闭而消失
	2. `LocalStorage`存储的内容，需要手动清除才会消失
	3. `xxxxxStorege·getItem(xxx)`如果xxx对应的value获取不到，那么`getltem`的返回值是null。
	4. `JSON.parse(null)`的结果依然是null

## nextTick
1.语法：`this.$nextTick`（回调函数）
2.作用：在下一次DOM更新结束后执行其指定的回调。
3.什么时候用当改变数据后要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行


