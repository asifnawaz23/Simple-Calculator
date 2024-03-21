#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your First Number", type: "number", name: "FirstNumber" },
    { message: "Enter your Second Number", type: "number", name: "SecondNumber" },
    {
        message: "select one of the operators to perform the action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DEVISION"],
    },
]);
// Conditional Statement:
if (answer.operator === "ADDITION") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "DEVISION") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    "Please select Valid Operator";
}
