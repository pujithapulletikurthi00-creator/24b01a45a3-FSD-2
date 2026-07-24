let str: string = prompt("Enter a string:") || "";

let frequency: { [key: string]: number } = {};

for (let ch of str) {
    if (frequency[ch]) {
        frequency[ch]++;
    } else {
        frequency[ch] = 1;
    }
}

console.log("Character Frequencies:");

for (let ch in frequency) {
    console.log(ch + " : " + frequency[ch]);
}
