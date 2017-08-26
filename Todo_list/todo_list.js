/**
 * Created by Administrator on 2017/8/26 0026.
 */
$(function () {

    var count = 0;

   $('#list-button').click(function () {
       // $('#list-input').val()

       $('#all-list').append("<li><div class='list_every'><input class='list-check' type='checkbox'><p>"+$('#list-input').val()+"</p><button class='list-delete'>"+"删除"+"</button></div></li>");

       $('#list-input').val("");

       count++;
       $('#count-sum').text(count);
   });

   //选中清单任务并改变为选中状态
   //  $('ul').click(function (event) {
   //      if((event.target.className == "list-check") ){
   //          $(event.target).next('p').css({"color":"gray","text-decoration":"line-through"});
   //              count--;
   //              $('#count-sum').text(count);
   //      }
   //  });



    // $('.list-delete').on('click', function() {
    //     if ($(this).attr('checked')) {
    //         $(this).next('p').css({"color":"gray","text-decoration":"line-through"});
    //         count--;
    //         $('#count-sum').text(count);
    //     } else {
    //         $(this).next('p').css({"color":"black","text-decoration":"none"});
    //         count++;
    //         $('#count-sum').text(count);
    //     }
    // });

//点击选中的checkbox任务恢复
//     $('ul').click(function (event) {
//         if((event.target.attr('checked') )){
//             $(event.target).next('p').css({"color":"gray","text-decoration":"line-through"});
//
//             count--;
//             $('#count-sum').text(count);
//
//         }
//     });


   //删除清单任务
    $('ul').click(function(event){                             //事件委托绑定append的dom
        if (event.target.className == "list-delete") {
            $(event.target).parents("li").remove();

            count--;
            $('#count-sum').text(count);
        }

    });
});