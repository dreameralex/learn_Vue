# 特点
- 组件化模式，提高代码复用率、且让代码更好维护
- 声明式编码，让编码人员无需直接操作DOM，提高开发效率。
- 采用虚拟DOM+优秀的Diff算法，尽量服用DOM节点

# 初识VUE
容器和vue是一对一的关系；
{{}}中可以写什么？
	里面必须是JS表达式；

# 1.3模板语法
1. 插值语法：
		功能：用于解析标签体内容
		写法：{{xxx}}, xxx是js表达式，且可以直接读取到data中的所有属性
2. 指令语法：
		功能：用于解析标签（标签属性、标签体内容、绑定事件）
		e.g
```js
 <a v-bind:href="url">Go to Baidu</a>
```
v-bind 让引号之中的，既url当作js表达式去执行；
v-bind 可以简写为:

绑定：
Vue中以后2种绑定方式：
	1. 单项绑定（v-bind）：数据只能从data流向页面
	2. 双向绑定（v-model）：数据不仅可以从data刘翔也买你，还可以从页面流向data
			- 双向绑定一般应用在表单元素上（input, select）
			- `v-model:value` 可以简写为`v-model`,  因为`v-model`默认收集的就是value

# 1.4 data与elde两种写法
1. el有两种写法
	-  new Vue时候配置el属性
	- 先创造Vue实例，随后再通过vm.$mount(’#root')指定el
2. data有两种写法
	- 对象式
	- 函数式
		- 组件data必须用函数式
3. 一个重要原则
	- Vue管理的函数，一定不用箭头函数，一旦用就不是Vue实例了

# MVVM模型
M: Model
V: View
VM: ViewModel： VUE实例对象



# 1.6 数据代理
```js
<script type="text/javascript">
        Vue.config.productionTip = false
        let data={
                name:'PKU',
                address:'BJ'
            }
        const vm = new Vue({
            el:'#root',
            data
        })
    </script>
```

`vm._data === object_data === data`

![[1713600552323.png]]
Vue中的数据代理：
- 通过vm对象来代理data对象中的属性操作（读写）
- 好处：更加方便操作data中的数据
- 基本原理：
	- 通过`Object.defineProperty()` 把data对象中所有属性添加到vm上。
	- 为每一个添加到vm上的属性，都指定一个`getter/setter`
	- 在`getter/setter`内部操作（读写）data中对应的属性

# 1.7 事件处理
```js
<script type="text/javascript">
        Vue.config.productionTip = false
        const vm = new Vue({
            el:'#root',
            data:{
                name:'PKU',
            },
            methods:{
                showInfo1(event){
                    console.log(this)
                },
                showInfo2(event)=>{
                    console.log(this)
                }
            }
        })
    </script>
```
`showInfo1`中的this是指vue对象
`showInfo2`中的this是指window对象

## 事件修饰符
Vue中的事件修饰符
	1. prevent
	2. stop
	3. once
	4. capture
	5. self: 只有`event.target`是当前操作的元素才触发事件
	6. passive: 时间的默认行为立即执行，无需等待事件回调执行完毕

滚动事件
- wheel: 鼠标滚轴滚动，到底滚动还是可以捕获事件的
- scroll: 滚动

## 键盘事件
Vue中常用的按键别名：
- 回车: enter
- 删除：delet
- esc
- space
- tab
- up
- down
- left
- right

## 监视
深度监视:
1. Vue中的watch 默认不检测对象内部值的改变
2. 配置deep:true可以检测对象内部值的改变（多层）
备注：
1. Vue自身可以检测对象内部值的改变，但Vue提供的watch不可以
2. 使用watch时根据数据的具体结构，决定是否采用深度监视

# 1.8 class与style绑定

react、vue中的key有什么作用？
1. 虚拟DOM中key的作用
		key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】，随后vue进行【新的虚拟DOM】与【旧的虚拟DOM】的差异比较，对比规则如下：
2. 对比规则
		（1）旧的虚拟DOM中找到了与新的虚拟DOM相同的ｋｅｙ：
				１、若虚拟DOM内容没变，直接使用之前的真是ＤＯＭ
				２、若虚拟DOM中内容改变了，则生成新的真实DOM，随后替换掉也买你中之前的真实DOM
		（2）旧的虚拟DOM中未找到与新的虚拟DOM相同的ｋｅｙ：
				创建新的真实DOM，随后渲染到页面。
3. 用index作为key可能发生的问题
		（1）若对数据进行：逆序添加、逆序删除等破坏顺序操作：
			会产生没有必要的真实DOM更新==>界面没有问题，但效率低
		（2）如果结构中还包含输入类的DOM：
			会产生错误DOM更新==>界面有问题
4. 开发中如何选择key？
		（1）最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号等唯一值
		（2）如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表所展示，使用index作为key是没有问题的。

# 1.9 监视
## set
vm不允许作为target
```js
data:{
    name:110,
    address:"Beijing",
    student: {
        name:'Tom',
        age:{
            rAge:40,
            sAge:29,
        },
        friends:[
            {name:'Alex',age:23},
            {name:'Alice',age:36},
        ]
    }
},
可以使用以下方式新增属性：
Vue.set(this.student,'sex','男')
this.$set(this.student,'sex','男')
但是不可以vm作为target，不能修改data层级下的，新增属性
```

## Vue检测数据原理
```js
let arr = [1,2,3,4]
arr.push === Array.prototype.push
>true
```
此处arr调用的push是原型对象的push

```js
vm._data.student.push === Array.prototype.push
>false
```
此处的push，是Vue中的push，**重新解析模板，生成新的DOM**；

1. Vue会监视data所有层次的数据，
2. 如何检测对象中的数据？
	通过setter实现监视，且要在new Vue时就传入要检测的数据。
	- 对象中后追加的属性，VUE默认不做响应式处理
	- 如需给后添加的属性做响应式处理，请使用如下API：
```js
	Vue.set(target, propertyName/index, value)
	vm.$set(target, propertyName/index, value)	
```

3. 如何检测数组中的数据？
	通过包裹数组更新元素的方法实现，本质做了：
	- 调用原生的方法对数组进行更新
	- 重新解析模板，进而更新页面
4. 在Vue中修改数组中的某一元素一定要用如下的方法：
	1. 使用`push(),pop(),shift(),unshift(),splice(),sort(),revers()`
	2. `Vue.set(),vm.$set()`
	特别注意：`Vue.set(),vm.$set()`不能给vm或者vm的跟数据对象添加属性！！！

# 13 收集表单数据
v-model，收集输入的value值

# 14内置指令
## v-text
```js
<div v-text="name"></div>
```
v-text直接替换div 重点，页面只显示v-text的内容；
## v-html
```js
<div v-html="str"></div>
str:'<h3>Hello World~</h3>'
```
![[1714227517771.png]]


## v-once
```js
<h2 v-once>初始化的n值是：{{n}}</h2>
<h2>当前的n值是：{{n}}</h2>
<button @click="n++">++</button>
```
所在节点初次渲染后，就视为静态内容了。
以后数据改变不会引起v-once所在结构的更新，可以用于优化性能。

## v-pre
```js

```

自定义指令总结：
1. 语法
```js
//局部指令
new Vue({
directives:{指令名:配置对象}
})
//全局指令
Vue.directive(指令名:配置对象)
```
2. 3个回调
	- `.bind`：指令与元素绑定时调用
	- `.inserted`: 指令所在元素被插入页面时调用
	- `.update`: 指令所在模板结构被冲i性能解析时调用
3. 备注
	- 定义指令时不加v-，但使用时要加v-
	- 指令名如果是多个单词，要使用`kebab-case`命名方式，不要用`camelCase` 命名。

# 15生命周期
概述
1. Vue在关键时刻帮助调用的一些特殊名称的函数
2. 生命周期的函数名称不可更改，函数的具体内容可以编写
3. this指向vm或组件实例对象；
