let num: number = Number(prompt("Enter a number:"));
let sum: number = 0;

for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        sum += i;
    }
}

if (sum === num) {
    console.log("Perfect Number");
} else {
    console.log("Not a Perfect Number");
}
