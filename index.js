const inquirer = require("inquirer");
const fs = require("fs");
// const employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require ("./lib/manager");

const template = require('./src/template.js')

const employees = [];

// to start everything
function start() {
    console.log('Welcome!');
    createManager();
}

// show a menu to ask what would they like to do next
function menu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Which employee type would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                "I'm done adding employees."
            ]
        }
    ]).
    then(function(answers){
        if(answers.choice == 'Engineer') {
            createEngineer()
        } else if(answers.choice == 'Intern') { 
            createIntern()
        } else {
            finish()
        }
    })
}

// to ask for Manager details
function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your Manager?'
        }, 
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id of your Manager?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of your Manager?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of your Manager?'
        },
    ])
    .then(function(answers) {
        console.log(answers)
        // create the new Manager using the answers and using the Manager class
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)

        // add this newManager to your employees array
        employees.push(newManager);

        menu();
    
    })
}

// to ask for Engineer details
function createEngineer() {
    console.log('Creating an engineer')
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your Engineer?'
        }, 
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id of your Engineer?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of your Engineer?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the github username of your Engineer?'
        },
    ])
    .then(function(answers) {
        console.log(answers)
        // create the new Engineer using the answers and using the Engineer class
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)

        // add this newManager to your employees array
        employees.push(newEngineer);

        menu();
    
    })
}

// to ask for Intern details
function createIntern() {
    console.log('Creating an intern')

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your Intern?'
        }, 
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id of your Intern?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of your Intern?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of the school of your Intern?'
        },
    ])
    .then(function(answers) {
        console.log(answers)
        // create the new Intern using the answers and using the Intern class
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)

        // add this newIntern to your employees array
        employees.push(newIntern);

        menu();
    
    })
}

// to wrap up it up
// to get all the added employees
// to generate the HTML file
function finish() {
    console.log('Finishing up!')
    const generatedHTML = template(employees);

    fs.writeFile('./dist/index.html', generatedHTML, () => {
        console.log('HTML successfully created!')
    } )
}





start();