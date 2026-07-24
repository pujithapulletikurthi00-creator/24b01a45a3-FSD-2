let size: number = Number(prompt("Enter array size:"));

let arr: number[] = [];

for (let i = 0; i < size; i++) {
    arr.push(Number(prompt("Enter element " + (i + 1))));
}

let frequency: { [key: number]: number } = {};

for (let num of arr) {
    if (frequency[num]) {
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}

console.log("Occurrences of each element:");

for (let key in frequency) {
    console.log(key + " : " + frequency[key]);
}
