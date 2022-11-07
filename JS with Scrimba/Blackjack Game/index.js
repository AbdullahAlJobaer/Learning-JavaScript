/*
//S3L2 Add the firstCard, secondCard, and sum

let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

console.log(sum);
*/

//S3L3 if...else conditionals

let firstCard = 15
let secondCard = 6
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack!");
} else {
    console.log("You're out of the game!");
}