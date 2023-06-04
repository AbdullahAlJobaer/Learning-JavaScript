"use strict";
/*
// 32 - Activating strict mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = "7001";
// const if = "how";




// 33 - Functions

function logger() {
    console.log("My name is Robin");
}

logger();   // Calling, running, or invoking function


function fruitProcessor(oranges, apples) {
    const juice = `Juice made with ${oranges} oranges and ${apples} apples`;
    return juice;
}

const appleJuice = fruitProcessor(0, 2);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



// 34 - Function Declarations vs Expressions

// Function declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(1995);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(1997);
console.log(age1, age2);




// 35 - Arrow functions

// Function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const calcAge4 = birthYear => 2023 - birthYear;
const age4 = calcAge4(1997);
console.log(age4);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

const leftRetirement = yearsUntilRetirement(1995, "Robin");
console.log(leftRetirement);




// 36 - Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(oranges, apples) {
    const orangePieces = cutFruitPieces(oranges);
    const applePieces = cutFruitPieces(apples);
    const juice = `Juice made with ${orangePieces} pieces of oranges and ${applePieces} pieces of apples`;
    return juice;
}

const finalJuice = fruitProcessor(2, 3);
console.log(finalJuice);




// 37 - Reviewing functions

const calcAge = function (year) {
    return 2023 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired ${retirement * -1} years ago.`;
    }

}

const retiresRobin = yearsUntilRetirement(1997, "Robin");
console.log(retiresRobin);
const retiresRite = yearsUntilRetirement(1955, "Rite");
console.log(retiresRite);
*/



//////////////////////////////////////////
/// 38 - CODING CHALLENGE #1 ////////////

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

YOUR TASKS:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"

4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2

5. Ignore draws this time

TEST DATA:
§ DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test Data 1
const dolphinsTD1 = calcAverage(44, 23, 71);
const KoalasTD1 = calcAverage(65, 54, 49);

// Test Data 2
const dolphinsTD2 = calcAverage(85, 54, 41);
const KoalasTD2 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return `No team wins 🥱`;
    }
}

console.log("For test data 1:\n\n", checkWinner(dolphinsTD1, KoalasTD1));
console.log("For test data 2:\n\n", checkWinner(dolphinsTD2, KoalasTD2));




// 39 - Introduction to arrays

const friends = ["Robin", "Shihab", "Oshim"];
console.log(friends);

const friends2 = new Array("Robin", "Shihab", "Oshim");
console.log(friends2);

console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Limon";    // All primitive values are immutable, array isn't primitive value 
console.log(friends);

const firstName = "Robin";
const robin = [firstName, "Jobaer", "Web Dev", 2023 - 1995, friends];
console.log(robin);
console.log(robin.length);


// EXERCISE
const calcAge = function (birthYear) {
    return `Age: ${2023 - birthYear}`;
}

const years = [1995, 1996, 1997, 2001];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);

console.log(age1, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(ages);
*/



// 35 - Basic array operations (Methods)

// push() - add elements at the end
const friends = ["Robin", "Shihab", "Oshim"];
const friendsLength = friends.push("Siam");     // push() returns the length of a new array
console.log(friends);
console.log(friendsLength);

// unshift() - add elements at the start
friends.unshift("Limon");
console.log(friends);

// Remove elements
const poppedSiam = friends.pop();      // removes last element
console.log(friends);
console.log(poppedSiam);
const poppedOshim = friends.pop();
console.log(friends);
console.log(poppedOshim);

const poppedLimon = friends.shift();   // removes first element
console.log(friends);
console.log(poppedLimon);

// indexOf() - to show the index numnber of an element
console.log(friends.indexOf("Shihab"));
console.log(friends.indexOf("Oshim"));
console.log(friends.indexOf("Apu"));

// includes() - shows boolean value if the element is present of not
console.log(friends.includes("Siam"));
console.log(friends.includes("Robin"));
friends.push(21);
console.log(friends.includes("21"));    // false, because includes() doesn't do type coercion
console.log(friends.includes(21));      // true


if (friends.includes("Apu")) {
    console.log("Yes, you have a friend called Apu");
} else {
    console.log("Friend called Apu not found!");
}