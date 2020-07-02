// window.onload = init();
// // var i =0;
// function init(){
// 	var count = false;
// 	var btn = document.querySelector(".menu__btn");
// 	btn.onclick = dropMenu(count);
// }

// function dropMenu(count){
// 	var drop = document.querySelector(".drop-nav");
// 	console.log(count);
// 	console.log(drop);
// 	count = !count;
// // 	var window_size = window.matchMedia('(max-width: 768px)');
// 	if (count && window.matchMedia('(max-width: 768px)').matches){
// // 		var but = document.querySelector("#button");
// // 		but.setAttribute("checked", "checked");
// 		drop.style.display = "block";
// 		drop.style.zIndex = "1000";
// 	}
// 	else {
// // 		var but = document.querySelector("#button");
// // 		but.setAttribute("checked", "false");
// 		drop.style.display = "none";
// 		drop.style.zIndex = "0";
// 	}
// } css({'display':'block'}); 

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
            pagination : false,
            nav:true,
//             navText: [
//                 '<span class="fa fa-angle-lef fa-4x"></span>',
//                 '<span class="fa fa-angle-right fa-4x"></span>'
//             ],
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

    //     $(".next_button").click(function(){
//         owl.trigger("next.owl.carousel");
//     });
 
//     $(".prev_button").click(function(){
//         owl.trigger("prev.owl.carousel");
//     });
};
