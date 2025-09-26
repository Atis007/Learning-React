//public everywhere
//private only inside the class
//protected inside the class and subclasses

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Person {
  /* public name: string;
  private ssn: string;
  protected age: number; */

  constructor(public name: string, private ssn: string, protected age: number) { //one line is enough, no need to declare again
    /* this.name = name;
    this.ssn = ssn;
    this.age = age; */ //no need to do this again
  }

  getSsn(): string {
    return this.ssn;
  }
}

class Employee extends Person {
    public role: string;
    constructor(name: string, ssn: string, age:number, role: string){
        super(name, ssn, age);
        this.role = role;
    }
    print(): void {
        console.log(`My name is ${this.name}, I am ${this.age} years old and I work as a ${this.role}.`);
    }
}

/* const p = new Person("Bob", "123-45-6789", 40);
console.log(p.name);
console.log(p.getSsn());

const user = new User("Alice", 30);
user.greet(); */

const emp = new Employee("Charlie", "987-65-4321", 28, "Developer");

interface Printable {
    print(): void;
}

class Invoice implements Printable {
    print() {

    }
}