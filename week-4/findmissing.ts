let size: number = Number(prompt("Enter the size of the array:"));

let arr: number[] = [];

for (let i = 0; i < size; i++) {
    arr.push(Number(prompt("Enter element " + (i + 1))));
}

let n = size + 1;

let totalSum = (n * (n + 1)) / 2;

let arraySum = 0;

for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
}

let missingNumber = totalSum - arraySum;

console.log("Missing Number = " + missingNumber);
