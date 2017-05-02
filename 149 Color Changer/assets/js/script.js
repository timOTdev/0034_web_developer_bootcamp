var button = document.querySelector("button");

button.addEventListener("click", function() {
	if (document.body.style.background !== "purple") {
		document.body.style.background = "purple";
	} else {
		document.body.style.background = "white";
	}
});

// Alternate, need to add a class of purple in style.css
// button.addEventListener("click", function() {
// 	document.body.classList.toggle("purple");
// });

// Alternate
// var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click", function() {
// 	if(isPurple){
// 		document.body.style.background = "white";
// 	} else {
// 		document.body.style.background = "purple";
// 	}
// 	isPurple = !isPurple;
// })