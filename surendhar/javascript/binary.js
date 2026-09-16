let input = prompt("Enter sorted array elements separated by spaces:");

let arr = input.split(" ").map(Number);

let target = Number(prompt("Enter the element to search:"));

let left = 0;
let right = arr.length - 1;
let position = -1;

while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
        position = middle;
        break;
    } 
    else if (arr[middle] < target) {
        left = middle + 1;
    } 
    else {
        right = middle - 1;
    }
}

if (position !== -1) {
    console.log("Element found at index:", position);
} else {
    console.log("Element not found");
}