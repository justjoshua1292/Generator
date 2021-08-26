const Manager = require('../lib/manager.js');
const Manager = require('../lib/manager.js');

test("Can instantiate an Manager instance", () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe("object")
})

test("Can set a name via constructor", () => {
    const manager = new Manager('John');

    expect(manager.name).toBe("John")
})


test("Can set an id via constructor", () => {
    const manager = new Manager('John', 1);

    expect(manager.id).toBe(1)
})

test("Can set an email via constructor", () => {
    const manager = new Manager('John', 1, "john@mail.com");

    expect(manager.email).toBe('john@mail.com')
})

test("Can set an officeNumber via constructor", () => {
    const manager = new Manager('John', 1, "john@mail.com", 12345);

    expect(manager.officeNumber).toBe(12345)
})




test("Can get name via getName()", () => {
    const manager = new Manager('John');

    expect(manager.getName()).toBe("John")
})


test("Can get id via getId()", () => {
    const manager = new Manager('John', 1);

    expect(manager.getId()).toBe(1)
})

test("Can get email via getEmail()", () => {
    const manager = new Manager('John', 1, "john@mail.com");

    expect(manager.getEmail()).toBe('john@mail.com')
})


test("getRole() returns Manager", () => {
    const manager = new Manager('John', 1, "john@mail.com");

    expect(manager.getRole()).toBe('Manager')
})