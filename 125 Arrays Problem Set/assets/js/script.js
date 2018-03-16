// printReverse() - Write a function printReverse() that takes
// an array as an argument and prints out the elements in the
// array in reverse order (don't actually reverse the array itself).
function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}

// isUniform() - Write a function isUniform() which takes an array 
// as an argument and returns true if all elements in the array are identical.
function isUniform(array) {
	for (var i = 1; i < array.length; i++) {
		if (array[0] !== array[i]) {
			return false;
		};
	};
	return true;
}

// sumArray() - Write a function sumArray() that accepts an array of 
// numbers and returns the sum of all the numbers in the array.
function sumArray(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		total += array[i];
	};
	return total;
}

// max() - Write a function max() that accepts an array of numbers 
// and returns the maximum number in the array.
function max(array) {
	var highest = array[0];
	for (var i = 1; i < array.length; i++) {
		if (highest < array[i]) {
			highest = array[i];
		};
	};
	return highest;
}