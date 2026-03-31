// constructor functions were the standard before ES6 classes were introduced, to simplify object creation and inheritance.
// They are still widely used and are a fundamental part of JavaScript's prototypal inheritance system.

// Leson
function Programmer(name, prefferedLanguage) {
  this.name = name;
  this.prefferedLanguage = prefferedLanguage;
  this.writeCode = function () {
    console.log(`${this.name} writes ${this.prefferedLanguage} code.`);
  };
  this.drinksCoffe = function () {
    console.log(`${this.name} drinks coffee.`);
  };
}

const programmer1 = new Programmer("Alice", "JavaScript");
programmer1.writeCode(); // Output: Alice writes JavaScript code.
programmer1.drinksCoffe(); // Output: Alice drinks coffee.

// Task

function GroceryListItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`${this.quantity} x ${this.name}`);
  };
}

const groceryItem1 = new GroceryListItem("Bananas", 6);
groceryItem1.display(); // Output: 6 x Bananas
