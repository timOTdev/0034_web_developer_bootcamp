// Create secretNumber
var secretNumber = 4;

// Ask user for guess
var guess = Number(prompt("What's your guess?"));

// Check if guess is correct
if (guess === secretNumber) {
	alert("You guessed correctly!");
} 

// Otherwise, check if guess is higher
else if (guess > secretNumber) {
	alert("Too high. Guess again!")
}

// Otherwise, check if guess is lower
else {
	alert("Too low. Guess again!")
}