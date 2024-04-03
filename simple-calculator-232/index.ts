#! /usr/bin/env node  

import inquirer from "inquirer";  // inquirer = used to ask questions
const answer = await inquirer.prompt([
  {
    message: "Please enter firstNumber",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Please enter secondNumber",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division","Modulation"],
  },
]);
// conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
}else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
  }else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
  }else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
  }else if (answer.operator === "Modulation") {
  console.log(answer.firstNumber % answer.secondNumber);
}
 else{
    console.log("Please select valid Operator");
  }
  
