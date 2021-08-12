const Employee = require('./employee.js');

class Engineer extends Employee {
// properties
    constructor(name, id, email, github) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email)
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;
