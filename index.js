const fs = require('fs')
const inquirer = require('inquirer')

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'enter your name'
    },
    {
        type: 'input',
        name: 'job',
        message: ' enter your job title'
    },
    {
        type: 'input',
        name: 'id',
        message: 'enter your id number'
    },
    {
        type: 'input',
        name: 'school',
        message: 'where did you go to school'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email'
    },
    {
        type: 'input',
        name: 'github',
        message: 'enter your github username',
    },
    {
        type: 'input',
        name: 'office',
        message: 'what is your office number'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Write out tests for your application'
    },
]).then(ans => {
    fs.writeFileSync('./dist/team.html', 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${ans.name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ans.id}</li>
            <li class="list-group-item">Email: <a href="${ans.email}">${ans.email}</a></li>
            <li class="list-group-item">Office number: 1</li>
        </ul>
    </div>
    </div>
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${ans.name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ans.id}</li>
            <li class="list-group-item">Email: <a href="${ans.email}">${ans.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${ans.github}" target="_blank" rel="noopener noreferrer">ibealec</a></li>
        </ul>
    </div>
    </div>
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${ans.name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ans.id}</li>
            <li class="list-group-item">Email: <a href="${ans.email}">${ans.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${ans.github}" target="_blank" rel="noopener noreferrer">gchoi2u</a></li>
        </ul>
    </div>
    </div>
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${ans.name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ans.id}</li>
            <li class="list-group-item">Email: <a href="${ans.email}">${ans.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${ans.github}" target="_blank" rel="noopener noreferrer">tammerg</a></li>
        </ul>
    </div>
    </div>
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${ans.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${ans.job}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ans.id}</li>
            <li class="list-group-item">Email: <a href="${ans.email}">${ans.email}</a></li>
            <li class="list-group-item">School: ${ans.school}</li>
        </ul>
    </div>
    </div>
    
            </div>
        </div>
    </div>
</body>
</html>
    `)
})