// isEven() = Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise
var isEven = function(num) {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	};
}

// Alternate solution
// var isEven = function(num) {
// 	return num % 2 === 0;
// }

// factorial() = Write a function factorial() which takes a single numeric argument and returns the factorial of that number.
var factorial = function(num) {
	var count = 1;
	for (var i = 2; i <= num; i++) {
		count *= i;
	}
	return count;
}

// Alternate solution
// var factorial = function(num) {
// 	if (num <= 0 ) {
// 		return 1;
// 	} else {
// 		return (num * factorial(num-1));
// 	}
// }

// kebabToSnake() = Write a function kebabToSnake() which takes takes a single kebab-cased string argument and returns the snake_cased version.
var kebabToSnake = function(str) {
	var newStr = str.replace(/-/g, "_");
	return newStr;
}