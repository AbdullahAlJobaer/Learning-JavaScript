/*
// 32 - Activating strict mode

"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = "7001";
// const if = "how";
*/



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
