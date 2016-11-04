var winH = $(window).height();
var conHeight = winH - 48;
$("#list").height(conHeight);
$("#context").height(conHeight - 31);


var $footerC = $(".footer .cart"),
    $footerM = $(".footer .mon"),
    $footerP = $(".footer .pay"),
    $footerT = $(".footer .total"),
    $totalCount = Number($footerT.html()),
    $totalMon = 0;

function checkTotal() {
    if ($totalCount>0){
        $footerC.addClass("light");
        $footerM.addClass("has").html('￥'+$totalMon);
        $footerP.addClass("bg");
        $footerT.removeClass("hide").addClass("show");
    }else {
        $footerC.removeClass("light");
        $footerM.removeClass("has").html("购物车是空的");
        $footerP.removeClass("bg");
        $footerT.removeClass("show").addClass("hide");
        $totalCount = 0;
        $totalMon = 0;
    }
    $footerT.html($totalCount);
}
checkTotal();


$(".add").on("click", function () {
    $(this).parent().children().removeClass("hide").addClass("show");
    var $count = $(this).prev(),
        num = Number($count.html()) + 1;
    $count.html(num);
    var price = $(this).parent().attr("data-price");

    $totalCount += 1;
    $totalMon += Number(price);
    checkTotal();
});

$(".reduce").on("click", function () {
    var $count = $(this).next(),
        num = Number($count.html());
    var price = $(this).parent().attr("data-price");
    if (num == 1) {
        num = 0;
        $(this).removeClass("show").addClass("hide");
        $count.removeClass("show").addClass("hide");
    } else {
        num--;
    }
    $count.html(num);
    $totalCount -= 1;
    $totalMon -= Number(price);
    checkTotal();
});




$("#list .ul li").on("click",function () {
    $("#list .ul li").removeClass("select");
    $(this).addClass("select");
    if ($(this).hasClass("mm")){
        $(this).next().css("display","block");
        /*$(this).children("p").addClass("fir");
        $(this).parent().addClass("change")*/
    }
});










