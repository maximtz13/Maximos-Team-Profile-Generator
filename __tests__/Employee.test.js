const Employee = require('../lib/Employee');

test('creates "employee" object', () => {
    const employee = new Employee('John', 1, 'john@test.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
    const employee = new Employee('John', 1, 'john@test.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employee's ID", () => {
    const employee = new Employee('John', 1, 'john@test.com');

    expect(employee.getID()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
    const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("gets role of employee", () => {
    const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 