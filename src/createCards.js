const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const createManagerCard = function (member) {
    const managerCard = `
            <div class="col">
                <div class="shadow card h-100">
                    <div class="card-header employee-name">${member.name}
                        <br>
                        <span>
                            <i class="fas fa-mug-hot"></i> ${member.getRole()}
                        </span>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <tbody>
                              <tr>
                                <td>ID: <span class="employee-id">${member.id}</span></td>
                              </tr>
                              <tr>
                                <td>Email <a class="employee-email" href="mailto:myemail@gmail.com">${member.email}</a></td>
                              </tr>
                              <tr>
                                <td>Office Number: <span class="employee-office-number">${member.officeNumber}</span></td>
                              </tr>
                              </tbody>
                        </table>
                    </div>
                </div>
            </div>
    `;

    return managerCard;
}

const createTeamCards = function (members) {
    const cards = [];

    members.forEach(member => {
        let specialTd;

        if (member instanceof Engineer) {
            specialTd = `<td>GitHub: <a class="employee-github" href="https://github.com/${member.github}" target="_blank">https://github.com/${member.github}/</a></td>`;
        } else if (member instanceof Intern) {
            specialTd = `<td>School: <span class="employee-school">${member.school}</span></td>`;
        }

        const card = `
            <div class="col">
                <div class="shadow card h-100">
                    <div class="card-header employee-name">${member.name}
                        <br>
                        <span>
                            <i class="fas fa-mug-hot"></i> ${member.getRole()}
                        </span>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <tbody>
                              <tr>
                                <td>ID: <span class="employee-id">${member.id}</span></td>
                              </tr>
                              <tr>
                                <td>Email <a class="employee-email" href="mailto:myemail@gmail.com">${member.email}</a></td>
                              </tr>
                              <tr>
                                ${specialTd}
                              </tr>
                              </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;

        cards.push(card);
    });

    return cards;
}

module.exports = { createManagerCard, createTeamCards };