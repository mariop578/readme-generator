const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const folderPath = "./storage";

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project name:",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose License:",
    choices: [
      "None",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "Mozilla Public License",
    ],
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description:",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install this application:",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this application:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Any Contributions?",
  },
  {
    type: "input",
    name: "tests",
    message: "Which tests were used?",
  },
  {
    type: "input",
    name: "email",
    message: "Which email can people contact you?",
  },
  {
    type: "input",
    name: "username",
    message: "What is you github username?",
  },
];

function writeToFile(folderPath, fileName, data) {
  const filePath = path.join(folderPath, fileName);

  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`File (${filePath}) has been successfully created!`);
    }
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      const readmeContent = generateMarkdown(answers);
      writeToFile(folderPath, "README.md", readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

init();
