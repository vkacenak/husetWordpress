
// change navigation bar
$(function() {
  
    var nav = $(".nav");
    $(window).scroll(function() {    
       var scroll = $(window).scrollTop();
    
        if (scroll >= 10) {
           
            nav.addClass("nav-shrink");
        } else {
            nav.removeClass("nav-shrink");
        }
    });
});