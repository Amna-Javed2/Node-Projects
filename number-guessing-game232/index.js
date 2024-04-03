#! /usr/bin/env node
import inquirer from "inquirer";
// 1-compter will generate a random number
// 2-user input for guessing number
// 3-compare user input with computer gentating number and show resulte
const randomNumber = Math.floor(Math.random() * 4 + 1);
// console.log(randomNumber); // random number that generate  by the computer 
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-4:"
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you guess right number.");
}
else {
    console.log("You guess wrong number.");
}

