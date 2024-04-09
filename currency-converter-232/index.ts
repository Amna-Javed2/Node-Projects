#! /usr/bin/env node 
import inquirer from "inquirer";

let currency: any ={
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
}

let user_answer = await inquirer.prompt(
    [
        {
            name: "from",
            type: "list",
            message: "Enter from currency",
            choices: ['USD','EUR','GBP','INR','PKR']
        },
        {
            name: "to",
            type: "list",
            message: "Enter to currency",
            choices: ['USD','EUR','GBP','INR','PKR']
        },
        {
            name: "amount",
            type: "number",
            message: "Enter your Amount",
            
        }
    ]
)
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
// amount = jo amount convert krni = 3000
// fromAmount = jis currency se convert krna uski value.    USD = 1
// toAmount = jis currency mein convert krna  uski value.   PKR = 280
let baseAmount = amount/fromAmount;
            //    3000/1 = 3000
let convertedAmount = baseAmount * toAmount;
            //       3000*280 = 840000
console.log(convertedAmount);


// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);