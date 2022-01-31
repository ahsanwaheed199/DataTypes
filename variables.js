//==========var===============
//block scope (n)
//redeclareable (y)
//reassignable (y)
//hoist (y)

// var tester = "hey hi";

// // function newFunction() {
// //   var hello = "hello";
// // }
// // console.log(hello); // error: hello is not defined

// // re-declare
// var greeter = "hey hi";
// var greeter = "say Hello instead";

// // hoisting
// console.log(greeter);
// var greeter = "say hello";

// // problem in var
// var greeter = "hey hi";
// var times = 4;

// if (times > 3) {
//   var greeter = "say Hello instead";
// }

// console.log(greeter); // "say Hello instead"

// //==========let===============
// //block scope (y)
// //redeclareable (n)
// //reassignable (y)
// //hoist (n)

// // let greeting = "say Hi";
// // let times = 4;

// // if (times > 3) {
// //   let hello = "say Hello instead";
// //   console.log(hello); // "say Hello instead"
// // }
// // console.log(hello); // hello is not defined

// // let greeting = "say Hi";
// // greeting = "say Hello instead";

// // let greeting = "say Hi";
// // let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// //=========const===============
// //block scope (y)
// //redeclareable (n)
// //reassignable (n)
// //hoist (n)

// const PI = 3.141592653589793;
// PI = 3.14; // This will give an error
// PI = PI + 10; // This will also give an error

// // You can create a constant array:
// const cars = ["Saab", "Volvo", "BMW"];

// // You can change an element:
// cars[0] = "Toyota";

// // You can add an element:
// cars.push("Audi");

// // You can create a const object:
// const car = { type: "Fiat", model: "500", color: "white" };

// // You can change a property:
// car.color = "red";

// // You can add a property:
// car.owner = "Johnson";

// const x = 2; // Allowed

// {
//   const x = 3; // Allowed
// }

// {
//   const x = 4; // Allowed
// }

// const x = 2; // Allowed
// x = 2; // Not allowed
// var x = 2; // Not allowed
// let x = 2; // Not allowed
// const x = 2; // Not allowed

// {
//   const x = 2; // Allowed
//   x = 2; // Not allowed
//   var x = 2; // Not allowed
//   let x = 2; // Not allowed
//   const x = 2; // Not allowed
// }

// Variable Names Legal and Illegal

// Variable names cannot contain spaces.

// Variable names must begin with a letter, an underscore (_) or a dollar sign ($).

// Variable names can only contain letters, numbers, underscores, or dollar signs.

// Variable names are case-sensitive.

// Certain words may not be used as variable names, because they have other meanings
//  within JavaScript. Check out this complete list of the reserved words.

let $a = 3;
console.log($a);

// let class=3
// console.log(class)  //error

// Reference Error
// The ReferenceError object represents an error when a variable that
//  doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

// let z;
// console.log(y); // y is not defined : throw reference error

// console.log(b); //variables.js:131 Uncaught ReferenceError: Cannot access 'b' before initialization
// let b;

// Boxing vs Unboxing
//  Boxing
// In JavaScript and other languages, primitives values don’t have methods or properties,
// so if you want to use them, you need to use a wrapper.
//String primitive name
const name1 = "KESK";
const name2 = name1.toLowerCase(); //kesk
console.log(typeof name2);
// In general, using the boxed object wrapper directly isn’t usually a good idea because there are some
//  gotchas related to him, and you have to be careful if you don’t want unexpected results.

// const a = new Boolean(true);
// if (a) console.log("it's true"); // it's true
// const b = new Boolean(false);
// if (!b) console.log("never runs"); // objects are “truthy.“
// const c = Object(false);
// if (!c) console.log("never runs"); // objects are “truthy.“

// Unboxing
const a = Object(false);
console.log(typeof a);
// a == false; //true
// a === false //false
// a.valueOf() == false //true
// a.valueOf() === false //true

// Mutation:
// Mutable or imutable : primitice data type is imutable  or non primitive type is mutable

// Call by Value vs Call by reference

// by value.
// let a = 1;
// let b = a;
// b = b + 2;
// console.log(a); // 1
// console.log(b); // 3

// by reference
// let x = [1];
// let y = x;
// y.push(2);
// console.log(x); // [1, 2]
// console.log(y); // [1, 2]
