let userName: string = "Alice";
let userAge: number = 25;
let isMember: boolean = true;

console.log("Data type of userName is --> " + typeof userName); // Output: string
console.log("Data type of userAge is --> " + typeof userAge);   // Output: number
console.log("Data type of isMember is --> " + typeof isMember); // Output: boolean

// A simple function using these types
function displayUserProfile(name: string, age: number, active: boolean): void {
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${active ? "Active" : "Inactive"}`);
}
displayUserProfile(userName, userAge, isMember);