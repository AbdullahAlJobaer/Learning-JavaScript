/*
//S3L2 Add the firstCard, secondCard, and sum

let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

console.log(sum);
*/
/*
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
*/

/*
//S3L4 Your first if...else statement

let age = 20

if (age < 21) {
    console.log("You can not enter the club!");
} else {
    console.log("Welocome!");
}
*/

/*
//S3L5 if/else... if/else statement

let age = 101

if (age < 100) {
    console.log("Not eligible!");
} else if (age === 100) {
    console.log("Here is your birthday card from the King!");
} else {
    console.log("Not eligible, you've already gotten one!");
}
*/

/*
//S3L6 The if...else statement for our game

let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard

if (sum <= 20) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("Woohoo! You've got Blackjack!");
} else {
    console.log("You're out of the game!");
}
*/

/*
//S3L7 Add the hasBlackJack variable

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false

if (sum <= 20) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("Woohoo! You've got Blackjack!");
    hasBlackJack = true
} else {
    console.log("You're out of the game!");
}

// CASH OUT!
console.log(hasBlackJack);
*/

/*
//S3L8 Add the isAlive varible

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("Woohoo! You've got Blackjack!");
    hasBlackJack = true
} else {
    console.log("You're out of the game!");
    isAlive = false
}

// CASH OUT!
console.log(hasBlackJack);
console.log(isAlive);
*/

/*
//S3:9 Let's practice boolean conditions

console.log(4 === 3);  // false
console.log(5 > 2);    // true
console.log(12 > 12);  // false
console.log(3 < 0);    // false
console.log(3 >= 3);   // true
console.log(11 <= 11); // true
console.log(3 <= 2);   // false
*/

/*
//S3L10 Add the message variable

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

 
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Woohoo! You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}

console.log(message);
*/


//S3L12 Add basic styling

/*
//S3L13 Make the start button work

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame() {  
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    console.log(message);
}
*/
/*
//S3L14 Display the message

let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

function startGame() {  
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
       
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}
*/

/*
//S3L15 Display the sum

let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")



function startGame() {  
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
       
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

*/

/*
//S3L16 Display the cards

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {  
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
       
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
}
*/

/*
//S3L17 New Card Button

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {  
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
       
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
}

function newCard() {
    console.log("Drawing a new card from the deck!");
}
*/

/*
//S3L18 Add to the sum when newCard is clicked

let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {  
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
       
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = 7
    sum += card

    startGame()
}
*/

/*
//S3L19 Rename the startGame function

let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {  
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
       
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = 7
    sum += card
    renderGame()
}
*/
/*
//S3L20 Solving our cards problem with an array

let firstCard = 10
let secondCard = 4
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {  
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
       
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = 7
    sum += card
    renderGame()
}
*/
/*
//S3L26 Push a new card to the array

let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {  
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
       
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = 6
    sum += card
    cards.push(card)
    console.log(cards);
    renderGame()
}
*/

//S3L32 Use a loop to render cards

let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
       
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = 6
    sum += card
    cards.push(card)
    console.log(cards);
    renderGame()
} 