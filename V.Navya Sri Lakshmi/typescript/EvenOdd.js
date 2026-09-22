import * as readline from "readline";
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function to check whether a number is even or odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
// Take number from the user
input.question("Enter a number: ", (answer) => {
    const number = Number(answer);
    // Check and display the result
    const result = checkEvenOdd(number);
    console.log("The number is:", result);
    input.close();
});
