#! /usr/bin/env node
import inquirer from "inquirer";

const answers: {
    sentence: string 
} = await inquirer.prompt(
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence"
    }
)

const words = answers.sentence.trim().split(" ") 
// sentence ki space ko remove krne ke liye trim() use krty hain
// sentence ko array mein sequence se likhne ke liye split ka use kiya gya hai
console.log(words);

console.log(`your sentence word count is ${words.length}`);

