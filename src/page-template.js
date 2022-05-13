const Employee = require("../lib/Employee");
const Engineer = require('../lib/Engineer');

const pageTemplate = templateData =>{
    let employeeArr = [];

    const generateManager = manager => {
        console.log(manager);
        let managerData = 
        `
        <div class = "employee pure-g pure-u-1">
            <div class = "manager pure-u-1">
                <div class = "title"> 
                    <h2>${manager.name}</h2>
                    <h3>Role: ${manager.getRole()}</h3>
                </div>
                <ul>
                    <li>Employee Id: ${manager.id}</li>
                    <li>Email: <a href= "mailto:${manager.email}">${manager.email}</a></li>
                    <li>Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
        `
        employeeArr.push(managerData);
    }
    
    const generateEngineer = engineer => {
        let engineerData = 
        `
        <div class = "employee pure-g pure-u-1-2">
            <div class = "engineer pure-u-1">
                <div class = "title"> 
                    <h2>${engineer.name}</h2>
                    <h3>Role: ${engineer.getRole()}</h3>
                </div>
                <ul>
                    <li>Employee Id: ${engineer.id}</li>
                    <li>Email: <a href= "mailto:${engineer.email}">${engineer.email}</a></li>
                    <li>GitHub: <a href="https://www.github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
        `
        employeeArr.push(engineerData)
    }
    
    const generateIntern = intern => {
        let internData = 
        `
        <div class = "employee pure-g pure-u-1-2">
            <div class = "intern pure-u-1">
                <div class = "title"> 
                    <h2>${intern.name}</h2>
                    <h3>Role: ${intern.getRole()}</h3>
                </div>
                <ul>
                    <li>Employee Id: ${intern.id}</li>
                    <li>Email: <a href= "mailto:${intern.email}">${intern.email}</a></li>
                    <li>School: ${intern.school}</li>
                </ul>
            </div>
        </div>  
        `
        employeeArr.push(internData);
    }

    for(i = 0; i < templateData.length; i++){
        if(templateData[i].getRole() === "Manager"){
            generateManager(templateData[i]);
        }
        if(templateData[i].getRole() === "Engineer"){
            generateEngineer(templateData[i]);            
        }
        if(templateData[i].getRole() === "Intern"){
            generateIntern(templateData[i]);            
        }
    }

    return employeeArr.join('');

}

module.exports = templateData => {
    console.log(templateData)
    
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/grids-responsive-min.css" />

    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
    <header class = "header">
    My Team
    </header>
    <main>
        <div class = "team pure-g">
        ${pageTemplate(templateData)}
        </div>

    </main>    
    <footer></footer>
</body>
</html>
`
}

// module.exports = templateData; 