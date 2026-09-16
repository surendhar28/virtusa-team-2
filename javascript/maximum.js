let input = prompt("Enter numbers separated by spaces:");

let numbers = input.split(" ").map(Number);

let maximum = Math.max(...numbers);

console.log("Maximum value is:", maximum);