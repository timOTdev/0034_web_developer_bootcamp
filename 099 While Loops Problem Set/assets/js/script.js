alert("Welcome to the While Loops Problem Set, here are the answers. Check the console.")

console.log("Printing all numbers between -10 and 19");
var count = -10;
while (count < 20) {
	console.log(count);
	count++;
}

console.log("Printing all even numbers between 10 and 40...");
var count = 10;
while (count < 41) {
	console.log(count);
	count+=2;
}
// Alternate Method
// while(count < 40) {
// 	if(count % 2 === 0) {
// 	console.log(count);
// 	}
// 	count+=1;
// }

console.log("Printing all odd numbers between 300 and 333...");
var count = 301;
while (count < 334) {
	console.log(count);
	count+=2;
}
// Alternate Method
// while(count < 334) {
// 	if(count % 2 !== 0) {
// 	console.log(count);
// 	}
// 	count+=1;
// }

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50...");
var count = 5;
while (count < 51) {
	if (count % 5 === 0 && count % 3 === 0) {
	console.log(count);
	};
	count++;
}
