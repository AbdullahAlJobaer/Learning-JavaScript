//document.getElementById("count-el").innerText = 5

// ctrl+k+c
// let firstBatch = 5
// let secondBatch = 7

// let count  = firstBatch + secondBatch

// console.log(count)

// let myAge = 35
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge);


// let count = 5

// count = count + 1

// console.log(count);


// let bonusPoints = 50
// console.log(bonusPoints);

// bonusPoints = bonusPoints * 2
// console.log(bonusPoints);

// bonusPoints = bonusPoints / 4
// console.log(bonusPoints);

// bonusPoints = bonusPoints * 3
// console.log(bonusPoints);

// function increment() {
//     console.log("The button was clicked!");
// }

// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(4);
//     console.log(2);
//     console.log(1);
// }

// countdown()
// countdown()


// function callNumber() {
//     console.log(42);
// }

// callNumber()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime);
// }

// logLapTime()

// let lapsCompleted = 0

// function incrementLap () {
//     lapsCompleted = lapsCompleted + 1

// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted);

// let countEl = document.getElementById("count-el")

// console.log(countEl);

// let count = 0;

// function increment() {
//     //console.log("Clicked!");
//     count = count + 1
//     countEl.innerText = count
//     //console.log(count);

// }

// let count = 0
// let countEl = document.getElementById("count-el")

// function increment() {
//     count = count + 1
//     countEl.innerText = count;
//     console.log(count);
// }

/*
let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    count = count + 1
    countEl.innerText = count;
    console.log(count);
}

function save(){
    console.log(count);
}
*/

/*
let userName = "per"
let message = "You have three new notifications"
let messageToUser = message + ", " + userName

//console.log(message + ", " + userName + "!");

console.log(messageToUser);
*/

/*
//S1L20 Log a greeting to the console (6 OCT)

let name = "Jobaer"
let greeting = "Hi, my name is "
let myGreeting = greeting + name

console.log(myGreeting);
*/

/*

//S1L21 Strings vs Numbers

let name = "Jobaer"
let greeting = "Hi, my name is "
let myGreeting = greeting + name

//console.log(myGreeting);

let points = 4
let bonusPoints = "10"

let totalPoints = points + bonusPoints

console.log(totalPoints);

console.log(4 + 5); // 9
console.log("2" + "4"); // "24"
console.log("5" + 1); // "51"
console.log(100 + "100"); // "100100"

*/

/*
//S1L24 Use plus equal for count

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    console.log(count);
}
*/

/*
//S1L25 Create the save feature

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    console.log(count);
}
*/

//S1L26 Debugging online

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count);
}