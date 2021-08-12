const Employee = require('./employee.js');

class Intern extends Employee {
// properties
    constructor(name, id, email, school) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email)
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
