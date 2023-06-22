// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// 58 - How to think like a developer: Become a problem solver

// PROBLEM EXAMPLE:
// Project Manager: We need a function that reverses whatever we pass into it.

/*

///////////////////// NOT DONE!!! ////////////////////////

function reverses(value) {
    if (typeof value === (!"string" || !"number" || !"array")) {
        return value;
    } else if (typeof value === "string") {
        let newString = "";
        for (let i = value.length - 1; i >= 0; i--) {
            newString += value[i];
        }
        return newString;
    } else if (typeof value === Number) {
        let newNumber;
        for (let i = value.length - 1; i >= 0; i--) {
            newNumber += value[i];
        }
        return newNumber;
    } else if (typeof value === "array") {
        let newArray = [];
        for (let i = value.length - 1; i >= 0; i--) {
            newArray += value[i];
        }
        return newArray;
    }
}

const inputValue = prompt("Type your value:");

console.log(reverses(inputValue));
console.log(typeof (reverses(inputValue)));

*/
/*
///////////////////////////////////////
// 59 - Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this:
"Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind
that sometimes there might be a sensor error."
*/

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Ans: Difference between highest and lowest temp
// - How to compute max and min temp?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

/*
// Calculating the max and min value
function calcTempAmplitude(temps) {

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const currTemp = temps[i];

        if (typeof currTemp !== "number") continue;

        if (currTemp > max) max = currTemp;
        if (currTemp < min) min = currTemp;
    }

    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);
    return max - min;
}

console.log(calcTempAmplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays.

// 2) Breaking up into sub-problems
// - Merge 2 arrays

function calcTempAmplitudeNew(t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const currTemp = temps[i];

        if (typeof currTemp !== "number") continue;

        if (currTemp > max) max = currTemp;
        if (currTemp < min) min = currTemp;
    }

    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);
    return max - min;
}

console.log(calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]));
*/



///////////////////////////////////////
// 61 - Debugging with the console and breakpoints
/*
const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",
        // C) FIX
        //value: Number(prompt("Degree celsius:"))
        value: 10
    };

    // B) FIND
    console.table(measurement);

    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}

// A) IDENTIFY
console.log(measureKelvin());




// Using a debugger
function calcTempAmplitudeBug(t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = 0;
    let min = 0;

    for (let i = 0; i < temps.length; i++) {
        const currTemp = temps[i];

        if (typeof currTemp !== "number") continue;

        if (currTemp > max) max = currTemp;
        if (currTemp < min) min = currTemp;
    }

    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);
    return max - min;
}

// A) IDENTIFY
console.log(calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]));
*/




//////////////////////////////////////////
/// 62 - CODING CHALLENGE #1 ////////////
/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. 

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

YOUR TASKS:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

TEST DATA:
§ DATA 1: [17, 21, 23]
§ DATA 2: [12, 5, -5, 0, 4]
*/

// USING THE PROBLEM SOLVING FRAMEWORK:
// 1) Understanding the problem
// - How many loops will run under the function? Ans: 1
// - How to return all loop results in a same string? Ans: Build a string then log it after loop.

// 2) Breaking up into sub-problems
// - There is only 1 for loop.
// - The value we are getting from each iteration will be stored in the same string
// - How to show the days' numbers

function printForecast(arr) {
    let thermoDisplay = "... ";

    for (let i = 0; i < arr.length; i++) {
        thermoDisplay += `${arr[i]}°C in ${i + 1} days ... `
    } return thermoDisplay;
}

console.log(printForecast([17, 21, 23]));