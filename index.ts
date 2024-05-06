#! /usr/bin/env node

import inquirer from "inquirer";


const RandomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number : 1-10",
  },
]);

if (answer.userGuessedNumber === RandomNumber) {
  console.log("congratulations! You are Guess courect number");
} else {
  console.log("OPPs! you Guess a wrong number ");
}
