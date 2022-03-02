
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        items:2,
        margin:10,
        nav:true,
        dots:false,
        responsive : {
            // breakpoint from 0 up
            0 : {
                loop:true,
                items:1,
                margin:10,
                nav:true,
                dots:false
                    },
            // breakpoint from 480 up
            480 : {
                loop:true,
                items:1,
                margin:10,
                nav:true,
                dots:false
            },
            // breakpoint from 768 up
            768 : {
                loop:true,
                items:2,
                margin:10,
                nav:true,
                dots:false
            }
        }
    });        
  });