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



// 15 - Operator precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avgAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avgAge);
*/



//////////////////////////////////////////
/// 16 - CODING CHALLENGE #1 ////////////

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

YOUR TASKS:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.


// TEST DATA 1
const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

const markBMI1 = massMark1 / (heightMark1 * heightMark1);
const johnBMI1 = massJohn1 / (heightJohn1 * heightJohn1);

console.log("For TD1, Mark's BMI:", markBMI1);
console.log("For TD1, John's BMI:", johnBMI1);

const markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markHigherBMI1);


// TEST DATA 2
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const markBMI2 = massMark2 / (heightMark2 * heightMark2);
const johnBMI2 = massJohn2 / (heightJohn2 * heightJohn2);

console.log("For TD2, Mark's BMI:", markBMI2);
console.log("For TD2, John's BMI:", johnBMI2);

const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);




// 17 - Strings and template literals

const firstName = "Robin";
const job = "web developer";
const birthYear = 1995;
const now = 2023;

const robin = "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job + "!";
const robinNew = `I'm ${firstName}, a ${now - birthYear} years old ${job}!`;

console.log(robin);
console.log(robinNew);

console.log(`Just a regular string..`);

console.log("String with\n\
multiple\n\
lines");

console.log(`String with
multiple
lines`);



// 18 - Taking decisions if else statements

const age = 15;

if (age >= 18) {
    console.log("Hoorray! Sarah can apply for driving license! 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 🙂`);
}

let birthYear = 1995;
let century;

if (birthYear <= 2000) {
    century = "20th century";
} else {
    century = "21st century";
}

console.log(`Your birth year is ${1995}, so you're from ${century} 😎`);



//////////////////////////////////////////
/// 19 - CODING CHALLENGE #2 ////////////

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

YOUR TASKS:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const markBMI = (massMark / (heightMark ** 2)).toFixed(2);
const johnBMI = (massJohn / (heightJohn ** 2)).toFixed(2);


if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}
*/


/*
// 20 - Type Conversion and Coercion

// Type conversion
const inputYear = "1995";
console.log(inputYear + 18);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Robin"));
console.log(typeof NaN);

console.log(String(24), 24);


// Type coercion
console.log("I am " + 23 + 7 + " years old");
console.log(23 + 7 + " I am " + 100 + 3);
console.log(typeof (23 + " I am " + 100));
console.log("24" + "10" - 4);
console.log("24" + "10" + 4);
console.log("3" * "4" + 4);
console.log("12" / "2");


let n = "1" + 1;    // 11
n = n - 1;          // 11 - 1
console.log(n);     // 10
*/
