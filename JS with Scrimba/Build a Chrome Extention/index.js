/*
//S5L5 Refactor to addEventListener

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    console.log("Button Clicked!");
})
*/

/*
//S5L7 Your turn to refactor

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    console.log("Button Clicked!");
})

*/

/*
//S5L8 Create the myLeads array and inputEl

// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    console.log("Button Clicked!");
})
*/


//S5L10 Push to the myLeads array

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    myLeads.push("www.awesomelead.com");
    console.log(myLeads);
})