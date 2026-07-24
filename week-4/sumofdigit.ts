let num: number = Number(prompt("Enter a number:"));

let temp: number = num;
let sum: number = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit;
    temp = Math.floor(temp / 10);
}

console.log("Sum of Digits = " + sum);
