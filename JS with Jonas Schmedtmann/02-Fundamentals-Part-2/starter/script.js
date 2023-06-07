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
*/



//////////////////////////////////////////
///////// CODING CHALLENGE #2 ////////////

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

YOUR TASKS:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

TEST DATA: 125, 555 and 44


function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(bills, tips, total);




// 36 - Introduction to Objects

const robinArray = [
    "Robin",
    "Jobaer",
    2023 - 1995,
    "Web Developer",
    ["Robin", "Shihab", "Oshim"]
];

console.log(robinArray);

const robinObject = {
    firstName: "Robin",
    lastName: "Jobaer",
    age: 2023 - 1995,
    job: "Web Developer",
    friends: ["Robin", "Shihab", "Oshim"]
};

console.log(robinObject.friends);




// 37 - Dot vs Bracket Notation

const robinObject = {
    firstName: "Robin",
    lastName: "Jobaer",
    age: 2023 - 1995,
    job: "Web Developer",
    friends: ["Goku", "Shihab", "Oshim"]
};

const namekey = "Name";

// Dot notation
console.log(robinObject.lastName);

// Bracket notation
console.log(robinObject["lastName"]);
console.log(robinObject["last" + namekey]);

const interestedIn = prompt("What do you want to know about Robin? Choose between firstName, lastName, age, job, friends");

if (robinObject[interestedIn]) {
    console.log(robinObject[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, friends");
}

robinObject.location = "Bangladesh";
robinObject["twitter"] = "@RobJobaer";
console.log(robinObject);

// CHALLENGE
// "Robin has 3 friends, and his best friend is called Goku"

console.log(`${robinObject.firstName} has ${robinObject.friends.length} friends, and his best friend is called ${robinObject.friends[0]}`);




// 38 - Object methods

const robin = {
    firstName: "Robin",
    lastName: "Jobaer",
    birthYear: 1995,
    job: "web developer",
    friends: ["Goku", "Shihab", "Oshim"],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }

    // calcAge: function () {
    //     return 2023 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
    }
};

// console.log(robin.calcAge(1995));
// console.log(robin.calcAge(robin.birthYear));
// console.log(robin["calcAge"](1995));

console.log(robin.calcAge());

console.log(robin.age);


// CHALLENGE
// "Robin is a 46-year old teacher, and he has a/no driver's license"

console.log(robin.getSummary());
*/



//////////////////////////////////////////
///////// CODING CHALLENGE #3 ////////////

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

YOUR TASKS:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.


const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2).toFixed(1);
        return this.bmi;
    }
}
const john = {
    fullName: "John Smith",
    mass: 111,
    height: 1.95,

    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2).toFixed(1);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();

//console.log(`${john.fullName}'s BMI (${john.bmi}) is ${john.bmi > mark.bmi ? "higher" : "lower"} than ${mark.fullName}'s (${mark.bmi})!`);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is as same as ${john.fullName}'s BMI (${john.bmi})`);
}




// 46 - Iteration: the for loop

// for loop keeps running while the condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/



// 47 - Looping arrays, breaking and continuing

const robinArray = [
    "Robin",
    "Jobaer",
    2023 - 1995,
    "Web Developer",
    ["Robin", "Shihab", "Oshim"]
];

const types = [];

for (let i = 0; i < robinArray.length; i++) {
    // Reading from robinArray
    console.log(robinArray[i], typeof robinArray[i]);

    // Filling types array
    // types[i] = typeof robinArray[i];
    types.push(typeof robinArray[i]);   // appropriate method
}

console.log(types);

const years = [1995, 1989, 1996, 1997];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}

console.log(ages);

// CONTINUE statement
console.log("--- ONLY STRINGS ----");

for (let i = 0; i < robinArray.length; i++) {
    if (typeof robinArray[i] !== "string") {
        continue;
    }
    console.log(robinArray[i], typeof robinArray[i]);
}

// BREAK statement
console.log("--- breaks with number ----");

for (let i = 0; i < robinArray.length; i++) {
    if (typeof robinArray[i] === 'number') {
        break;
    }
    console.log(robinArray[i], typeof robinArray[i]);
}