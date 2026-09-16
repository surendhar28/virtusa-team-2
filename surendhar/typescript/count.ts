declare const require: (moduleName: string) => any;
const readline = require("readline");

const rl = readline.createInterface({
    input: (globalThis as any).process.stdin,
    output: (globalThis as any).process.stdout
});

rl.question("Enter array elements: ", (input) => {

    let arr: number[] = input.split(" ").map(Number);

    rl.question("Enter element to search: ", (value) => {

        let element: number = Number(value);
        let count: number = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === element) {
                count++;
            }
        }

        console.log("Occurrences:", count);

        rl.close();
    });
});