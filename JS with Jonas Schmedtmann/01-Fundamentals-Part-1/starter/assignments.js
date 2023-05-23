/*
Assignment - Values and variables (10)

let country = "Bangladesh";
let continent = "South Asia";
let population = 170;

console.log(country);
console.log(continent);
console.log(population);



// Assignment - Data types (12)

let country = "Bangladesh";
let continent = "South Asia";
let population = 170;

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);



// Assignment - let, const, and var (13)

const country = "Bangladesh";
const continent = "Asia";
let population = 170;
const isIsland = false;
const language = "Bengali";

const isIsland = true;




// Assignment - Basic operators (14)

let country = "Bangladesh";
const continent = "Asia";
const language = "Bengali";
let population = 170;

console.log(population / 2);
population++
console.log(population);

console.log(population > 6);
console.log(population < 33);

let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);



// Assignment - Strings and template literals (17)

let country = "Bangladesh";
const continent = "Asia";
const language = "Bengali";
let population = 170;

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);



// Assignment - Taking decisions: if else statements (18)

const country = "Bangladesh";
const population = 170;
let description;

if (population > 33) {
    description = `${country}'s population is ${population - 33} million above average`
} else {
    description = `${country}'s population is ${33 - population} million below average`
}

console.log(description);
*/



// Assignment - Type conversion and coercion
console.log("9" - "5");                 // 4
console.log("19" - "13" + "17");        // 617
console.log("19" - "13" + 17);          // 23
console.log("123" < 57);                // false
console.log(5 + 6 + "4" + 9 - 4 - 2);   // 1143