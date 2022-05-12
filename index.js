const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manger');
const fs = require('fs');
const { writeFile, copyFile }= require('./src/generate-site');
const pageTemplate = require('./src/page-template');
const generateSite = require('./src/generate-site');

const employeeArr = [];


// Initial user prompt. Manager is required
const promptManager = () =>{

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if(nameInput){
                    return true;
                }
                else{
                    console.log('Please enter your name.')
                    return false; 
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is your employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email adress?',
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is your office phone number? (Required)',
            validate: officeNumInput => {
                if(officeNumInput){
                    return true; 
                }
                else{
                    console.log('Please enter your office phone number.');
                    return false;
                }
            }
        }
    ])
    .then((answers) => {
        
        const { name, id, email, officeNum } = answers;
        const manager = new Manager(name, id, email, officeNum);

        employeeArr.push(manager);

        // console.log(employeeArr);
        return promptEmployee();
    })
};

// add questions about an engineer
const promptEngineer = () => {
    // console.log('Engineer chosen');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if(nameInput){
                    return true;
                }
                else{
                    console.log('Please enter your name.')
                    return false; 
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is your employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email adress?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: gitInput => {
                if(gitInput){
                    return true; 
                }
                else {
                    console.log('Please enter your GitHub username.')
                    return false; 
                }
            }
        }
    ])
    .then((answers) => {

        const { name, id, email, github} = answers; 
        const engineer = new Engineer(name, id, email, github);

        employeeArr.push(engineer);

        // console.log(employeeArr);
        return promptEmployee();
    });    
};

// Add questions about an intern
const promptIntern = () => {
    // console.log('Intern Chosen');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if(nameInput){
                    return true;
                }
                else{
                    console.log('Please enter your name.')
                    return false; 
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is your employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email adress?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school are you currently enrolled in? (Required)',
            validate: schoolInput => {
                if(schoolInput){
                    return true; 
                }
                else {
                    console.log('Please enter the school you currently attend.');
                    return false; 
                }
            }
        }
    ])
    .then((answers) => {
        const { name, id, email, school} = answers; 
        const intern = new Intern (name, id, email, school);

        employeeArr.push(intern);
        // console.log(employeeArr);
        return promptEmployee();
    });
};
// add employee questions.  give list of employees to add. 
const promptEmployee = () => {

    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'employeeConfirm',
            message: 'Would you like to add another employee?'
        }       
    ])
    .then(answer => {
        if(answer.employeeConfirm){

            console.log(`
            ==================
            Add a New Employee
            ==================
            `);
            
            return inquirer.prompt([
                {
                    type: 'list',
                    name: 'employeeType',
                    message: 'What kind of employee would you like to add?',
                    choices: ['Engineer', 'Intern']
                }
            ])
            .then(answer => {
                if(answer.employeeType === 'Engineer'){
                    promptEngineer();
                }
                if(answer.employeeType === 'Intern'){
                    promptIntern();
                }
            })
        }
        let pageHTML = pageTemplate(employeeArr);

        writeFile(pageHTML);
        copyFile();
    })
};

promptManager();