const inquirer = require('inquirer');
const Manager = require('./lib/Manger');


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
        // ,
        // {
        //     type: 'confirm',
        //     name: 'employeeConfirm',
        //     message: 'Would you like to add another employee?',
        //     default: false            
        // }
    ])
    .then((answers) => {
        // Still need to push answers to html file
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNum)
        console.log(answers);

        return promptEmployee();
    })
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
        return promptEmployee();
    });
};

// add questions about an engineer
const promptEngineer = () => {
    console.log('Engineer chosen');

};

// Add questions about an intern
const promptIntern = () => {
    console.log('Intern Chosen');
};

promptManager();