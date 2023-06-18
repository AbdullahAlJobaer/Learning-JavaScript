// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// 58 - How to think like a developer: Become a problem solver

// PROBLEM EXAMPLE:
// Project Manager: We need a function that reverses whatever we pass into it.


function reverses(value) {
    if (typeof value === (!"string" || !"number" || !"array")) {
        return value;
    } else if (typeof value === "string") {
        let newString = "";
        for (let i = value.length - 1; i >= 0; i--) {
            newString += value[i];
        }
        return newString;
    } else if (typeof value === "number") {
        let newNumber = "";
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