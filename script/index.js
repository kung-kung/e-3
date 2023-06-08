$(function(){
    $(".main>li").hover(function(){
        $(this).find(".sub").stop().slideDown()
    },function(){
        $(".sub").stop().slideUp()
    })
    var x = 0
    var y = $(".m").height()
    var z = 0
    setInterval(function(){
        z = x * -y
        $(".m").animate({top:z},1000)
        x = ( x + 1 ) % 3
    },2000)
    $(".no_txt ul li").eq(0).click(function(){
        $(".pop").show()
    })
    $(".close").click(function(){
        $(".pop").hide()
    })
})