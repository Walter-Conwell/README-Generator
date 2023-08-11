const inquirer = require("inquirer");
const fs = require("fs");
//Create function to render a README layout
const createREADME = (data) =>
  `
# ${data.projectTitle}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#credits)
- [Tests](#test)
- [Qestions](#gitUser)
## Installation
${data.installation}
## Usage
${data.usage}
## Badges
[![License](https://img.shields.io/badge/License-${data.license}-red.svg)](https://opensource.org/licenses/${data.license})
## Contributors
${data.credits}
## Tests
${data.test}
## Questions
www.github.com/${data.gitUser}
${data.email}
`;
//the start of the prompts to the user
inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      //# for title
      message: "Create a project title.",
    },
    {
      type: "input",
      //## from here down
      message: "Enter a Short-but-sweet description.",
      name: "description",
    },
    {
      type: "input",
      message: "Please enter Installation(s)",
      name: "installation",
    },
    {
      type: "input",
      message: "Did you have any collaborators for this work?",
      name: "credits",
    },
    {
      type: "list",
      message: "What license was used?",
      name: "license",
      choices: ["Boost_1.0", "MIT", "Apache_2"],
    },
    {
      type: "input",
      message: "What instructions are there for user/devs?",
      name: "test",
    },
    {
      type: "input",
      message: "What's your Git username?",
      name: "gitUser",
    },
    {
      type: "input",
      message: "Please enter an email address.",
      name: "email",
    },
  ])
  //prompts end
  .then((responseData) => {
    const readMeContent = createREADME(responseData);
    fs.writeFile("README.md", readMeContent, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
const questions = [];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
// TODO: Create a function to initialize app
function init() {}
// Function call to initialize app
init();
