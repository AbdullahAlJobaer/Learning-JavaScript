/*
10 - Values and variables

let js = "amazing";
console.log("40" + "8" + "23" - "10");
console.log(40 + 8 + 23 - 10);

let firstName = "Abdullah";
console.log(firstName);



// 12 - Data types

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let firstName;
console.log(firstName);
console.log(typeof firstName);

firstName = "ron";
console.log(typeof firstName);

console.log(typeof null);



// 13 - let, const, and var

let age = 30;
age = 31;

const birthYear = 1995;
// birthYear = 1997;

var job = "programmer";
job = "teacher";
console.log(job);

lastName = "Schmedtmann"; // Very bad practice of writing variables
console.log(lastName);
*/



// 14 - Basic operators

// Math operators
const now = 2075
const ageRobin = now - 1995;
const ageRite = now - 1997;
console.log("Robin's age is:", ageRobin);
console.log("Rite's age is:", ageRite);
console.log("The type of the values is:", typeof (ageRobin, ageRite));

console.log("Robin's age is 2 times:", ageRobin * 2, ",", "Rite's age is divided by 10:", ageRite / 10, ",", 2 ** 3);    // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Robin";
const lastName = "Jobaer";
console.log(firstName + lastName);

// Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);


// Comparison operators
console.log("Rite's age is less than Robin's?", ageRite < ageRobin);
console.log("Rite's age is greater than Robin's?", ageRite > ageRobin);
console.log("Rite's age is greater than or equal to 40?", ageRite >= 40);
console.log("Robin's age is less than or equal to 50?", ageRite <= 40);

const isFullage = ageRite >= 40;
console.log(isFullage);

console.log(now - 1995 > now - 1997)