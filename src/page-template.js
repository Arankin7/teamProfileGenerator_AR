const Employee = require("../lib/Employee");
const Engineer = require('../lib/Engineer');

const pageTemplate = (templateData) =>{
    let employeeArr = [];

    const generateManager = manager => {
        let managerData = 
        `
        <div>
            <div> 
                <h2>${managerData.getName()}</h2>
                <h3>Role: ${managerData.getRole()}</h3>
            </div>
            <ul>
                <li>Employee Id: ${managerData.getId()}</li>
                <li>Email: ${managerData.getEmail()}</li>
                <li>Office Number: ${managerData.officeNumber}</li>
            </ul>
        </div>
        `
        employeeArr.push(managerData);
    }
    
    const generateEngineer = engineer => {
        let engineerData = 
        `
        <div>
            <div> 
                <h2>${engineerData.name}</h2>
                <h3>Role: ${engineerData.getRole()}</h3>
            </div>
            <ul>
                <li>Employee Id: ${engineerData.id}</li>
                <li>Email: ${engineerData.email}</li>
                <li>GitHub: ${engineerData.github}</li>
            </ul>
        </div>
        `
        employeeArr.push(engineerData)
    }
    
    const generateIntern = intern => {
        let internData = 
        `
        <div>
            <div> 
                <h2>${internData.name}</h2>
                <h3>Role: ${internData.getRole()}</h3>
            </div>
            <ul>
                <li>Employee Id: ${internData.id}</li>
                <li>Email: ${internData.email}</li>
                <li>School: ${internData.school}</li>
            </ul>
        </div>  
        `
        employeeArr.push(internData);
    }

    for(i = 0; i < employeeArr.length; i++){
        if(employeeArr[i].getRole() === "Manager"){
            generateManager(employeeArr[i]);
        }
        if(employeeArr[i].getRole() === "Engineer"){
            generateEngineer(employeeArr[i]);            
        }
        if(employeeArr[i].getRole() === "Intern"){
            generateIntern(employeeArr[i]);            
        }
    }

    return templateData.join('');

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

    <link rel="stylesheet" href="./dist/style.css">
    <title>Team Profile</title>
</head>
<body>
    <header></header>
    <main>

    ${pageTemplate(templateData)}

    </main>    
    <footer></footer>
</body>
</html>
`
}

// module.exports = templateData; 