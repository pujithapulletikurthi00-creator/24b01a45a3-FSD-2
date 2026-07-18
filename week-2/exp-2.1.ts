function welcomeUser(name: string): string {
    return `Welcome, ${name}!`;
}

function getCollege(college: string = "SVECW"): string {
    return `College: ${college}`;
}

function sendEmail(email: string, subject?: string): void {
    console.log(`Sending email to ${email}`);
    if (subject) {
        console.log(`Subject: ${subject}`);
    }
}

function findAverage(...marks: number[]): number {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

console.log(welcomeUser("Pujitha"));
// console.log(welcomeUser(101));

console.log(getCollege());
console.log(getCollege("JNTU"));

sendEmail("student@gmail.com");
sendEmail("student@gmail.com", "Exam Schedule");

const average = findAverage(85, 90, 78, 88);
console.log(`Average Marks: ${average}`);
