const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="d-flex">
    <div class="card m-3" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <p class="card-text">ID: ${manager.id}</p>
        <p class="card-text">Email: ${manager.email}</p>
        <p class="card-text">Office Number: ${manager.officeNumber}.</p>
        </div>
    </div>

    <div class="card m-3" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
        <p class="card-text">ID: ${intern.id}</p>
        <p class="card-text">Email: ${intern.email}</p>
        <p class="card-text">School: ${intern.school}.</p>
        </div>
    </div>


    <div class="card m-3" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        <p class="card-text">ID: ${engineer.id}</p>
        <p class="card-text">Email: ${engineer.email}</p>
        <p class="card-text">Github: ${engineer.github}.</p>
        </div>
    </div>
</div>
</body>
</html>`