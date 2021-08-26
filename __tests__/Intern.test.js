const Intern = require('../lib/intern.js');


test("Can start up an Intern instance", () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe("object")
})

test("Can set a name via constructor", () => {
    const intern = new Intern('John');

    expect(intern.name).toBe("John")
})


test("Can set an id via constructor", () => {
    const intern = new Intern('John', 1);

    expect(intern.id).toBe(1)
})

test("Can set an email via constructor", () => {
    const intern = new Intern('John', 1, "john@mail.com");

    expect(intern.email).toBe('john@mail.com')
})


test("Can get name via getName()", () => {
    const intern = new Intern('John');

    expect(intern.getName()).toBe("John")
})


test("Can get id via getId()", () => {
    const intern = new Intern('John', 1);

    expect(intern.getId()).toBe(1)
})

test("Can get email via getEmail()", () => {
    const intern = new Intern('John', 1, "john@mail.com");

    expect(intern.getEmail()).toBe('john@mail.com')
})


test("getSchool() returns school", () => {
    const intern = new Intern('John', 1, "john@mail.com, ");

    expect(intern.getRole()).toBe('Intern')
})