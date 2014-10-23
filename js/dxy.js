/**
 * Created with JetBrains PhpStorm.
 * User: lianchen
 * Date: 14-10-21
 * Time: 下午9:16
 * To change this template use File | Settings | File Templates.
 */
<!--===========================轮播效果=============================-->
$(function(){
    /*幻灯片切换*/
    setInterval(getDot,2000);

    /*回到顶部*/
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>100){
                $("#gotTopButton").fadeIn(1500);
            }
            else
            {
                $("#gotTopButton").fadeOut(1500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#gotTopButton").click(function(){
            $('body,html').animate({scrollTop:0},1000);
            return false;
        });
    });
});
function getDot(){/*获取幻灯片序号*/
    $("#imgDot a").click(function(){
        $("#imgDot a").removeClass();
        $(this).addClass("current");
    });
    var num = $("#imgDot .current").attr("data-name");
    switchImg(num);
}
function switchImg(e){/*根据序号切换幻灯片*/
    var ls = $("#imgList");
    var dd = $("#imgDot a");
    var len = $("#imgList li").css("width");
    var n = $("#imgList li").length-1;
    for(var i = e;i<=n;i++){
        var l_len = "-"+i*len.substr(0,len.length-2)+"px";
        ls.animate({"left":l_len},1000);
        dd.removeClass();
        dd.eq(i).addClass("current");
    }
    if(e==n){
        ls.animate({"left":0},1000);
        dd.removeClass();
        dd.eq(0).addClass("current");
    }
}

/*显示左侧导航效果*/
function showMask(obj){
    var hei = obj.offsetTop;
    $("#mask").show();
    $("#mask").animate({"top":hei+"px"},50);
}





