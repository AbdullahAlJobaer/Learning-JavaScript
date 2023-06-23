"use strict";

//////////////////////////////////////////////////
/////////// CODEWARS CHALLENGES //////////////////
//////////////////////////////////////////////////

/*
CHALLENGE: Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the
results together.

For example, for [1, 2, 2] it should return 9
*/
/*
function squareSum(numbers) {
    let sumOfSqares = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumOfSqares += numbers[i] ** 2;
    } return sumOfSqares;
}
console.log(squareSum([1, 2, 2]));
*/


/*
CHALLENGE: Convert number to reversed array of digits

Convert number to reversed array of digits.
Given a random non-negative number, you have to return the digits of this number within an array
in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

// Sub-problems:
// 1) Transform the numbers into an array
// 1) Reverse the number using for loop
// 2) Push the reversed numbers in an empty array
/*
function digitize(n) {
    let number = Array.from(String(n), Number);
    let result = [];

    for (let i = number.length - 1; i >= 0; i--) {
        result.push(number[i]);
    }

    return result;
}

console.log(digitize(321));
*/



/*
CHALLENGE: Returning Strings
Make a function that will return a greeting statement that uses an input; your program should return, 
"Hello, <name> how are you doing today?".
*/
/*
function greet(name) {
    return `Hello, ${name} how are you doing today?`
}

console.log(greet("<name>"));
*/




/*
CHALLENGE: Convert a string to an array

Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/
/*
function stringToArray(string) {
    let myString = string.split(" ")
    return myString;
}

console.log(stringToArray("I love arrays they are my favorite"));
*/