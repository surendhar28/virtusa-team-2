const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Parent class
class Person {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        console.log("Name:", this.name);
    }
}

// Child class inherits from Person
class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    displayDetails() {
        this.displayName();
        console.log("Course:", this.course);
    }
}

// Take student details from the user
input.question("Enter student name: ", (name) => {
    input.question("Enter course name: ", (course) => {

        // Create an object of the child class
        const student = new Student(name, course);

        console.log("\nStudent Details:");
        student.displayDetails();

        input.close();
    });
});