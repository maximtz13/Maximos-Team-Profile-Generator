const Employee = require('../lib/Employee');

test('creates "employee" object', () => {
    const employee = new Employee('John', 1, 'john@test.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});