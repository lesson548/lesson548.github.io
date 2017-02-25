# 前端学习路径



## html & css学习
对Web标准的理解、浏览器内核差异、兼容性、hack、CSS基本功：布局、盒子模型、选择器优先级、HTML5、CSS3

行内元素有：`a b span img input select`

块级元素有：`div ul ol li dl dt dd h1 h2 h3 h4…p`

### CSS选择器

1. id选择器（ # myid）
2. 类选择器（.myclassname）
3. 标签选择器（div, h1, p）
4. 相邻选择器（h1 + p）
5. 子选择器（ul > li）
6. 后代选择器（li a）
7. 通配符选择器（ * ）
8. 属性选择器（a[rel = "external"]）
9. 伪类选择器（a:hover, li:nth-child）
    
    

### CSS 手册
[W3SCHOOL手册_CSS](http://www.w3school.com.cn/cssref/)

[CSS参考手册](http://css.doyoe.com/)

## javascript学习

数据类型、运算、对象、Function、继承、闭包、作用域、原型链、事件、RegExp、JSON、Ajax、
DOM、BOM、内存泄漏、跨域、异步装载、模板引擎、前端MVC、路由、模块化、Canvas、ECMAScript 6、Nodejs

[JavaScript 标准参考教程_阮一峰](http://javascript.ruanyifeng.com/)


[W3SCHOOL手册_JAVASCRIPT](http://www.w3school.com.cn/js/index.asp)


### JSON
JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它是基于JavaScript的一个子集。
数据格式简单, 易于读写, 占用带宽小,如：{"age":"25", "name":"lesson"}
具体教程
[JSON教程](http://www.runoob.com/json/json-tutorial.html)

## jQuery学习
jQuery 是一个 JavaScript 库，jQuery是一个轻量级的"写的少，做的多"的JavaScript库

### 引入jQuery

**jQuery CDN引入**
```
<script src="//cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
```

**本地引入**
```
<script src="jquery.js"></script>
```

### 实例1
```
$(document).ready(function(){
  //code
});
```

`$()` 是  `$( document ).ready()`简写

### 简写实例1
```
$(function(){
  //code 
});
```
### jQuery 选择器
#### id 选择器
```
$( "#myId" ); // Note IDs must be unique per page.
```

#### class 选择器
```
$( ".myClass" );
```

#### 元素选择器
```
$("div");
```

#### 匹配选择器
```
$("*"); //匹配所有元素,多用于结合上下文来搜索
```

#### 属性选择器
```
$( "input[name='first_name']" );
```

#### 参考手册

[jQuery中文手册](http://www.gbtags.com/api/jquery/jquery-doc/index.html)


[jQuery API 手册](http://caibaojian.com/jquery/)

[jQuery 基本原理](http://docs.huihoo.com/jquery/jquery-fundamentals/zh-cn/index.html)



## HTTP状态码
```
100  Continue   继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
200  OK         正常返回信息
201  Created    请求成功并且服务器创建了新的资源
202  Accepted   服务器已接受请求，但尚未处理
301  Moved Permanently  请求的网页已永久移动到新位置。
302 Found       临时性重定向。
303 See Other   临时性重定向，且总是使用 GET 请求新的 URI。
304  Not Modified 自从上次请求后，请求的网页未修改过。

400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
401 Unauthorized 请求未授权。
403 Forbidden   禁止访问。
404 Not Found   找不到如何与 URI 相匹配的资源。

500 Internal Server Error  最常见的服务器端错误。
503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。
```


## 前端性能优化
前端优化指的是，在不影响功能和体验的情况下，能在浏览器执行的不要在服务端执行，能在缓存服务器上直接返回的不要到应用服务器，
程序能直接取得的结果不要到外部取得，本机内能取得的数据不要到远程取，内存能取到的不要到磁盘取，缓存中有的不要去数据库查询。
减少数据库操作指减少更新次数、缓存结果减少查询次数

1. 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。
2. 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数。
3. 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。
4. 当需要设置的样式很多时设置className而不是直接操作style。
5. 少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。
6. 避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。
7. 图片预加载，将样式表放在顶部，将脚本放在底部  加上时间戳。
8. 避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢。


---



# markdown学习
---

## 代码块
```
function view()
{

}

```
## 超链接

[百度](http://www.baidu.com)

## 图片

![百度](https://www.baidu.com/img/bd_logo1.png)

## 表格

1|2|3
---|---|---
a|b|c

## 引用

>这是引用

## 有序列表

1. 第一
1. 第二
1. 第三


## 无序列表

- 你
- 好

## 粗体

这是**粗体**
