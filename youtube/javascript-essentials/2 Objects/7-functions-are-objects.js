// In js functions are treated as objects, which means they can have properties and methods just like any other object.
// This allows us to add custom properties and methods to functions, making them more versatile and powerful.

// Lesson
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

function add(num1, num2) {
  return num1 + num2;
}

const n = add;
console.log(n(5, 10));

const ProgrammerFunc = new Function(
  "name",
  `
    this.name = name;
    this.writeCode = function() {
        console.log('Code in JavaScript.');
    }`,
);

const programmer = new ProgrammerFunc("Alice");
programmer.writeCode(); // Output: Code in JavaScript.

// Task
function GroceryListItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`${this.quantity} x ${this.name}`);
  };
}

const groceryItem1 = new GroceryListItem("Bananas", 6);

function calculatePrice(groceryItem, price) {
  return price * groceryItem.quantity;
}

const performCalculation = calculatePrice;
console.log(performCalculation(groceryItem1, 0.5)); // Output: 3, which is the total price for 6 bananas at $0.5 each.
