const words = ["apple", "banana", "ant", "ball", "cat", "car"];

const grouped = new Map();

for (const word of words) {

    const firstChar = word[0];

    if (!grouped.has(firstChar)) {
        grouped.set(firstChar, []);
    }

    grouped.get(firstChar).push(word);
}

console.log(grouped);
