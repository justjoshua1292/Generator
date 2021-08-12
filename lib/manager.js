const Employee = require('./employee.js');

class Manager extends Employee {
// properties
    constructor(name, id, email, officeNumber) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;

// const newManager = new Manager("John", 1, "john@gmail.com", 12345)


// console.log(newManager.getRole())