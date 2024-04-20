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






