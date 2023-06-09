"use strict";

// Assignment - Functions (33)
/*
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console


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

1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)


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

1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'


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

1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice


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

1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values


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

1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.


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

1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)


const myCountry = {
    country: "Bangladesh",
    capital: "Dhaka",
    language: "Bengali",
    population: 170,
    neighbours: ["India", "Pakistan", "Srilanka"]
};

console.log(myCountry);



// Assignment - Dot vs Bracket Notation (37)

1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.


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

1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.


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



// Assignment - Iteration: the for loop (46)

1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'


for (let number = 1; number <= 50; number++) {
    console.log(`Voter number ${number} is currently voting.`);
}



// Assignment - Looping Arrays, Breaking and Continuing (47)

1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is


const populations = [170, 1441, 1408, 47];
const percentages2 = [];

function percentageOfWorld1(population) {
    return ((population / 7900) * 100).toFixed(1);
}

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);




// Assignment - Looping backwards and loops in loops (48)

1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway 😉


const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

//console.log(listOfNeighbours[0][0]);

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}




// Assignment - The while loop (49)

1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?


const populations = [170, 1441, 1408, 47];
const percentages3 = [];

function percentageOfWorld1(population) {
    return ((population / 7900) * 100).toFixed(1);
}

let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}

console.log(percentages3);
*/