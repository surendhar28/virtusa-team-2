import * as readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check whether the number is integer or floating-point
function checkNumberType(number: number): string {
    if (Number.isInteger(number)) {
        return "Integer";
    } else {
        return "Floating-point number";
    }
}

// Take number from the user
input.question("Enter a number: ", (answer) => {

    const number = Number(answer);

    // Check and display the type of number
    const result = checkNumberType(number);
    console.log("The number is:", result);

    input.close();
});