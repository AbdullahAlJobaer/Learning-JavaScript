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




// Assignment - Function declarations vs. expressions (34)

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




// Assignment - Arrow functions (35)

const percentageOfWorld3 = (country, population) => {
    const calcPercentage = ((population / 7900) * 100).toFixed(1);
    return `${country} has ${population} million people, so it's about ${calcPercentage}% of world population.`;
}

const descChina3 = percentageOfWorld3("China", 1441);
console.log(descChina3);
const descBangladesh3 = percentageOfWorld3("Bangladesh", 170);
console.log(descBangladesh3);
const descIndia3 = percentageOfWorld3("India", 1408);
console.log(descIndia3);
*/



/*
// Assignment - Functions Calling Other Functions (36)

function percentageOfWorld1(population) {
    return ((population / 7900) * 100).toFixed(1);
}

function describePopulation(country, population) {
    const calcPercentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${calcPercentage}% of the world.`;
}

console.log(describePopulation("China", 1441));
console.log(describePopulation("Bangladesh", 170));
console.log(describePopulation("India", 1408));




// Assignment - Introduction to arrays (39)

const populations = [170, 1441, 1408, 47];
console.log("The array has 4 elements?", populations.length === 4);

function percentageOfWorld1(population) {
    return ((population / 7900) * 100).toFixed(1);
}

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);




// Assignment - Basic array operations (Methods) (35)

const neighbours = ["India", "Pakistan", "Srilanka"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
}

neighbours[(neighbours.indexOf("Pakistan"))] = "Republic of Pakistan";
console.log(neighbours);




// Assignment - Introduction to Objects (36)

const myCountry = {
    country: "Bangladesh",
    capital: "Dhaka",
    language: "Bengali",
    population: 170,
    neighbours: ["India", "Pakistan", "Srilanka"]
};

console.log(myCountry);



// Assignment - Dot vs Bracket Notation (37)

const myCountry = {
    country: "Bangladesh",
    capital: "Dhaka",
    language: "Bengali",
    population: 170,
    neighbours: ["India", "Pakistan", "Srilanka"]
};


console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry["population"]);




// Assignment - Object methods (38)

const myCountry = {
    country: "Bangladesh",
    capital: "Dhaka",
    language: "Bengali",
    population: 170,
    neighbours: ["India", "Pakistan", "Srilanka"],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
};

myCountry.describe();
console.log(myCountry.checkIsland());
//console.log(myCountry.isIsland);
*/



// Assignment - Iteration: the for loop (46)
/*
There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/

for (let number = 1; number <= 50; number++) {
    console.log(`Voter number ${number} is currently voting.`);
}