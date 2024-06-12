/*
->FUNCTION
- A function is a block of code designed to perform a particular task. 

1. FUNCTION DECLARATION: function name() { . . .}

2. FUNCTION EXPRESSION: 

3. Arrow Function: const name = () => { ... }

4. Method Definition: const obj = { methodName() { ... } }
   Constructor Function: function Constructor() { ... }

5. IIFE (Immediately Invoked Function Expression): (function() { ... })();

6. Function as a Property of an Object: const obj = { propertyName: function() { ... } }

*/

// 1. FUNCTION DECLARATION
// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(`SUM: ${sum(1, 2)}`);

// 2. FUNCTION EXPRESSION
//Anonymous Function Expression
// const greet = function () {
//   console.log("Hello World");
// };

// greet();

// const logMessage = function (message) {
//   console.log(message);
// };

// logMessage("Hello, Message!!");

//Named Function Expression
// const respect = function greetFunction(message) {
//   console.log("This is message: ", message);
// };

// respect("Hello message for all of you");

// 3. ARROW FUNCTION
// const frontEnd = () => {
//   console.log("HMLT - CSS - JS");
// };

// frontEnd();

// 4. FUNCTION DEFINATION + FUNCTION CONSTRUCTOR
// class person {
//   constructor(name, gender, age) {
//     this.name = name;
//     this.gender = gender;
//     this.age = age;
//   }

//   personDetails() {
//     console.log(`
//     NAME: ${this.name},
//     GENDER: ${this.gender},
//     AGE: ${this.age}
//     `);
//   }

//   personGreet() {
//     console.log(`Hello, ${this.name}`);
//   }
// }

// const bhabin = new person("bhabin", "M", 25);
// bhabin.personDetails();
// bhabin.personGreet();

// 5. IIFE (Immediately Invoked Function Expression): An IIFE is a function that runs as soon as it is defined
// (function () {
//   console.log("hello, world!!");
// })();

// 6. Function as a Property of an Object:
// const student = {
//   name: "rabin",
//   studentInfo: function () {
//     console.log(`Student Name: ${this.name}`);
//   },
// };

// console.log(s1.name);
// const s1 = new student();

// For of loop and about (...args)
function SumofNumbers(...args) {
  for (let val of args) {
    console.log(val);
  }
}
SumofNumbers(1, 2, 3, 4, 5);

// Function parameters
// There are two special kinds of parameter syntax: default parameters and rest parameters.
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5));
