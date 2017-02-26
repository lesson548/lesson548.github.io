/**
 * Created by Administrator on 2017/2/26 0026.
 */
$(function(){

    // alert($('div').css('width'));         //带单位

    // alert( $('div').width());              //不带单位 方便后期运算操作

    // $('div').width('500');                //设置呀元素长度，直接传数值，默认加px

    // $('div').width('500pt');                 //设置单位pt

    /*
    $('div').width(function(index,width){
        return width-500+'px';                 //可以不加单位，会智能添加，但加上会更加清晰
    });
*/
    // alert( $('div').height());            //高度方法类似

    alert( $('div').width());

});