'use strict';

// 70 - Project: Guess my number intro
/*
console.log(document.querySelector(".message").textContent);
*/



// 72 - Selecting and Manipulating Elements
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "😎 Correct Number!";

console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 10;
document.querySelector(".score").textContent = 5;

document.querySelector(".guess").value = 10;
console.log(document.querySelector(".guess").value);
*/



// 73 - Handling Click Events
/*
document.querySelector(".check").addEventListener
    ("click", function () {
        const guess = Number(document.querySelector(".guess").value)

        console.log(guess, typeof guess);

        if (!guess) {
            document.querySelector(".message").textContent = "No Number ⛔";
        }
    });
*/



// 74 - Implementing the Game Logic
/*
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;     // Application state

document.querySelector(".number").textContent = secretNumber;


document.querySelector(".check").addEventListener
    ("click", function () {
        const guess = Number(document.querySelector(".guess").value)

        console.log(guess, typeof guess);

        if (!guess) {
            document.querySelector(".message").textContent = "⛔ No Number";
        } else if (guess === secretNumber) {
            document.querySelector(".message").textContent = "🎉 Correctly Guessed!";
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector(".message").textContent = "📈 Too High!";
                score--;
                document.querySelector(".score").textContent = score;
            } else {
                document.querySelector(".message").textContent = "❌ You Lost the Game!";
                document.querySelector(".score").textContent = 0;
            }
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector(".message").textContent = "📉 Too Low!";
                score--;
                document.querySelector(".score").textContent = score;
            } else {
                document.querySelector(".message").textContent = "❌ You Lost the Game!";
                document.querySelector(".score").textContent = 0;
            }
        }
    });
*/



// 75 - Manipulating CSS Styles

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;     // Application state

document.querySelector(".number").textContent = secretNumber;


document.querySelector(".check").addEventListener
    ("click", function () {
        const guess = Number(document.querySelector(".guess").value)

        console.log(guess, typeof guess);

        // When there is no input
        if (!guess) {
            document.querySelector(".message").textContent = "⛔ No Number";

            // When player wins
        } else if (guess === secretNumber) {
            document.querySelector(".message").textContent = "🎉 Correctly Guessed!";
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").style.transition = "width 500ms";

            // When guess is too high
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector(".message").textContent = "📈 Too High!";
                score--;
                document.querySelector(".score").textContent = score;
            } else {
                document.querySelector(".message").textContent = "❌ You Lost the Game!";
                document.querySelector(".score").textContent = 0;
            }

            // When guess is too low
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector(".message").textContent = "📉 Too Low!";
                score--;
                document.querySelector(".score").textContent = score;
            } else {
                document.querySelector(".message").textContent = "❌ You Lost the Game!";
                document.querySelector(".score").textContent = 0;
            }
        }
    });