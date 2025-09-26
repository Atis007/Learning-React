let username: string = "Lucas";
let firstName = "Lucas";

let age: number = 30;
let price = 99.99;

let isLoggedIn: boolean = true;
let isAdmin = false;

let nothingHere: null = null;
let notDefinedYet: undefined = undefined;

let bigNumber: bigint = 9007199254741991n;

let uniqueId: symbol = Symbol("id");

let anything: any = "Could be anything";
anything = 42;
anything = false;

let value: unknown = "Could be anything";
value = 42;
value = false;

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

function throwError(message: string): never {
  // Function that never returns value
  throw new Error(message);
}

function loopForever(): never {
  while (true) {}
}

let score: number | string = 100; // Union type
score = "one hundred"; //either number or string

let directions: "left" | "right" | "up" | "down";
directions = "left"; // Valid
directions = "up"; // Valid
// directions = 'forward'; // Error: Type '"forward"' is not assignable to type '"left" | "right" | "up" | "down"'.

console.log(`${username} is ${age} years old.`);

const person: Person = {
  // Using the Person type, that I defined below
  id: 10,
  name: "Alice",
  isWorking: true,
};

// person.id = 11; // Error: Cannot assign to 'id' because it is a read-only property.
person.isWorking = false; // But this is valid because isWorking is not readonly

const numbers: number[] = [1, 2, 3]; // Array of numbers

//const strings: string[] = ["1", "2", "3"]; // Array of strings
const strings: Array<string> = ["1", "2", "3"];

const persons: Person[] = [person];

const mixedArray: (string | number)[] = [1, 2, 3, "a", "b", "c"];
const mixedArra: Array<string | number> = [1, 2, 3, "a", "b", "c"];

const input = document.getElementById("username") as HTMLInputElement; // Type assertion

type Person = { readonly id: number; name: string; isWorking?: boolean }; // isWorking is optional property

interface IPerson {
  readonly id: number;
  name: string;
  isWorking: boolean;
}

const personNew: IPerson = {
    id: 123,
    name: "Bob",
    isWorking: true
}

type Animal = { name: string };
type Dog = Animal & { breed: string }; // Intersection type

interface IAnimal {
    name: string;
}

interface IDog extends IAnimal {
    breed: string;
}

const myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever"
}

const myDogByInterface: IDog = {
  name: "Buddy",
  breed: "Golden Retriever",
};


function greet(name: string): string {
  return `My name is ${name}`;
}

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5,5));

// function multiply(a: number, b: number): number {
//   return a * b;
// }

const multiply = (a: number, b: number): number => a * b;

