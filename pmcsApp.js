import inquirer from "inquirer";
const prompt = inquirer.createPromptModule();
console.clear();

import chalk from "chalk";

console.log(chalk.yellowBright("Welcome to the PMCS Checklist App! This command-line application helps you perform Preventive Maintenance Checks and Services (PMCS) on your vehicle. It will guide you through checking various parts of your car, allowing you to document unserviceable items and track fluid levels."));

const answer1 = await prompt({
  type: "input",
  name: "inspectionBy",
  message: chalk.whiteBright("Please enter the name of the person conducting the vehicle inspection:"),
});

if (answer1.inspectionBy.trim() !== "") {
  console.log(chalk.cyanBright(`Great to have you here, ${answer1.inspectionBy}! Let's get started.`));

  const password = await prompt({
    type: "password",
    name: "password",
    message: "Please enter your 6-digit numeric password:",
    mask: '*',
    validate: input => (input.length === 6 && !isNaN(input)) || "Password must be exactly 6 digits long.",
  });

  console.log(chalk.whiteBright(`Access Granted!`));
} else {
  console.log("Welcome, guest! Unlock additional features by creating an account.");
}

console.log(chalk.greenBright(`All set, ${answer1.inspectionBy}! Let's dive into your vehicle information.`));

const vehicleInfo = await prompt([
  {
    type: "input",
    name: "year",
    message: chalk.whiteBright("Enter the vehicle's year:"),
    validate: input => {
      const year = parseInt(input);
      if (isNaN(year) || input.length !== 4) {
        return "Please enter a valid 4-digit year.";
      }
      if (year < 1886 || year >= 2025) {
        return "Year must be between 1886 and 2024.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "make",
    message: chalk.whiteBright("Enter the vehicle's make:"),
    validate: input => input.trim() !== "" || "Make cannot be empty. Please enter a valid vehicle make.",
  },
  {
    type: "input",
    name: "model",
    message: chalk.whiteBright("Enter the vehicle's model:"),
    validate: input => input.trim() !== "" || "Model cannot be empty. Please enter a valid vehicle model.",
  },
  {
    type: "input",
    name: "color",
    message: chalk.whiteBright("Enter the vehicle's color:"),
    validate: input => input.trim() !== "" || "Color cannot be empty. Please enter a valid vehicle color.",
  },
  {
    type: "input",
    name: "vin",
    message: chalk.whiteBright("Enter the vehicle's VIN (17 characters):"),
    validate: input => (input.length === 17) || "VIN must be exactly 17 characters long.",
  },
]);

console.log(chalk.greenBright("Vehicle Information Summary:"));
console.log(chalk.cyanBright(`Year: ${vehicleInfo.year}`));
console.log(chalk.cyanBright(`Make: ${vehicleInfo.make}`));
console.log(chalk.cyanBright(`Model: ${vehicleInfo.model}`));
console.log(chalk.cyanBright(`Color: ${vehicleInfo.color}`));
console.log(chalk.cyanBright(`VIN: ${vehicleInfo.vin}`));

console.log(chalk.whiteBright("Thank you! You are ready to begin the PMCS checklist."));

const vehicleCheck = await prompt([
  {
    type: "list",
    name: "exteriorBody",
    message: chalk.whiteBright("Please select an exterior body part to inspect:"),
    choices: [
      "Hood",
      "Fenders",
      "Doors",
      "Bumpers",
      "Windows",
      "Trunk",
      "Lights",
      "Tires",
    ],
  },
  {
    type: "list",
    name: "interiorParts",
    message: chalk.whiteBright("Please select an interior part to inspect:"),
    choices: [
      "Dashboard",
      "Seats",
      "Seatbelts",
      "Steering Wheel",
      "Gauges",
      "Air Conditioning",
      "Audio System",
      "Floor Mats",
    ],
  },
  {
    type: "list",
    name: "undercarriage",
    message: chalk.whiteBright("Please select an undercarriage part to inspect:"),
    choices: [
      "Suspension",
      "Exhaust System",
      "Frame",
      "Brakes",
      "Differential",
      "Fuel Tank",
      "Wiring",
      "Oil Pan",
    ],
  },
]);
console.log(chalk.greenBright("You have selected the following parts for inspection:"));
console.log(chalk.cyanBright(`Exterior Body: ${vehicleCheck.exteriorBody}`));
console.log(chalk.cyanBright(`Interior Part: ${vehicleCheck.interiorParts}`));
console.log(chalk.cyanBright(`Undercarriage Part: ${vehicleCheck.undercarriage}`));

const deficiencies = await prompt([
  {
    type: "input",
    name: "exteriorDeficiencies",
    message: chalk.whiteBright(`Please describe any deficiencies for the ${vehicleCheck.exteriorBody} (if none, type 'none'):`),
  },
  {
    type: "input",
    name: "interiorDeficiencies",
    message: chalk.whiteBright(`Please describe any deficiencies for the ${vehicleCheck.interiorParts} (if none, type 'none'):`),
  },
  {
    type: "input",
    name: "undercarriageDeficiencies",
    message: chalk.whiteBright(`Please describe any deficiencies for the ${vehicleCheck.undercarriage} (if none, type 'none'):`),
  },
]);

// Summary of deficiencies
console.log(chalk.greenBright("Deficiency Summary:"));
console.log(chalk.cyanBright(`Exterior Body Deficiencies: ${deficiencies.exteriorDeficiencies}`));
console.log(chalk.cyanBright(`Interior Part Deficiencies: ${deficiencies.interiorDeficiencies}`));
console.log(chalk.cyanBright(`Undercarriage Deficiencies: ${deficiencies.undercarriageDeficiencies}`));
console.log(`Since I do not know how to use APIs yet, please proceed to your nearest maintenance center and get it inspected properly! Please hit the like button and subscribe! Thank you!`);

