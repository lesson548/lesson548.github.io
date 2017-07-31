
function createRandom(num ,from ,to )
{
    var arr=[];
    for(var i=from;i<=to;i++)
        arr.push(i);
    arr.sort(function(){
        return 0.5-Math.random();
    });
    arr.length=num;
    return arr;
}


    $(function () {                        //图片切换
        // $('.bg2').show();
        //
        // $('.bg').click(function () {
        //     $('.bg').hide();
        //     $('.bg').show();
        //     $(this).toggle(1000);
        // });

        $('.bg').addClass('bg1');
        $('.bg').click(function () {
            $(this).toggleClass('bg2');
            this.value=createRandom(1 ,1 ,9 );
            $(this).html("<div class='math'>"+this.value+"</div>");
        });
        //
        // // change(1,1,9);
        // function change(n,min,max) {                  //给每一张牌赋值随机数
        //     this.value=createRandom(n ,min ,max );
        //     $(this).html("<div class='math'>"+this.value+"</div>");
        // }
        //
        //
        // $('#chain').click(function () {         //刷新按钮
        //     change(1,1,9);
        // });



    });


