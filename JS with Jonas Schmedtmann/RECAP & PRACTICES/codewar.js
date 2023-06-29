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




/*
CHALLENGE: Beginner - Reduce but Grow

Given a non-empty array of integers, return the result of multiplying the values together in order.
Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
/*
function grow(x) {
    let result = 1;

    for (let i = 0; i < x.length; i++) {
        result *= x[i];
    } return result;
}

const final = grow([1, 2, 3, 4]);
console.log(final);
*/


/*
CHALLENGE: A Needle in the Haystack

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output):
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
*/
/*
function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return `found the needle at position ${i}`;
        }
    }
}

const junksInput = findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);
console.log(junksInput);
*/



/*
CHALLENGE: Count by X

Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples:
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/
/*
function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

const count = countBy(2, 5);
console.log(count);
*/



/*
CHALLENGE: DNA to RNA Conversion

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is
composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its
chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid
Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:
"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed
to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/
/*
function DNAtoRNA(dna) {
    let rna = dna.replaceAll("T", "U");
    return rna;
}

console.log(DNAtoRNA("GCAT"));
*/



/*
CHALLENGE: Convert a Boolean to a String

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/
/*
function booleanToString(b) {
    if (b === true) {
        return `true`;
    } else if (b === false) {
        return `false`;
    } else {
        return `Invalid input`;
    }
}

const result = booleanToString(true);

console.log(result);
*/



/*
CHALLENGE: Rock Paper Scissors

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/
/*
// const rps = (p1, p2) => {
//     if (p1 === "scissors" && p2 === "paper") {
//         return "Player 1 won!";
//     } else if (p1 === "paper" && p2 === "scissors") {
//         return "Player 2 won!"
//     } else if (p1 === "scissors" && p2 === "rock") {
//         return "Player 2 won!";
//     } else if (p1 === "rock" && p2 === "scissors") {
//         return "Player 1 won!";
//     } else if (p1 === "paper" && p2 === "rock") {
//         return "Player 1 won!";
//     } else if (p1 === "rock" && p2 === "paper") {
//         return "Player 2 won!"
//     } else if (p1 === p2) {
//         return "Draw!";
//     }
// };

const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (p2 === rules[p1]) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
};

const result = rps("rock", "paper");
console.log(result);
*/


/*
CHALLENGE: L1: Set Alarm

Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives 
two parameters. The first parameter, employed, is true whenever you are employed and the second 
parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the 
circumstances under which you need to set an alarm). It should return false otherwise. 

Examples:
employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false
*/