"use strict";

/*
CODING EXERCISE 1

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
CODING EXERCISE 2

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
CODING EXERCISE 3

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
CODING EXERCISE 4

Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country,
it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

YOUR TASKS:

1. Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed
to use an if...else statement (if it's easier for you, you can start with an if...else statement,
and then try to convert it to a ternary operator).

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430
*/
/*
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const final = tip + bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${final}`);
*/



/*
CODING EXERCISE #5

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline,
which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score
per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

YOUR TASKS:
1. Create an arrow function calcAverage to calculate the average of 3 scores. This function should have
three parameters and return a single number (the average score).

2. Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the
calcAverage function to them (you will need to call this function, and pass scores as arguments).

3. Create a function checkWinner that takes the average score of each team as parameters
(avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points,
according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead
of hard-coded values).

4. Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

5. Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins!");
    }
}

checkWinner(scoreDolphins, scoreKoalas);
*/
