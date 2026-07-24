let size: number = Number(prompt("Enter array size:"));
let arr: number[] = [];

for (let i = 0; i < size; i++) {
    arr.push(Number(prompt("Enter element " + (i + 1))));
}

let n: number = Number(prompt("Enter number of positions to rotate:"));

n = n % arr.length;

let rotatedArray = [...arr.slice(n), ...arr.slice(0, n)];

console.log("Rotated Array:", rotatedArray);
