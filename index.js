const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

console.log('Hi there! Welcome to the README generator!');
console.log('Please answer a few questions to generate the README file!');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your project used for?'
    },
    {
        type: 'list',
        choices: ['MIT', 'GPL', 'GNU', 'Apache', 'Mozilla', 'Eclipse',],
        name: 'license',
        message: 'What is your project license type?'
    },  
    {
        type: 'input',
        name: 'contribution',
        message: 'How users you contribute to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests that can be performed with this application.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Frequently asked questions about this application.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the name of your gitHub profile?'
    },
    {
        type: 'input',
        name: 'mail',
        message: 'What is your e-mail address?'
    }

];

 //function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync('README.md', data, (err) => {
       err ? console.error(err) : console.log('Success!'); 
    })
} 

// function to initialize program
function init() {
inquirer
.prompt(questions)
.then(answers => {
    console.log(answers)
    const markdown = generateMarkdown(answers);
    fs.writeFileSync('README.md', markdown)
    // Use user feedback for... whatever!!
});
}

// function call to initialize program
init();
