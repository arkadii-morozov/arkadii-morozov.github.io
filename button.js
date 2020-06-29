window.onload = init;
// var i =0;
function init(){
	var btn = document.querySelector(".menu__btn");
	var count = false;
	btn.onclick = dropMenu(count);
}

function dropMenu(count){
	var drop = document.querySelector(".drop-nav");
	console.log(count);
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
