const fs = require('fs');

const generateHtml = function (managerCard, engineerCards, internCards) {
    const fileName = `./dist/index.html`;

    fs.writeFile(fileName,
        `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>My Team</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous"
            referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="style.css">
          </head>
          
          <header>
            <div class="h-100 p-5 text-white bg-dark text-center">
              <h2>My Team</h2>
            </div>
          </header>
          
          <main>
            <div class="container-fluid row row-cols-1 row-cols-md-3 g-4 justify-content-center" id="card-container">
              ${managerCard}
              ${engineerCards.join('\n')}
              ${internCards.join('\n')}
            </div>
          </main>
          
          <body>
            
          </body>
          
          </html>
        `
        ,
        (err) =>
            err ? console.error(err) : console.log('HTML file generated!')
    );
}

exports.generateHtml = generateHtml;