class Student {

    // Properties
    public studentId: number;
    public studentName: string;
    public course: string;

    // Constructor
    constructor(id: number, name: string, course: string) {
        this.studentId = id;
        this.studentName = name;
        this.course = course;
    }

    // Method to display details
    public displayDetails(): void {
        console.log("----- Student Details -----");
        console.log("Student ID   : " + this.studentId);
        console.log("Student Name : " + this.studentName);
        console.log("Course       : " + this.course);
    }
}

// Creating objects
let student1 = new Student(101, "Pujitha", "AI & DS");
let student2 = new Student(102, "Harsha", "CSE");

// Display details
student1.displayDetails();
student2.displayDetails();
