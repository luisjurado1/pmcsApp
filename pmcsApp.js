import inquirer from "inquirer";
const prompt = inquirer.createPromptModule();
//console.clear();

import chalk from "chalk";


console.log(chalk.yellowBright("Welcome to the PMCS Checklist App! This command-line application helps you perform Preventive Maintenance Checks and Services (PMCS) on your vehicle. It will guide you through checking various parts of your car, allowing you to document unserviceable items and track fluid levels."));

const answer1 = await prompt({
  type: "input",
  name: "inspectionBy",
  message: chalk.whiteBright("Please enter the name who will be inspecting this vehicle:"),
});

if (answer1.inspectionBy.trim() !== "") {
  console.log(`Welcome to our site, ${answer1.inspectionBy}!`);

const password = await prompt({
  type: "password",
  name: "password",
  message: "Please enter your 6-digit numeric password:",
  mask: '*',
  validate: input => (input.length === 6 && !isNaN(input)) || "Password must be exactly 6 digits long.",
})

console.log("Access Granted!");
} else {
    console.log("Welcome, guest! For better features, please create an account.");
}

