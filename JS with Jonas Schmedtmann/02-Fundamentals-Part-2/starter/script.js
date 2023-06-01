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
*/



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