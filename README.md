# 前端学习路径


## html & css学习
对Web标准的理解、浏览器内核差异、兼容性、hack、CSS基本功：布局、盒子模型、选择器优先级、HTML5、CSS3

行内元素有：a b span img input select

块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p

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
    
    
## javascript学习

数据类型、运算、对象、Function、继承、闭包、作用域、原型链、事件、RegExp、JSON、Ajax、
DOM、BOM、内存泄漏、跨域、异步装载、模板引擎、前端MVC、路由、模块化、Canvas、ECMAScript 6、Nodejs

### JSON
JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它是基于JavaScript的一个子集。
数据格式简单, 易于读写, 占用带宽小,如：{"age":"25", "name":"lesson"}
具体教程
[JSON教程](http://www.runoob.com/json/json-tutorial.html)

## jQuery学习
jQuery 是一个 JavaScript 库，jQuery是一个轻量级的"写的少，做的多"的JavaScript库

### 引入jQuery

```
<script src="jquery.js"></script>
```

### 实例1
```
$(document).ready(function(){
  //code
});
```

$() 是  $( document ).ready()简写

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


[jQuery中文手册](http://www.gbtags.com/api/jquery/jquery-doc/index.html)
[jQuery API 手册](http://caibaojian.com/jquery/)


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
