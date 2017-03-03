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
    })
    $(document).on("click",".del",function(e){
        $(this).parent("td").parent("tr").remove();
    })
})