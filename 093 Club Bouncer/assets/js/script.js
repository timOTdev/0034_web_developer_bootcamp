alert("Welcome to the club! I'm the bouncer.");
var age = Number(prompt("Give me your idea...let's see...how old are you?"));

if (age < 0 ) {
	alert("For real? Come back when you're out of the womb!");
} else if (age < 18) {
	alert("Sorry young one, come back when you're 18 or older.");
} else if (age < 21) {
	alert("Cool, you can come in but you can't drink.");
} else if (age === 21) {
	alert("Happy 21st birthday! Bottoms up!");
} else {
	alert("Good. Come on in for a drink and good time!");
}

if (age % 2 !== 0) {
	alert("Your age is odd.");
}

if (age % Math.sqrt(age) === 0) {
	alert("Your age is a perfect square!");
}