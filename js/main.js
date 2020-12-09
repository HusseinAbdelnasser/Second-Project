$(function () {
  
    $(window).scroll(function(){
        
        var navbar = $('.navbar');
        
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
        
    });

});


// scroll to top
 
$(function(){
    $(window).on("scroll", function(){
        if($(window).scrollTop() >= 700){
            $(".scroll").fadeIn(1000)
        }else{
            
            $(".scroll").fadeOut(1000)
        }
    });
    $(".scroll").on("click", function(){
        $("html , body").animate({
            scrollTop:0
        }, 1000)
    });
        
 });
