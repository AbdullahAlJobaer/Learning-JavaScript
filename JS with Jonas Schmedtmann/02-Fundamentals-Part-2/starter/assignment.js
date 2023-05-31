"use strict";

// Assignment - Functions (33)
/*
function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}

const descFinland = describeCountry("Finland", 6, "Helsinki");
const descSpain = describeCountry("Spain", 47, "Madrid");
const descBangladesh = describeCountry("Bangladesh", 170, "Dhaka");

console.log(descFinland);
console.log(descSpain);
console.log(descBangladesh);
*/



// Assignment - Function declarations vs. expressions

// Function declaration
function percentageOfWorld1(country, population) {
    const calcPercentage = ((population / 7900) * 100).toFixed(1);
    return `${country} has ${population} million people, so it's about ${calcPercentage}% of the world population.`;
}

const descChina = percentageOfWorld1("China", 1441);
console.log(descChina);
const descBangladesh = percentageOfWorld1("Bangladesh", 170);
console.log(descBangladesh);
const descIndia = percentageOfWorld1("India", 1408);
console.log(descIndia);

// Function expression
const percentageOfWorld2 = function (country, population) {
    const calcPercentage = ((population / 7900) * 100).toFixed(1);
    return `${country} has ${population} million people, so it's about ${calcPercentage}% of the world population.`;
}

const descChina2 = percentageOfWorld2("China", 1441);
console.log(descChina2);
const descBangladesh2 = percentageOfWorld2("Bangladesh", 170);
console.log(descBangladesh2);
const descIndia2 = percentageOfWorld2("India", 1408);
console.log(descIndia2);