const inquirer = require("inquirer");
const Manager = require("../lib/Manager.js");
const Intern = require("../lib/Intern.js");
const Engineer = require("../lib/Engineer.js");
const fs = require('fs');
const generateHtml = require("./generateHtml.js");

const employees = [];

const gatherEmployeeInfo = ()=>{
    inquirer.prompt([
        {
            type: "list",
            choices: ["Manager", "Engineer", "Intern", "Exit"],
            name: "EmployeeChoice"
        },
    ]).then(answers => {
        switch (answers.EmployeeChoice) {
            case "Manager":
                console.log("add manager!")
                createManager();
                break;
            
            case "Engineer":
                console.log("add engineer!")
                createEngineer();
                break;
            
            case "Intern":
                console.log("add intern!")
                createIntern();
                break;
            
            default:
                console.log("thanks for using this app!")
                console.log(employees);
                fs.writeFileSync('../dist/index.html', (generateHtml(employees)));
                break;
        }
    })
}

gatherEmployeeInfo();


const createManager = ()=> {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
    }
    ]).then(ans=> {
        const newManager = new Manager(ans.name, ans.id, ans.email, ans.officeNumber)
        console.log(JSON.stringify(newManager, null, 2));
        employees.push(newManager);
        gatherEmployeeInfo();
    })
}


const createIntern = ()=> {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email"
    },
    {
        type: "input",
        name: "school",
        message: "What is your school name?"
    }
    ]).then(ans=> {
        const newIntern = new Intern(ans.name, ans.id, ans.email, ans.school)
        console.log(JSON.stringify(newIntern, null, 2));
        employees.push(newIntern);
        gatherEmployeeInfo();
    })
}


const createEngineer = ()=> {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email"
    },
    {
        type: "input",
        name: "github",
        message: "Please provide your github account?"
    }
    ]).then(ans=> {
        const newEngineer = new Engineer(ans.name, ans.id, ans.email, ans.github)
        console.log(JSON.stringify(newEngineer, null, 2));
        employees.push(newEngineer);
        gatherEmployeeInfo();
    })
}

