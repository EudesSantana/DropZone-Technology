jQuery(document).ready(function($) {
    //Fixed Header 
    window.onscroll = function() {
        if(window.pageYOffset > 140){
            $('#header').addClass("active");
        } else {
            $('#header').removeClass("active");
        }
    }
});