class Student {

    // Properties
    name: string;
    age: number;
    rollNo: number;
    course: string;

    // Constructor
    constructor(name: string, age: number, rollNo: number, course: string) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
        this.course = course;
    }

    // Method to display student details
    displayDetails(): void {
        console.log("Student Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Roll No: " + this.rollNo);
        console.log("Course: " + this.course);
    }

    // Method to introduce student
    introduce(): void {
        console.log("Hello, I am " + this.name);
        console.log("I am studying " + this.course);
    }
}

// Creating an object
let student1 = new Student("Surendhar", 22, 101, "Computer Science");

// Calling methods
student1.displayDetails();
student1.introduce();