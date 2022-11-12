/*
//S3L27 Counting in JavaScript

for (let count = 10; count < 21; count +=1) {
    
    console.log(count);

}
*/
/*
//S3L28 Write your first loop

// Create a for loop that counts 10 to 100 in steps of 10
// Use console.log to log out the numbers

for (let i = 10; i < 101; i +=10) {
    console.log(i);  
}
*/
/*
//S3L29 For loops and arrays

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "Thanks"
]

for(i = 0; i < messages.length; i += 1) {
    console.log(messages[i]);
}
*/

/*
//S3L30 Write your first array-based loop

let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for(let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
}
*/

//S3L31 For loops, arrays and DOM

/*
let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i]
}
*/

//S3L31 For loops, arrays and DOM (Part 2)

// How do you kepp the spaces between the words if I remove them from the array?
let sentence = ["Hello", "my", "name", "is", "Per"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}