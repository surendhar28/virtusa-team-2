const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate a random integer
function generateRandomInteger(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

// Take minimum value from the user
input.question("Enter minimum value: ", (minimumInput) => {
    const minimum = Number(minimumInput);

    // Take maximum value from the user
    input.question("Enter maximum value: ", (maximumInput) => {
        const maximum = Number(maximumInput);

        if (minimum > maximum) {
            console.log("Minimum value cannot be greater than maximum value.");
        } else {
            const randomNumber = generateRandomInteger(minimum, maximum);
            console.log("Random integer:", randomNumber);
        }

        input.close();
    });
});