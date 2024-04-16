import inquirer from "inquirer";
const answers = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter your sentence"
});
const words = answers.sentence.trim().split(" ");
// sentence ki space ko remove krne ke liye trim() use krty hain
console.log(words);
console.log(`your sentence word count is ${words.length}`);
