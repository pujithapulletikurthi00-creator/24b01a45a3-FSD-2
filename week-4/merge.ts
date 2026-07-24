let size1: number = Number(prompt("Enter size of first array:"));
let arr1: number[] = [];

for (let i = 0; i < size1; i++) {
    arr1.push(Number(prompt("Enter element " + (i + 1))));
}

let size2: number = Number(prompt("Enter size of second array:"));
let arr2: number[] = [];

for (let i = 0; i < size2; i++) {
    arr2.push(Number(prompt("Enter element " + (i + 1))));
}

// Merge arrays
let mergedArray: number[] = [...arr1, ...arr2];

console.log("Merged Array:", mergedArray);
