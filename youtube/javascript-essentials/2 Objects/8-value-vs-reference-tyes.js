// Lesson
// Javascript supports 8 different data types, 7 primitive and 1 complex.
// number, string, boolean, BigInt, undefined, null and symbol are primitive data types. Object is a complex data type.
// These are managed differently in memory. Primitive data types are stored in the stack, while complex data types are stored in the heap.
// When we assign a primitive data type to a variable, it creates a copy of the value. When we assign a complex data type to a variable,
// it creates a reference to the value in memory. This means that when we change the value of a complex data type, it changes for all variables that reference it,
// while changing a primitive data type only changes for that variable.

// Primitive Types: Passed by Value (by copy)
// primitive values are copied by value, meaning they do not affect one another when changed.
let a = 10;
let b = a; // b is a copy of a, changing b does not affect a. They are stored in two different locations in memory.

a = 20;
console.log(a); // 20
console.log(b); // 10

// Complex (Reference) Types: Passed by Reference
// reference values are copied by reference, meaning changes to one affect any other variable referencing the same object.
// note: object values are key-value pairs.
a = { value: 20 };
b = a; // b is referencing THE SAME object in memory.

a.value = 100; // so when updating a.value, it updates the same object that b is referencing, so b.value is also updated to 100.

console.log(a); // { value: 100 }
console.log(b); // { value: 100 }

// Exercise
