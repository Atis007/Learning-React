"use strict";
//public everywhere
//private only inside the class
//protected inside the class and subclasses
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
class Person {
    name;
    ssn;
    age;
    constructor(name, ssn, age) {
        this.name = name;
        this.ssn = ssn;
        this.age = age;
    }
    getSsn() {
        return this.ssn;
    }
}
class Employee extends Person {
    role;
    constructor(name, ssn, age, role) {
        super(name, ssn, age);
        this.role = role;
    }
    descriobe() {
        console.log(`My name is ${this.name}, I am ${this.age} years old and I work as a ${this.role}.`);
    }
}
/* const p = new Person("Bob", "123-45-6789", 40);
console.log(p.name);
console.log(p.getSsn());

const user = new User("Alice", 30);
user.greet(); */
const emp = new Employee("Charlie", "987-65-4321", 28, "Developer");
console.log(emp.descriobe());
//# sourceMappingURL=classes.js.map