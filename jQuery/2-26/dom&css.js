/**
 * Created by Administrator on 2017/2/26 0026.
 */
$(function(){

   // $('div').css('color','red');

    //$('div').css(['color','width','height']);


    //$.each（）方法，可以轻松的遍历对象数组
 /*  var box =  $.('div').css(['color','width','height']);
   $.each(box,function(attr,value){
        alert(attr+':'+value);
   });*/

 /*
    $('div').each(funciton(index,element){
        alert(index+':'+element);
    })
*/

 /*
    //用函数来传参 将全局参数包装成局部参数
    $('div').css('width',function(index,value){
      return parseInt(value)-500+'px';
    })
*/

    //$('div').addClass('red');                //添加一个CSS类
    //$('div').addClass('red bg size');        //添加多个CSS类
    //$('div').removeClass('red');                //删除一个CSS类
    //$('div').removeClass('red bg size');        //删除多个CSS类
/*
    $('div').click(function(){
       $(this).toggleClass('red size');      //两个样式之间的切换，默认样式和制定样式的切换 可以传递多个参数
    });
*/
 $('div').click(function(){
    $(this).toggleClass(function(){                 //更加局部
        if($(this).hasClass('red')){
            $(this).removeClass('red');
            return'green';
        }
        else{
            $(this).removeClass('green');
            return'red';
        }
    });
 });



});