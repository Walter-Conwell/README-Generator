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
## User-Entered License
${data.licenseEntered}
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
      message: "What's the name of your Project?",
    },
    {
      type: "input",
      //## from here down
      message: "Description... Technologies used?",
      name: "description",
    },
    {
      type: "input",
      message:
        "What are the dependencies/requirements to install for the application?",
      name: "installation",
    },
    {
      type: "input",
      message: "Are there any collaborators, list and provide links",
      name: "credits",
    },
    {
      type: "list",
      message: "What license was used?",
      name: "license",
      choices: ["Boost_1.0", "MIT", "Apache_2", "Not listed"],
    },
    {
      type: "input",
      message: "If your license is not listed, enter it here:",
      name: "licenseEntered",
    },
    {
      type: "input",
      message: "Give users a brief Intro to your Application?",
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

  // following code writes content of user input to the new readme.md
  // an error is thrown, or success message is thrown.
  .then((responseData) => {
    const readMeContent = createREADME(responseData);
    fs.writeFile("README.md", readMeContent, (err) =>
      err ? console.log(err) : console.log("Success!"),
    );
  });

//
const questions = [];
// writes readme.md
function writeToFile(fileName, data) {}
// initializes app
function init() {}
init();
