// LOgical Operator

// The AND operator (&&) returns true if both expressions are true, otherwise it returns false.

let x = 6;
let y = 3;

console.log(x < 10 && y > 1);
console.log(x < 10 && y < 1);

// The OR operator (||) returns true if one or both expressions are true, otherwise it returns false.

let x = 6;
let y = 3;

console.log(x == 5 || y == 5);
console.log(x == 6 || y == 0);
console.log(x == 0 || y == 3);

// The NOT operator (!) returns true for false statements and false for true statements.

let x = 6;
let y = 3;

console.log(!(x === y));
console.log(!(x > y));

// Double ImageBitmapRenderingContext(!!)
// double band is truthy or falsy e.g

var something = "string";
if (!!something) {
  console.log("This is truthy");
} else {
  console.log("This is falsey");
}

//  The nullish coalescing operator (??) is a logical operator that returns its
//  right-hand side operand when its left-hand side operand is null or undefined.

const foo = null ?? "default string";
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0
