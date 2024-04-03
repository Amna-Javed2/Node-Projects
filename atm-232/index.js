#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 1000; // rupees
let myPin = 232;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
    let actionAns = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "What do you want to do?",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(actionAns);
    if (actionAns.action === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is:" + myBalance);
    }
    else if (actionAns.action === "check balance") {
        console.log("your balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect pin code");
}
