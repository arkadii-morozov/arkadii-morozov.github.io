$(window).on( "load", init);

function init(){
    var count = false;
    $('.menu__btn').on('click', function(){
        count = !count;
        if(count){
            $('.drop-nav').slideDown(100);   
        } else{
            $('.drop-nav').slideUp(100);
        }
    });
    
    $(window).resize(function() {
        var widthDisp = $(window).width()+16;
        if ( widthDisp >= 768 ){
             $('.drop-nav').slideUp(20);
             count = false;
        }
    });
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 350) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    /**
    * Owl Carousel
    */
    $(function() {
        var owl = jQuery(".owl-carousel");
        owl.owlCarousel({
            loop:true,
            margin:10,
            items:1,
            autoplay:true,
            autoplayTimeout:6000,
            dots : false,
            nav:true,
            navTextnavText: [
                "<span class="fa-angle-left"></span>",
                "<span class="fa-angle-right"></span>"
                            ]
//             responsive:{
//                 0:{
//                     items:1
//                 },
//                 600:{
//                     items:3
//                 },
//                 1000:{
//                     items:5
//                 }
//             }
        });
    });
};
