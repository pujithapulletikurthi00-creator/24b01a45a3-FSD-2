class Student {

    readonly studentId: number;
    public studentName: string;
    public course: string;

    constructor(id: number, name: string, course: string) {
        this.studentId = id;
        this.studentName = name;
        this.course = course;
    }

    displayDetails(): void {
        console.log("Student ID: " + this.studentId);
        console.log("Student Name: " + this.studentName);
        console.log("Course: " + this.course);
    }
}

let student = new Student(101, "Pujitha", "AI & DS");

student.displayDetails();
