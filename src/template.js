const template = (employees) => { return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

    <title> Employee Generator </title>
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
    <div class="bg-primary text-white w-100 p-3">
    <h5 class="card-title bg-primary text-white">${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted bg-primary text-white">Manager</h6>
    </div>
    <div class="card-body">
    <p class="card-text">ID: ${manager.id}</p>
    <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p class="card-text">Office Number: ${manager.officeNumber}.</p>
    </div>
</div>`
}

const generateInternCard = (intern) => {
    return `<div class="card m-3" style="width: 18rem;">
    <div class="bg-primary text-white w-100 p-3">
    <h5 class="card-title bg-primary text-white">${intern.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted bg-primary text-white">Intern</h6>
    </div>
    <div class="card-body">
    <p class="card-text">ID: ${intern.id}</p>
    <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p class="card-text">School: ${intern.school}.</p>
    </div>
</div>`
}

const generateEngineerCard = (engineer) => {
    return `<div class="card m-3" style="width: 18rem;">
    <div class="bg-primary text-white w-100 p-3">
    <h5 class="card-title bg-primary text-white">${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted bg-primary text-white">Engineer</h6>
    </div>
    <div class="card-body">
    <p class="card-text">ID: ${engineer.id}</p>
    <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
    <p class="card-text">Github:<a href="https://github.com/${engineer.github}">${engineer.github}</a> .</p>
    </div>
</div>`
}


module.exports = template;