window.onload = init();
// var i =0;
var count = false;
var drop = document.querySelector(".drop-nav");
var btn = document.querySelector(".menu__btn");

function init(){
	btn.onclick = dropMenu();
}

function dropMenu(){
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
