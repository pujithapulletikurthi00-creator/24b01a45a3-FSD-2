let size: number = Number(prompt("Enter array size:"));

let arr: number[] = [];

for (let i = 0; i < size; i++) {
    arr.push(Number(prompt("Enter element " + (i + 1))));
}

let duplicates: number[] = [];

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
}

console.log("Duplicate Elements:");

for (let num of duplicates) {
    console.log(num);
}
