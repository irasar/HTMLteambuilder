//dependencies
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
//empty array to push users inputs to 
const teamMembers = [];
const idArray = [];


// code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints)

function mainMenu() {
    // function for manager prompts
    function createManager() {
        console.log("Please build your team")
        inquirer.prompt([{
            type: "input",
            name: "managerName",
            message: "What is your manager's name?",
            validate: answer => {
                //conditional to test if the user enters an empty string or not
                if (answer !== "") {
                    return true;
                }
                return "Please enter a name"
            }
        },
        {
            type: "number",
            name: "managerId",
            message: "What is your manager's id?",
            validate: answer => {
                //checking if answer is a number greater than 0
                if (parseInt(answer) > 0) {
                    return true;
                }
                return "Please enter a positive number greater than zero";
            },
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email?",
            validate: answer => {
                //checking if user types in "@" and "." in between strings for email or not
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address"
            }
        },

        {
            type: "input",
            name: "managerNumber",
            message: "What is your manager's office number?",
            validate: answer => {
                if (parseInt(answer) > 0) {
                    return true;
                }
                return "Please enter a positive number greater than zero";
            },
        },

        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber)
            //pushing to empty array to add the users input
            teamMembers.push(manager)
            idArray.push(answers.managerId)
            //calling function to see if user wants to add more employees
            createMember();
        })
    }
    createManager();
    //function for engineer prompts
    function createEngineer() {
        inquirer.prompt([{
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
            validate: answer => {
                //conditional to test if the user enters an empty string or not
                if (answer !== "") {
                    return true;
                }
                return "Please enter a name"
            }
        },
        {
            type: "number",
            name: "engineerID",
            message: "What is the engineer's ID?",
            validate: answer => {
                //answer must be number greater than 0
                if (parseInt(answer) > 0) {
                    return true;
                }
                return "Please enter a positive number greater than zero";
            },
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?",
            validate: answer => {
                //checking if user types in "@" and "." in between strings for email or not
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address"
            }
        },
        {
            type: "input",
            name: "engineerNumber",
            message: "What is the engineer's Github?",
            validate: answer => {
                //conditional to test if the user enters an empty string or not
                if (answer !== "") {
                    return true;
                }
                return "Please enter a username"
            }
        }

        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerNumber)
            //pushing to empty array to add the users inpput
            teamMembers.push(engineer)
            idArray.push(answers.engineerID)
            //calling function to see if user wants to add more employees
            createMember();
        })
    }

    function createIntern() {
        inquirer.prompt([{
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
            validate: answer => {
                //conditional to test if the user enters an empty string or not
                if (answer !== "") {
                    return true;
                }
                return "Please enter a name"
            }
        },
        {
            type: "number",
            name: "internID",
            message: "What is the intern's id?",
            validate: answer => {
                //answer must be number greater than 0
                if (parseInt(answer) > 0) {
                    return true;
                }
                return "Please enter a positive number greater than zero";
            },
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?",
            validate: answer => {
                //checking if user types in "@" and "." between strings for email
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address"
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter your intern's school"
            }
        }

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
            //pushing to empty array to add the users inpput
            teamMembers.push(intern)
            idArray.push(answers.internID)
            //calling function to see if user wants to add more employees
            createMember();
        })
    }
    //function to see if user wants to add more employees or end prompt
    function createMember() {
        inquirer.prompt([{
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add anymore team members"
            ]
        }
            //checking if user wants to add more employees or create the desired file
        ]).then(answers => {
            if (answers.memberChoice === "Intern") {
                createIntern();
            } else if (answers.memberChoice === "Engineer") {
                createEngineer();
            } else {
                buildTeam();
            }
            //function to create team.html
            function buildTeam() {
                //create an HTML file using the HTML render function
                // pass in an array containing all employee objects
                fs.writeFile(outputPath, render(teamMembers), "utf-8", (err) => {
                    if (err) throw err;


                })
            }
        })


    }

};
//calling main function
mainMenu()
