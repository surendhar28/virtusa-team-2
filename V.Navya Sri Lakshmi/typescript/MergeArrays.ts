import * as readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to merge two arrays
function mergeArrays(firstArray: number[], secondArray: number[]): number[] {
    return [...firstArray, ...secondArray];
}

// Take the first array from the user
input.question("Enter first array elements: ", (firstInput) => {

    // Convert input into an array of numbers
    const firstArray = firstInput.split(",").map(Number);

    // Take the second array from the user
    input.question("Enter second array elements: ", (secondInput) => {

        const secondArray = secondInput.split(",").map(Number);

        // Merge both arrays
        const mergedArray = mergeArrays(firstArray, secondArray);

        console.log("Merged Array:", mergedArray);

        input.close();
    });
});