"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username = "Lucas";
let firstName = "Lucas";
let age = 30;
let price = 99.99;
let isLoggedIn = true;
let isAdmin = false;
let nothingHere = null;
let notDefinedYet = undefined;
let bigNumber = 9007199254741991n;
let uniqueId = Symbol("id");
let anything = "Could be anything";
anything = 42;
anything = false;
let value = "Could be anything";
value = 42;
value = false;
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
function throwError(message) {
    // Function that never returns value
    throw new Error(message);
}
function loopForever() {
    while (true) { }
}
let score = 100; // Union type
score = "one hundred"; //either number or string
let directions;
directions = "left"; // Valid
directions = "up"; // Valid
// directions = 'forward'; // Error: Type '"forward"' is not assignable to type '"left" | "right" | "up" | "down"'.
console.log(`${username} is ${age} years old.`);
const person = {
    // Using the Person type, that I defined below
    id: 10,
    name: "Alice",
    isWorking: true,
};
// person.id = 11; // Error: Cannot assign to 'id' because it is a read-only property.
person.isWorking = false; // But this is valid because isWorking is not readonly
const numbers = [1, 2, 3]; // Array of numbers
//const strings: string[] = ["1", "2", "3"]; // Array of strings
const strings = ["1", "2", "3"];
const persons = [person];
const mixedArray = [1, 2, 3, "a", "b", "c"];
const mixedArra = [1, 2, 3, "a", "b", "c"];
const input = document.getElementById("username"); // Type assertion
const personNew = {
    id: 123,
    name: "Bob",
    isWorking: true
};
const myDog = {
    name: "Buddy",
    breed: "Golden Retriever"
};
const myDogByInterface = {
    name: "Buddy",
    breed: "Golden Retriever",
};
function greet(name) {
    return `My name is ${name}`;
}
function add(a, b) {
    return a + b;
}
console.log(add(5, 5));
// function multiply(a: number, b: number): number {
//   return a * b;
// }
const multiply = (a, b) => a * b;
//# sourceMappingURL=index.js.map