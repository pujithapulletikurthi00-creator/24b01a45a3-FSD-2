class Employee {

    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public displayDetails(): void {
        console.log("Employee Name : " + this.name);
        console.log("Salary : ₹" + this.salary);
        console.log("Department : " + this.department);
    }
}

class Manager extends Employee {

    constructor(name: string, salary: number, department: string) {
        super(name, salary, department);
    }

    public showDepartment(): void {
        console.log("Department : " + this.department);
    }
}

let name = prompt("Enter Employee Name:") || "";
let salary = Number(prompt("Enter Salary:"));
let department = prompt("Enter Department:") || "";

let emp = new Employee(name, salary, department);

emp.displayDetails();

let manager = new Manager(name, salary, department);

manager.showDepartment();
