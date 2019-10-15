window.onload = init;
var i =0;
function init(){
	var btn = document.querySelector(".menu__btn");
	btn.onclick = dropMenu;
}

function dropMenu(){
	i++;
	console.log(i);
	var window_size = window.matchMedia('(max-width: 768px)');
	if ((i%2)>0 && window.matchMedia('(max-width: 768px)').matches){
		var drop = document.querySelector(".nav");
		var but = document.querySelector("#button");
		but.setAttribute("checked", "checked");
		drop.style.display = "block";
		drop.style.zIndex = "1000";
	}
	else {
		var drop = document.querySelector(".nav");
		var but = document.querySelector("#button");
		but.setAttribute("checked", "false");
		drop.style.display = "none";
		drop.style.zIndex = "0";
	}
} 
