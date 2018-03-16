var answer = prompt("Are we there yet?");

// Alternate without bonus
// while (answer !== "yes" && answer !== "yea") {
// 	var answer = prompt("are we there yet?");
// }

// alert("Yay, we finally made it!");

while (answer.indexOf("yes") === -1) {
	var answer = prompt("are we there yet?");
}

alert("Yay, we finally made it!");

