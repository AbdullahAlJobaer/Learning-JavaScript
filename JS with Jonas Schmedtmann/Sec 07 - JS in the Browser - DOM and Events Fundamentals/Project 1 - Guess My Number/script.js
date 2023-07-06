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
/*
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
*/



/////////////////////////////////////////////////////////
////////////// 76 - Coding Challenge #1 /////////////////

/*
Implement a game reset functionality, so that the player can make a new guess!

YOUR TASKS:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/

/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;     // Application state

document.querySelector(".check").addEventListener
    ("click", function () {
        const guess = Number(document.querySelector(".guess").value)

        console.log(guess, typeof guess);

        // When there is no input
        if (!guess) {
            document.querySelector(".message").textContent = "⛔ No Number";

            // When player wins
        } else if (guess === secretNumber) {
            document.querySelector(".number").textContent = secretNumber;
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

document.querySelector(".again").addEventListener
    ("click", function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        document.querySelector(".score").textContent = score;
        document.querySelector(".number").textContent = "?";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
        document.querySelector("body").style.transition = "background-color 400ms, width 400ms";
        document.querySelector(".message").textContent = "Start guessing...";
        document.querySelector(".guess").value = null;
    });
*/



// 77 - Implementing Highscores
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;     // Application state
let highScore = 0;

document.querySelector(".check").addEventListener
    ("click", function () {
        const guess = Number(document.querySelector(".guess").value)

        console.log(guess, typeof guess);

        // When there is no input
        if (!guess) {
            document.querySelector(".message").textContent = "⛔ No Number";

            // When player wins
        } else if (guess === secretNumber) {
            document.querySelector(".number").textContent = secretNumber;
            document.querySelector(".message").textContent = "🎉 Correctly Guessed!";
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").style.transition = "width 500ms";

            if (score > highScore) {
                highScore = score;
                document.querySelector(".highscore").textContent = highScore;
            }


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

document.querySelector(".again").addEventListener
    ("click", function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        document.querySelector(".score").textContent = score;
        document.querySelector(".number").textContent = "?";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
        document.querySelector("body").style.transition = "background-color 400ms, width 400ms";
        document.querySelector(".message").textContent = "Start guessing...";
        document.querySelector(".guess").value = null;
    });
*/



// 78 - Refactoring Our Code: The DRY Principle
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;     // Application state
let highScore = 0;  // Application state

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

function displayScore(setScore) {
    document.querySelector(".score").textContent = setScore;
}

document.querySelector(".check").addEventListener
    ("click", function () {
        const guess = Number(document.querySelector(".guess").value)

        console.log(guess, typeof guess);

        // When there is no input
        if (!guess) {
            displayMessage("⛔ No Number");
            //document.querySelector(".message").textContent = "⛔ No Number";

            // When player wins
        } else if (guess === secretNumber) {
            document.querySelector(".number").textContent = secretNumber;
            displayMessage("🎉 Correctly Guessed!");
            //document.querySelector(".message").textContent = "🎉 Correctly Guessed!";
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").style.transition = "width 500ms";

            if (score > highScore) {
                highScore = score;
                document.querySelector(".highscore").textContent = highScore;
            }


            // When guess is wrong
        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
                //document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
                score--;
                displayScore(score);
                //document.querySelector(".score").textContent = score;
            } else {
                displayMessage("❌ You Lost the Game!");
                //document.querySelector(".message").textContent = "❌ You Lost the Game!";
                displayScore(0);
                //document.querySelector(".score").textContent = 0;
            }
        }
    });

document.querySelector(".again").addEventListener
    ("click", function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        displayScore(score);
        //document.querySelector(".score").textContent = score;
        document.querySelector(".number").textContent = "?";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
        document.querySelector("body").style.transition = "background-color 400ms, width 400ms";
        displayMessage("Start guessing...");
        //document.querySelector(".message").textContent = "Start guessing...";
        document.querySelector(".guess").value = null;
    });
*/



// Final Refactored Code version 1.0

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;     // Application state
let highScore = 0;  // Application state

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

function displayScore(setScore) {
    document.querySelector(".score").textContent = setScore;
}

document.querySelector(".check").addEventListener
    ("click", function () {
        const guess = Number(document.querySelector(".guess").value)

        console.log(guess, typeof guess);

        // When there is no input
        if (!guess) {
            displayMessage("⛔ No Number");

            // When player wins
        } else if (guess === secretNumber) {
            document.querySelector(".number").textContent = secretNumber;
            displayMessage("🎉 Correctly Guessed!");
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").style.transition = "width 500ms";

            if (score > highScore) {
                highScore = score;
                document.querySelector(".highscore").textContent = highScore;
            }


            // When guess is wrong
        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
                score--;
                displayScore(score);
            } else {
                displayMessage("❌ You Lost the Game!");
                displayScore(0);
            }
        }
    });

document.querySelector(".again").addEventListener
    ("click", function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        displayScore(score);
        document.querySelector(".number").textContent = "?";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
        document.querySelector("body").style.transition = "background-color 400ms, width 400ms";
        displayMessage("Start guessing...");
        document.querySelector(".guess").value = null;
    });