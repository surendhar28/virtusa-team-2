abstract class Animal {

    // Abstract method
    abstract makeSound(): void;

    // Concrete method
    eat(): void {
        console.log("Animal is eating");
    }
}

// Child class
class Dog extends Animal {

    // Implementing abstract method
    makeSound(): void {
        console.log("Dog barks");
    }
}

// Creating object of child class
let dog = new Dog();

dog.makeSound();
dog.eat();