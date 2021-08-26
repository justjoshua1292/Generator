const Engineer = require('../lib/engineer.js');


test("Can start up an Engineer instance", () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe("object")
})

test("Can set a name via constructor", () => {
    const engineer = new Engineer('John');

    expect(engineer.name).toBe("John")
})


test("Can set an id via constructor", () => {
    const engineer = new Engineer('John', 1);

    expect(engineer.id).toBe(1)
})

test("Can set an email via constructor", () => {
    const engineer = new Engineer('John', 1, "john@mail.com");

    expect(engineer.email).toBe('john@mail.com')
})



test("Can get name via getName()", () => {
    const engineer = new Engineer('John');

    expect(engineer.getName()).toBe("John")
})


test("Can get id via getId()", () => {
    const engineer = new Engineer('John', 1);

    expect(engineer.getId()).toBe(1)
})

test("Can get email via getEmail()", () => {
    const engineer = new Engineer('John', 1, "john@mail.com");

    expect(engineer.getEmail()).toBe('john@mail.com')
})


test("Can get github username/address via getGithub()", () => {
    const engineer = new Engineer('John', 1, "john@mail.com", "https://github.com/johnmail",);

    expect(engineer.getGithub()).toBe('https://github.com/johnmail')
})