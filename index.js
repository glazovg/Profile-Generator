const inquirer = require('inquirer');
const { generateHtml } = require('./html');

async function main() {
    const answers = await inquirer.prompt([
        {
            name: 'managerName',
            type: 'input',
            message: 'What is the manager\'s name?',

        },
        {
            name: 'managerId',
            type: 'input',
            message: 'What is the manager\'s employee ID number?'
        },
        {
            name: 'managerEmail',
            type: 'input',
            message: 'What is the manager\'s email address?'
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is the manager\'s office number?'
        },
        {
            name: 'teamMembers',
            type: 'loop',
            message: 'Add an employee? ("y" to add it/ "n" to exit)',
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
                    message: 'What is his/her name?'
                },
                {
                    name: 'id',
                    type: 'input',
                    message: 'What is his/her ID number?'
                },
                {
                    name: 'email',
                    type: 'input',
                    message: 'What is his/her email address?'
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

    generateHtml(managerName, managerId, managerEmail, officeNumber, teamMembers);
}

main();