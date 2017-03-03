/**
 * Created by Administrator on 2017/3/3 0003.
 */
$(function () {
    $(".del").click(function () {
        $(this).parent("td").parent("tr").remove();
    });

    $("#insert").click(function()
    {
        var abc = $("#add").val();
        var abc2 = $("#add2").val();
        $("table").append("<tr><td>" + abc + "</td><td>"+abc2+"</td><td><div class='del'>删除</div></td></tr>");
    });
    $(document).on("click",".del",function(){
        $(this).parent("td").parent("tr").remove();
    });

    $(document).ready(function(){
        $('.player > tbody tr:even').css('background','#cecd8f');
        $('.player > tbody tr:odd').css('background','#97a5e9');
    });

    $(document).on("click","#insert",function(){
        $('.player > tbody tr:even').css('background','#cecd8f');
        $('.player > tbody tr:odd').css('background','#97a5e9');
    });

});