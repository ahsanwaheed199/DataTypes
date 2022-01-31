
     // *Arithmatic Operators

*Addition
ex-01
let sum = 10 + 20;
console.log(sum);  //30

ex-02

let netPrice= 9.99;
let shippingFee = 2.49

let result= netPrice +shippingFee

console.log(result) //12.48

ex-03

let x = '10',
let y = '20';
let result = x + y;

console.log(result) //1020 because if two values are strings, it concatenates both values

ex-04
let result = 10 + '20';

console.log(result); //it also returns 1020 because if one value is string, it automatically converts a numeric value into a string and than concatenates.


*Subtraction Operator(-)

ex-01

let result = 30 - 10;
console.log(result);

*Multiplication Operaor

ex-01
let result = 2 * 3;
console.log(result); //6

ex-02

let result = '5' * 2;

console.log(result) // 10    //if a number is string and multiplies a second number,, it automatically converts string into a number by Number() method and then multiply.

*Divide Operator

let result = 20 / 10;

console.log(result); //2

ex-02 //
let result = '20' / 2;
console.log(result); //if a number is string, JS converts that number into a number and then Divides

ex-03

let energy = {
    toString() {
      return 50;
    },
  };
  
  let currentEnergy = energy - 10;
  console.log(currentEnergy);
  
  currentEnergy = energy + 100;
  console.log(currentEnergy);
  
  currentEnergy = energy / 2;
  console.log(currentEnergy);
  
  currentEnergy = energy * 1.5;
  console.log(currentEnergy);

*Modulo Operator
It returns a remainder left over when 2 numbers are divide

9 % 5 // 4
-12 % 5 // -2
1 % -2 // 1
5.5 % 2 // 1.5
-4 % 2 // -0


*PostFix Increment (a++)

var a = 2;
b = a++; // b = 2, a = 3


// *PreFix Increment  (++a)

var a = 2;
b = ++a; // b =3 , a = 3

*PreFix Decrement (--a)
var x = 2;
y = --x; // x = 1, y = 1

// PostFix Decrement (a--)
var x = 2; 
var x = 3;
y = x--; //y = 3, x = 2