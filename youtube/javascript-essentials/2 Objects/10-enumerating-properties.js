// Lesson
// in js different loops offer various ways to iterate over collections like arrays and objects.
// for arrays, we can use the for..of loop. Ideal for iterating over array elements.
let numbers = [1, 2, 3, 4, 5];
for (const element of numbers) {
  console.log(element);
}

// for objects, we can use the for..in loop. Ideal for iterating over object properties. It is iterating over the KEYS of the object.
// Useful for accesing values when you know the structure of the object.
const dog = {
  name: "Max",
  age: 5,
  eyeColor: "blue",
};

for (const key in dog) {
  console.log(dog[key]); // logs the values of the object
}

const keys = Object.keys(dog); // returns an array of the keys of the object
for (const key of keys) {
  console.log(key); // logs the keys of the object
}

const values = Object.values(dog); // returns an array of the values of the object
for (const value of values) {
  console.log(value); // logs the values of the object
}

const entries = Object.entries(dog); // returns an array of the key-value pairs of the object
for (const entry of entries) {
  console.log(`Key: ${entry[0]} => Value: ${entry[1]}`); // logs the key-value pairs of the object as an array
}

// Exercise
function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`${this.quantity} x ${this.name}`);
  };
}

const newItem = new GroceryItem("Banana", 5);
const itemKeys = Object.keys(newItem); // returns an array of the keys of the object
for (const key of itemKeys) {
  console.log(key); // logs the keys of the object
}

const itemValues = Object.values(newItem); // returns an array of the values of the object
for (const value of itemValues) {
  console.log(value); // logs the values of the object
}

const itemEntries = Object.entries(newItem); // returns an array of the key-value pairs of the object
for (const entry of itemEntries) {
  console.log(entry); // logs the key-value pairs of the object as an array
}
