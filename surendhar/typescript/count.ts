import * as readline from "readline/promises";

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const input = await rl.question("Enter array elements: ");
    const arr: number[] = input.trim().split(/\s+/).map(Number);

    const value = await rl.question("Enter element to search: ");
    const target: number = Number(value);

    const count: number = arr.filter(num => num === target).length;
    console.log(`Occurrences of ${target}: ${count}`);

    rl.close();
}

main();