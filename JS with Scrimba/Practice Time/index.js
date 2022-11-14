/*
//S4L1 Objects and functions

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name: "Jobaer",
    age: 27,
    country: "Bangladesh"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}

logData()

*/

//S4L2 if else

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable


let age = 20

if (age < 6) {
    console.log("Free!");
} else if (age < 18) {
    console.log("Child discount!");
} else if (age < 27) {
    console.log("Student discount");
} else if (age < 67) {
    console.log("Full price!");
} else {
    console.log("Senior citizen discount!");
}