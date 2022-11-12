/*
//S3L21 Intro to Arrays
// Arrays - ordered lists of items

let featuredPosts = [
    "Check out my Netflix clone", 
    "Here's the code for my project", 
    "I've just relaunched my portfolio"
]

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

let myExperience = [
    "Ceo at Scrimba",
    "Frontend developer at Xeneta",
    "People counter for Norstat"
]

*/
/*
//S3L22 Array Indexes

let featuredPosts = [
    "Check out my Netflix clone", 
    "Here's the code for my project", 
    "I've just relaunched my portfolio"
]

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

let myExperience = [
    "Ceo at Scrimba",
    "Frontend developer at Xeneta",
    "People counter for Norstat"
]

console.log(myExperience[1]);
console.log(myExperience[2]);
console.log(myExperience[0]);
*/
/*
//S3L23 Arrays with multiple data types
// Array - ordered list of items - composite / complex data type

let myName = "Abdullah Al Jobaer"
let myAge = 27
let likePizza = true

let aboutMyself = [myName, myAge, likePizza]

console.log(aboutMyself);
*/

//S3L24 Adding and removing items from arrays

let cards = [7, 4]

cards.push(6)

console.log(cards);

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio latelty."
]

let newMessage = "Same here!"

messages.push(newMessage)

//console.log(messages);

// How can you remove the last item in an array? Try to google it!

messages.pop()
console.log(messages);