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
- [Questions](#gitUser)
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
//user prompts
inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      //# for title
      message: "What is the project title?",
    },
    {
      type: "input",
      //## from here down
      message: "Give me a description, please",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installations to be used?",
      name: "installation",
    },
    {
      type: "input",
      message: "Are there any collaborators that deserve credit?",
      name: "credits",
    },
    {
      type: "list",
      message: "What's the license you're using?",
      name: "license",
      choices: ["Boost_1.0", "MIT", "Apache_2"],
    },
    {
      type: "input",
      message: "Are there any instructions the user must be aware of?",
      name: "test",
    },
    {
      type: "input",
      message: "Enter your username.",
      name: "gitUser",
    },
    {
      type: "input",
      message: "What's your email address?",
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
// TODO: Create a function to initialize app
function init() {}
// Function call to initialize app
init();
