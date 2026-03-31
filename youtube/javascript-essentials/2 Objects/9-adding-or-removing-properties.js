// Lesson
// objects in javascript are inherently dynamic, meaning we can add or modify properties and methods at any time after the creation.
// using the `const` keyword with an object declaration ensures that the variable cannot be reassigned to a different value.
// However, the contents of the objects appoints to, such as properties and methods, can still be altered or extended.

// note: objects in js are dynamic because you can change and mutate the properties and methods of the object after it has been initialezed.

const person = {
  name: "Alice",
};

console.log(person); // Output: { name: 'Alice' }

person.favoriteFood = "Pizza"; // Adding a new property to the object

console.log(person); // Output: { name: 'Alice', favoriteFood: 'Pizza' }

person["favoriteIceCream"] = "Vanilla"; // Adding another property using bracket notation
console.log(person); // Output: { name: 'Alice', favoriteFood: 'Pizza', favoriteIceCream: 'Vanilla' }

delete person.favoriteIceCream; // Removing a property from the object
console.log(person); // Output: { name: 'Alice', favoriteFood: 'Pizza' }

person.eat = function () {
  console.log(`${this.name} eats ${this.favoriteFood}`);
};

person.eat(); // Output: Alice eats Pizza

// Exercise
function GroceryListItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`${this.quantity} x ${this.name}`);
  };
}

const item = new GroceryListItem("Apples", 5);

item.groceryAisle = "Produce"; // Adding a new property to the object
console.log(item); // Output: GroceryListItem { name: 'Apples', quantity: 5, display: [Function], groceryAisle: 'Produce' }
