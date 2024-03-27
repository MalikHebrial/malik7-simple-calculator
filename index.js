import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "FirstNumber" },
    { message: "Enter Second number", type: "number", name: "secondNumber" },
    {
        message: "slect one of the operator to perform oprations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional Statemnets//
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.secondNumber);
}
else if (answer.operator === "Suutration") {
    console.log(answer.FirstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.secondNumber);
}
else if (answer.operator === "Divion") {
    console.log(answer.FirstNumber / answer.secondNumber);
}
else {
    console.log("please select valid oprator");
}
