$(document).ready(function(){
    $("nav>ul>li:first-of-type").click(function(){
        $(this).siblings().slideToggle();
    });
});
$(document).ready(function(){
    $(window).resize(function(){
    var windowSize=$(window).width();
    console.log(windowSize);
    var iFrameSrc=$("#resizeIframe").attr("src");
    console.log(iFrameSrc);
    $("#resizeIframe").attr("src", iFrameSrc);
    });
 });
 $(document).ready(function(){
    $("h6").fadeIn()
 });
