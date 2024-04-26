# 箭头函数
箭头函数提供了一种更加简洁的函数书写方式。
基本语法是：
参数 =函数体  
(参数) ={函数体}
```js
//普通函数
var f = function(a){
	return a;
}
f(1);  //1
​
//箭头函数
var f = a =a
f(10); //10
```
当箭头函数没有参数或者有多个参数，要用 **()** 括起来。

```js
var f = (a,b) =a+b;
f(6,2);  //8
```

当箭头函数函数体有多行语句，用 **{}** 包裹起来，表示代码块，当只有一行语句，并且需要返回结果时，可以省略 **{}** , 结果会自动返回。

```js
var f = (a,b) ={
	let result = a+b;
	return result;
}
f(6,2);  // 8
```

当箭头函数要返回对象的时候，为了区分于代码块，要用 **()** 将对象包裹起来

```js
var f = (id,name) =({id: id, name: name});
f(6,2);  // {id: 6, name: 2}
```

**注意点：没有 this、super、arguments 和 new.target 绑定。**

```js
var a = () ={
	// 箭头函数里面没有 this 对象，
	// 此时的 this 是外层的 this 对象，即 Window
	console.log(this);
}
a(11);
​
var b = () ={
	console.log(arguments);
}
b(111); // ReferenceError: arguments is not defined
```


对象中使用箭头函数，this不一定表示全局Window对象

```js
var obj = {
	name: "xx",
	show: function() {
	console.log(this); //this表示当前对象
},
say: () ={
	console.log(this); //this表示全局window对象
	}
}
```
箭头函数体中的 this 对象，是定义函数时的对象，而不是使用函数时的对象。

```js
function a() {
	setTimeout(function() {
	console.log(this); //this始终指向全局Window对象
	}, 100)
}
a.call({num: 200});

function b() {
	setTimeout(() ={
	console.log(this); //this绑定的是b函数中的this对象
	}, 100);
}
b.call({num: 300});
```


注意：箭头函数不可以作为构造函数，也就是不能使用 new 命令，否则会报错

```js
function Person() {
	console.log(this);
}
new Person(); //Person {}

var People = ()=>{
	console.log(this);
}
new People(); //TypeError: People is not a constructor
```

箭头函数在参数中使用

```js
var arr= [1,2,3];
arr = arr.map((a)=>a*a);
console.log(arr);
```
箭头函数可以与解构一起使用


```js
//变量为目标，返回值为源
let cal = (a, b) ={
   return {
       add: a+b,
       sub: a-b,
       mul: a*b,
       div: a/b
  };
}
let {add, sub, mul, div} = cal(10, 5);
​
//形参为目标，实参为源
var show = ({one, two}) ={
	console.log(one + "---" + two);
}
show({one: "hello", two: "你好"});
```


**如何解决箭头函数中没有arguments 绑定的问题？**

注意：js箭头函数中，没有属于自己的this关键字，有都是来自于父级作用域。

#### （2）适合使用的场景

ES6 之前，JavaScript 的 this 对象一直很令人头大，回调函数，经常看到 var self = this 这样的代码，为了将外部 this 传递到回调函数中，那么有了箭头函数，就不需要这样做了，直接使用 this 就行。

所以，当我们需要维护一个 this 上下文的时候，就可以使用箭头函数。

#### （3）总结

- 要有个箭头
    
- 箭头的前面是小括号，放形参，只有一个形参的时候可以省略小括号；
    
- 箭头的后面是函数体；
    
- 如果函数体只有一个语句，没有{}，此时的返回值不需要return；
    
- 箭头函数里面的this总是指向最靠近的function 内部的this；
    
- 对象里面的方法，尽可能不要使用箭头函数；
    
- 箭头函数里面没有arguments，可以使用…reset，接收过来就是数组类型，接收的是形参之外的所有的实参；
    

```js
var show = (a, b, ...reset) ={
	console.log(a + b);
	console.log(reset);
}
show(1, 2, 3, 4, 5);
```

**箭头函数和普通函数的区别？**

1. 箭头函数比普通函数更加简洁  
如果没有参数，就直接写一个空括号即可

如果只有一个参数，可以省去参数的括号

如果有多个参数，用逗号分割

如果函数体的返回值只有一句，可以省略大括号

2. 箭头函数没有自己的this  
箭头函数不会创建自己的this， 所以它没有自己的this，它只会在自己作用域的上一层继承this。所以箭头函数中this的指向在它在定义时已经确定了，之后不会改变。

3. 箭头函数继承来的this指向永远不会改变



```js
var id = 'GLOBAL';
var obj = {
	id: 'OBJ',
	a: function(){
	console.log(this.id);
},
b: () ={
	console.log(this.id);
}
};
obj.a(); // 'OBJ'
obj.b(); // 'GLOBAL'
new obj.a() // undefined
new obj.b() // Uncaught TypeError: obj.b is not a constructor
```



  
对象obj的方法b是使用箭头函数定义的，这个函数中的this就永远指向它定义时所处的全局执行环境中的this，即便这个函数是作为对象obj的方法调用，this依旧指向Window对象。需要注意，定义对象的大括号{ }是无法形成一个单独的执行环境的，它依旧是处于全局执行环境中。

4. call()、apply()、bind()等方法不能改变箭头函数中this的指向
```js
var id = 'Global';
let fun1 = () ={
	console.log(this.id)
};
fun1(); // 'Global'
fun1.call({id: 'Obj'}); // 'Global'
fun1.apply({id: 'Obj'}); // 'Global'
fun1.bind({id: 'Obj'})(); // 'Global'
```



5. 箭头函数不能作为构造函数使用  
由于箭头函数时没有自己的this，且this指向外层的执行环境，且不能改变指向，所以不能当做构造函数使用。

6. 箭头函数没有自己的arguments  
箭头函数没有自己的arguments对象。在箭头函数中访问arguments实际上获得的是它外层函数的arguments值。

7. 箭头函数没有prototype  
8. 箭头函数的this指向哪⾥？  
箭头函数不同于传统JavaScript中的函数，箭头函数并没有属于⾃⼰的this，它所谓的this是捕获其所在上下⽂的 this 值，作为⾃⼰的 this 值，并且由于没有属于⾃⼰的this，所以是不会被new调⽤的，这个所谓的this也不会被改变。