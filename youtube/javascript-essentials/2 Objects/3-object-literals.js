// this structure allows us to encapsulate related properties and functions within a single organized entity.
programmer = {
  // properties of the object
  name: "Alice",
  prefferedLanguage: "JavaScript",

  // methods of the object
  // you can use different syntaxes to define methods within an object literal
  // one way to define a method,
  writeCode: function () {
    console.log(`${this.name} Writes ${this.prefferedLanguage} code.`);
  },

  // another way to define a method
  drinkCoffe() {
    console.log(`${this.name} drinks coffee.`);
  },
};

programmer.writeCode(); // Output: Alice Writes JavaScript code.

const groceryListItem = {
  name: "Apples",
  quantity: 4,

  display() {
    console.log(`${this.quantity} x ${this.name}`);
  },
};

groceryListItem.display(); // Output: 4 x Apples
