window.onload = init();
// var i =0;
function init(){
	var count = false;
	var drop = document.querySelector(".drop-nav");
	var btn = document.querySelector(".menu__btn");
	btn.onclick = dropMenu(drop,count);
}

function dropMenu(drop,count){
	console.log(count);
	console.log(drop);
	count = !count;
// 	var window_size = window.matchMedia('(max-width: 768px)');
	if (count && window.matchMedia('(max-width: 768px)').matches){
// 		var but = document.querySelector("#button");
// 		but.setAttribute("checked", "checked");
		drop.style.display = "block";
		drop.style.zIndex = "1000";
	}
	else {
// 		var but = document.querySelector("#button");
// 		but.setAttribute("checked", "false");
		drop.style.display = "none";
		drop.style.zIndex = "0";
	}
} 

// $(window).on( "load", init);

// function init(){
//     var count = false;
//     $('.sub_catalog').on('click', () =>{
//         count = !count;
//         if(count){
//             $(".block_list_cat").css({'display':'block'});    
//             $(".button_catalog").css({'display':'block'});    
//         } else{
//             $(".block_list_cat").css({'display':'none'});    
//             $(".button_catalog").css({'display':'none'});    
//         }
//         console.log(count);
//     });
