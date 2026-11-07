console.log("Variables");
//comments are notes for devs

// Strings
// a string is text
let firstName = "Samantha";
let city = "San Diego";

console.log(firstName);
console.log(city);

// we can update a variable:
firstName = "Paulina";
console.log(firstName);

// Numbers
// integers or floting point numbers
let age = 36;
let price = 10.50;
console.log(age);
console.log(price);

// Booleans
// A boolean is either true or false

let isStudent = false;
let isLoggedIn = true;

console.log(isStudent);
console.log(isLoggedIn);

// Arithmetic operations

let num1 = 20;
let num2 = 3;

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;

console.log("Sum is: " + sum);
console.log("Sub is: " + sub);
console.log("Mult is: " + mul);
console.log("Div is: " + div);

// build strings with variables
// Option 1 - concatenation (using +)
console.log("My name is " + firstName + " and I live in " + city);

// Option 2 - template literal (cleaner use ``)
console.log(`My name is ${firstName} and I live in ${city}`);

// Constants 
// const = this value will never change
const daysInWeek = 7;
const pi = 3.1416;

console.log(daysInWeek);
console.log(pi);

// Challenge 1: Declare three variables using const and let that describe yourself:

// Challenge 2: Detect and fix the error

const city2 = "New York";
console.log("I live in " + city2);