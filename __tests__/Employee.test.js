const Employee = require('../lib/employee.js');

test("Can start up an Employee instance", () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object")
})

test("Can set a name via constructor", () => {
    const employee = new Employee('John');

    expect(employee.name).toBe("John")
})


test("Can set an id via constructor", () => {
    const employee = new Employee('John', 1);

    expect(employee.id).toBe(1)
})

test("Can set an email via constructor", () => {
    const employee = new Employee('John', 1, "john@mail.com");

    expect(employee.email).toBe('john@mail.com')
})

test("Can get name via getName()", () => {
    const employee = new Employee('John');

    expect(employee.getName()).toBe("John")
})


test("Can get id via getId()", () => {
    const employee = new Employee('John', 1);

    expect(employee.getId()).toBe(1)
})

test("Can get email via getEmail()", () => {
    const employee = new Employee('John', 1, "john@mail.com");

    expect(employee.getEmail()).toBe('john@mail.com')
})


test("getRole() returns Employee", () => {
    const employee = new Employee('John', 1, "john@mail.com");

    expect(employee.getRole()).toBe('Employee')
})