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
console.log(programmer1.constructor); // Output: [Function: Programmer], cofirms that programmer1 is an instance of the Programmer constructor function.
