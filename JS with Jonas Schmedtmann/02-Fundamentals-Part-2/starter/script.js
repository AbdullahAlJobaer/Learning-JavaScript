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
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsFinal = calcAverage(85, 54, 41);
const KoalasFinal = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return `No team wins`;
    }
}

console.log(checkWinner(dolphinsFinal, KoalasFinal));


// dolphinResult > koalasResult * 2


