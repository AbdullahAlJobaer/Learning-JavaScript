/*
//S3L34 Returning values in functions

let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if ( player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

//let fastestRace = getFastestRaceTime()
//console.log(fastestRace);

function getTotalRaceTime() {
    return player1Time + player2Time
}

let sumRaceTime = getTotalRaceTime()

console.log(sumRaceTime);
*/

/*
//S3L36 Generating random numbers with Math.random()

let randomNumber = Math.random()

console.log(randomNumber)

/*

What does Matg.random() do?

Answer: It generates random decimal number between 0 to 1 (not inclusive of 1)

*/
/*
//S3L37 Math.random() *6

let randomNumber = Math.random() * 6

console.log(randomNumber);

/*

In which range will our randomNumber be now?

From: 0.00
To: 5.99

Math.random() : 0.000 - 0.999
Math.random()*6 : 0.000 - 5.999

*/

/*
//S3L38 Flooring the number with Math.random()

let flooredNumber = Math.floor(12.99)

console.log(flooredNumber);

/*

What does Math.floor() do to positive numbers?

Answer: It removes the decimals

*/

/*
//S3L39 Using Math.random() and Math.floor() to create a dice

let randomNumber = Math.floor(Math.random() * 6)

console.log(randomNumber);

/*

Write down all the possible values random number can hold now!

Ans: 0, 1, 2, 3, 4, 5

Math.random() : 0.000 - 0.999
Math.random()*6 : 0.000 - 5.999
Math.floor(Math.random() * 6) : 0 - 5

*/

/*
//S3L40 Completing our dice function

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}

let rollTheDice = rollDice()

console.log(rollTheDice);
*/
/*
//S3L45 The logical AND operator

let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true ) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....");
}
*/

/*
//S3L46 Write your first logical operator

let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....");
}
*/
/*
//S3L47 The logical OR operator

let likesDocumentaries = true
let likesStartups = true

if (likesDocumentaries === true || likesStartups === false) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!");
}
*/
/*
//S3L50 Intro to objects

let course = {
    title: "Learn CSS Grid for free!",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log(course.lessons);
*/

//S3L51 Create your first object

// Create an object that represents an airbnb castle listing
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
    title: "Live like a king in my castle",
    isAvailable: true,
    price: 190,
    roomDetail: ["4 guests", "1 bedroom", "2 beds"]

}

console.log(castle.title);
console.log(castle.price);