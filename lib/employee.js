class Employee {
    // properties
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // methods

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;


// OBBJECTS DATA

// const myEmployee1 = {
//     name: "John",
//     id: 1,
//     email: "john@mail.com"
// }

// const myEmployee2 = {
//     name: "Peter",
//     id: 2,
//     email: "peter@mail.com"
// }

// const myEmployee3 = new Employee("Mary", 3, "mary@mail.com")


// console.log(myEmployee2.getEmail())  // dot notation



