// Lesson
// abstraction is a core concept in OOP that involves hiding complex details, while exposing only the necessary parts of a class or object to the user.
// this makes the objects in our apps easier to interact with, and reduces the impact of changes.

// abstraction means to HIDE the implementation details

function Programmer(name, preferredLanguage) {
  this.name = name;
  this.preferredLanguage = preferredLanguage;

  // Public method
  this.writeCode = function () {
    console.log(`${this.name} is writing code in ${this.preferredLanguage}`);
  };

  // Private method, if creating a new method with the let or const keyword, it will be a private method, because it only exists inside the constructor function.
  const drinkCoffee = function () {
    console.log(`${this.name} drinks coffee.`);
  }.bind(this); // we are binding the "this" keyword to the current context, which is the programmer object, so it will reference the current context when the function is called.

  // Public method
  this.startDay = function () {
    drinkCoffee(); // we are abstracting away the implementation details, which is hidden from the user.
    // But right now it will log "undefined is drinking coffee". This is because "this.name", inside drinkCoffee, is currently undefined within this context.
    // The "this" keyword refers to the function that is defined in, so solve this and make it refer to the programmer object,
    // we can use the bind method to bind the "this" keyword to the programmer object, so it will reference the current context.
  };
}

const programmer1 = new Programmer("Alice", "JavaScript");
programmer1.writeCode();
programmer1.startDay();

// Exercise
