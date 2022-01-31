// control flow

// if, elseif, else , switch statments

// let day = new Date().getDay();
// // day=4;
// let Day;
// console.log(day);
// if (day == 0) {
//   Day = "sunday";
// } else if (day == 1) {
//   Day = "Monday";
// } else if (day == 2) {
//   Day = "Tuesday";
// } else if (day == 3) {
//   Day = "Wednesday";
// } else if (day == 4) {
//   Day = "Thursday";
// } else if (day == 5) {
//   Day = "Friday";
// } else {
//   Day = "Saturday";
// }
// console.log(Day);

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(day);

// Short Circuiting
// In JavaScript short-circuiting, an expression is evaluated from left to right until it is confirmed
// that the result of the remaining conditions is not going to affect the already evaluated result.

// In case of AND, the expression is evaluated until we get one false result because the result will always be false

// function A() {
//   console.log("called A");
//   return false;
// }
// function B() {
//   console.log("called B");
//   return true;
// }

// console.log(A() && B());  //Called A only

function A() {
  console.log("called A");
  return true;
}
function B() {
  console.log("called B");
  return false;
}

console.log(A() && B()); //Called A and B both and the final console print is false

const result = 0 || 60;
console.log(result); //60 because of 0 is falsy
const result2 = 0 || 60 || 40;
console.log(result2); //60
const result3 = null || 0;
console.log(result3); // if both are falsy then print the last one

// Ternary Operator
let greeting = (person) => {
  let name = person ? person.name : `stranger`;
  return `Howdy, ${name}`;
};

console.log(greeting({ name: `Alice` })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"

// function example(…) {
//     return condition1 ? value1
//          : condition2 ? value2
//          : condition3 ? value3
//          : value4;
// }

// // Equivalent to:

// function example(…) {
//     if (condition1) { return value1; }
//     else if (condition2) { return value2; }
//     else if (condition3) { return value3; }
//     else { return value4; }
// }
