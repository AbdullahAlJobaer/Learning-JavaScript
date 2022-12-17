/*
//S4L1 Objects and functions

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name: "Jobaer",
    age: 27,
    country: "Bangladesh"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}

logData()

*/
/*

//S4L2 if else

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable


let age = 20

if (age < 6) {
    console.log("Free!");
} else if (age < 18) {
    console.log("Child discount!");
} else if (age < 27) {
    console.log("Student discount");
} else if (age < 67) {
    console.log("Full price!");
} else {
    console.log("Senior citizen discount!");
}

*/

/*
//S4L3 Loops and arrays
/* 
Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan


let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

console.log("The 5 largest countries in the world:");

for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i]);
}
*/

/*
//S4L4 Push, pop, unshift, shift challange

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountries.shift()

largeCountries.unshift("China")

largeCountries.pop("Monaco")

largeCountries.push("Pakistan")

console.log(largeCountries);
*/
/*

//S4L5 Logical Operators

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

let dayOfMonth = 13
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱");
}

//S4L6 Rock papers scissors

let hands = ["Rock", "Paper", "Scissor"]

function getHand() {
    let random = Math.floor(Math.random()*hands.length)
    return hands[random]
}

console.log(getHand());
*/
/*
//S6L1 let and const

// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes
*/

//S6L2 Log out items in an array

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function showCourse(arr) {
    for (let i = 0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}

showCourse(myCourses)