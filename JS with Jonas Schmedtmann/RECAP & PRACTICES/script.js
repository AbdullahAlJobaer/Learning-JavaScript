"use strict";

/*
CHALLENGE #1 (CE #1)

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using 
the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

1. Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

2. Calculate both their BMIs using the formula, and store the results in two variables called BMIMark 
and BMIJohn.

3. Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a 
higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);
*/



/*
CHALLENGE #2 (CE #2)

Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is 
higher than Mark's (27)!".

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}
*/



/*
CHALLENGE #3 (CE #3)

There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. 
The winner with the highest average score wins a trophy!

YOUR TASKS:

1. Calculate the average score for each team, using the test data included below. 
The average score for Dolphins should be assigned to the scoreDolphins variable, and the average 
score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/



/*
CHALLENGE #3

There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times.
The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score 
for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas 
should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/
/*
const dolphinesScore1 = 96;
const dolphinesScore2 = 108;
const dolphinesScore3 = 89;
const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;

const scoreDolphins = (dolphinesScore1 + dolphinesScore2 + dolphinesScore3) / 3;
const scoreKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreKoalas) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}
*/


/*
CHALLENGE #4

Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, 
it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

YOUR TASKS:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed 
to use an if...else statement (if it's easier for you, you can start with an if...else statement, 
and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430
*/