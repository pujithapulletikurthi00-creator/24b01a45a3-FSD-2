let num: number = 153;
let temp: number = num;
let sum: number = 0;

// Count the number of digits
let digits: number = num.toString().length;

while (temp > 0) {
    let digit = temp % 10;
    sum = sum + Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log(num + " is an Armstrong Number");
} else {
    console.log(num + " is Not an Armstrong Number");
}
