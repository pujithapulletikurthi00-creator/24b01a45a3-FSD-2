let num: number = 145;
let temp: number = num;
let sum: number = 0;

while (temp > 0) {
    let digit = temp % 10;

    // Find factorial of the digit
    let fact: number = 1;
    for (let i = 1; i <= digit; i++) {
        fact *= i;
    }

    sum += fact;
    temp = Math.floor(temp / 10);
}

// Check Strong Number
if (sum === num) {
    console.log(num + " is a Strong Number");
} else {
    console.log(num + " is Not a Strong Number");
}
