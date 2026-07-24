let size: number = Number(prompt("Enter array size:"));

let arr: number[] = [];

for (let i = 0; i < size; i++) {
    arr.push(Number(prompt("Enter element " + (i + 1))));
}

let largest = arr[0];
let secondLargest = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    }
    else if (arr[i] > secondLargest && arr[i] != largest) {
        secondLargest = arr[i];
    }
}

console.log("Largest Number = " + largest);
console.log("Second Largest Number = " + secondLargest);
