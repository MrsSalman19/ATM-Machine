#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 20000;
let myPin = 1234;
console.log("WELCOME TO ATM MACHINE");
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "plz enter your pin.",
        type: "number",
    },
]);
if (pinAns.pin === myPin) {
    console.log("Correct pin code.");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "plz select anyone.What do you want to do?",
            type: "list",
            choices: ["withdraw", "balance inquiry"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "plz select amount to withdraw.",
                type: "list",
                choices: ["1000", "2000", "3000", "5000", "10000"],
            },
        ]);
        if (amountAns.amount > balance) {
            console.log("Insufficient Balance");
        }
        else {
            balance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successful!!!`);
            console.log(`Your current account balance is ${balance}`);
        }
    }
    if (operationAns.operation === "balance inquiry") {
        console.log(`Your current balance is ${balance} `);
    }
}
else {
    console.log(" You entered wrong pin!");
}
