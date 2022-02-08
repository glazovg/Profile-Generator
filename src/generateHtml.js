const generateHtml = function (managerCard, engineerCards, internCards) {
    const fileName = `./dist/index.html`;

    fs.writeFile(fileName,
        ``
        ,
        (err) =>
            err ? console.error(err) : console.log('README file generated!')
    );
}

exports.generateHtml = generateHtml;