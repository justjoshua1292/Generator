const template = (employees) => { return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

    <title>Document</title>
</head>
<body>
<div class="d-flex">
   ${generateAllCards(employees)}
</div>
</body>
</html>`
}

const generateAllCards = (employees) => {
    let cards = '';

    employees.forEach(employee => {
        if(employee.getRole() == 'Manager') {
            cards += generateManagerCard(employee)
        } else if(employee.getRole() == 'Intern') {
            cards += generateInternCard(employee)
        } else if(employee.getRole() == 'Engineer') {
            cards += generateEngineerCard(employee)
        }
    });

    return cards;
}



const generateManagerCard = (manager) => {
    return ` <div class="card m-3" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <p class="card-text">ID: ${manager.id}</p>
    <p class="card-text">Email: ${manager.email}</p>
    <p class="card-text">Office Number: ${manager.officeNumber}.</p>
    </div>
</div>`
}

const generateInternCard = (intern) => {
    return `<div class="card m-3" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    <p class="card-text">ID: ${intern.id}</p>
    <p class="card-text">Email: ${intern.email}</p>
    <p class="card-text">School: ${intern.school}.</p>
    </div>
</div>`
}

const generateEngineerCard = (engineer) => {
    return `<div class="card m-3" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
    <p class="card-text">ID: ${engineer.id}</p>
    <p class="card-text">Email: ${engineer.email}</p>
    <p class="card-text">Github: ${engineer.github}.</p>
    </div>
</div>`
}


module.exports = template;