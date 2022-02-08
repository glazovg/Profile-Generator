const inquirer = require('inquirer');
const { generateHtml } = require('./src/generateHtml');
const { createManagerCard, createTeamCards } = require('./src/createCards');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

async function main() {
    const answers = await inquirer.prompt([
        {
            name: 'managerName',
            type: 'input',
            message: 'What is the manager\'s name?',
            validate: (name) => {
                if (name.length < 2) {
                    return 'Name should be greater than 2 characteres.'
                } else {
                    return true;
                }
            }
        },
        {
            name: 'managerId',
            type: 'input',
            message: 'What is the manager\'s employee ID number?',
            validate: (id) => {
                if (isNaN(id)) {
                    return 'Id should be a number not a character'
                } else {
                    return true;
                }
            }
        },
        {
            name: 'managerEmail',
            type: 'input',
            message: 'What is the manager\'s email address?',
            validate: (email) => {
                // Regex mail check
                if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
                    return 'Please insert a valid email.'
                } else {
                    return true;
                }
            }
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is the manager\'s office number?'
        },
        {
            name: 'teamMembers',
            type: 'loop',
            message: 'Add an employee?',
            questions: [
                {
                    name: 'type',
                    type: 'list',
                    message: 'What kind of employee do you want to add?',
                    choices: ['Engineer', 'Intern']
                },
                {
                    name: 'name',
                    type: 'input',
                    message: 'What is his/her name?',
                    validate: (name) => {
                        if (name.length < 2) {
                            return 'Name should be greater than 2 characteres.'
                        } else {
                            return true;
                        }
                    }
                },
                {
                    name: 'id',
                    type: 'input',
                    message: 'What is his/her ID number?',
                    validate: (id) => {
                        if (isNaN(id)) {
                            return 'Id should be a number not a character'
                        } else {
                            return true;
                        }
                    }
                },
                {
                    name: 'email',
                    type: 'input',
                    message: 'What is his/her email address?',
                    validate: (email) => {
                        // Regex mail check
                        if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
                            return 'Please insert a valid email.'
                        } else {
                            return true;
                        }
                    }
                },
                {
                    name: 'github',
                    type: 'input',
                    message: 'What is his/her github username?',
                    when: (member) => member.type === 'Engineer'
                },
                {
                    name: 'school',
                    type: 'input',
                    message: 'What is the name of his/her school?',
                    when: (member) => member.type === 'Intern'
                },
            ]
        },

    ])

    const { managerName, managerId, managerEmail, officeNumber, teamMembers } = answers;
    const manager = new Manager(managerName, managerId, managerEmail, officeNumber);
    const engineers = [];
    const interns = [];

    for (let i = 0; i < teamMembers.length; i++) {
        const member = teamMembers[i];

        if (member.type === 'Engineer') {
            const enginner = new Engineer(member.name, member.id, member.email, member.github);
            engineers.push(enginner);
        }

        if (member.type === 'Intern') {
            const intern = new Intern(member.name, member.id, member.email, member.school);
            interns.push(intern);
        }
    }

    const managerCard = createManagerCard(manager);
    const engineerCards = createTeamCards(engineers);
    const internCards = createTeamCards(interns);

    generateHtml(managerCard, engineerCards, internCards);
}

main();