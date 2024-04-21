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
