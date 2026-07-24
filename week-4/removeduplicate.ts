let str: string = prompt("Enter a string:") || "";
let result: string = "";

for (let ch of str) {
    if (!result.includes(ch)) {
        result += ch;
    }
}

console.log("String after removing duplicates: " + result);
