const Manager = require('../lib/Manager');

// Verifies role is Manager instead of Employee
test('gets role of employee' , () => {
    const manager = new Manager('John', 1, 'john@test.com', '200-200-2000');
    expect(manager.getRole()).toEqual('Manager');
});

test('creates a manager object', () => {
    const manager = new Manager('John', 1, 'john@test.com', '200-200-2000');

    expect(manager.officeNumber).toEqual(expect.any(String));
});