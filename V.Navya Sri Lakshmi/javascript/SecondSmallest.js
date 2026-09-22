const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find the second-smallest element
function findSecondSmallest(numbers) {
    const uniqueNumbers = [...new Set(numbers)];
    uniqueNumbers.sort((a, b) => a - b);

    if (uniqueNumbers.length < 2) {
        return null;
    }

    return uniqueNumbers[1];
}

// Take array input from the user
input.question("Enter array elements: ", (answer) => {
    const numbers = answer.split(",").map(Number);

    const secondSmallest = findSecondSmallest(numbers);

    if (secondSmallest === null) {
        console.log("At least two different numbers are required.");
    } else {
        console.log("Second-smallest element:", secondSmallest);
    }

    input.close();
});