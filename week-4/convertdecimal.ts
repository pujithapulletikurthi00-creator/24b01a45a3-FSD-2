let decimal: number = 10;
let binary: string = "";

let temp = decimal;

if (temp === 0) {
    binary = "0";
} else {
    while (temp > 0) {
        binary = (temp % 2) + binary;
        temp = Math.floor(temp / 2);
    }
}

console.log("Binary = " + binary);
