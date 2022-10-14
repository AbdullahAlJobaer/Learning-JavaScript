/*
//S2L2 Variable practice

let firstName = "Abdullah"
let lastName = "Jobaer"
let fullName = firstName + " " + lastName

console.log(fullName);
*/

/*
//S2L2 Concatenate two strings in a function

let name  = "Linda"
let greeting = "Hi there"

function myGreeting() {
    console.log(greeting + ", " + name + "!");
}

myGreeting()
*/

//S2L3 Incrementing and decrementing

let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log(myPoints);