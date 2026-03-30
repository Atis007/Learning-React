let programmer = {
  // properties of the object
  name: "Steven",
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

// this function is a factory function that enables us to create multiple programmer objects.
function createProgrammer(name, prefferedLanguage) {
  return {
    name: name,
    prefferedLanguage: prefferedLanguage,
    writeCode() {
      console.log(`${this.name} Writes ${this.prefferedLanguage} code.`);
    },

    // another way to define a method
    drinkCoffe() {
      console.log(`${this.name} drinks coffee.`);
    },
  };
}

const newProgrammer = createProgrammer("Alice", "JavaScript");
newProgrammer.writeCode(); // Output: Alice Writes JavaScript code.

function createGroceryListItem(name, quantity) {
  return {
    name,
    quantity,
    display() {
      console.log(`${this.quantity} x ${this.name}`);
    },
  };
}

const newGroceryListItem = createGroceryListItem("Bananas", 6);
newGroceryListItem.display(); // Output: 6 x Bananas
