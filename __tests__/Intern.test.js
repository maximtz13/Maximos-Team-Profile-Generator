const Intern = require('../lib/Intern');

test("creates 'intern' object", () => {
    const intern = new Intern('john', 1, 'john@test.com', 'TEST University');
    expect(intern.school).toEqual(expect.any(String));
});

test("gets employee's school", () => {
    const intern = new Intern('john', 1, 'john@test.com', 'TEST University');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of intern', () => {
    const intern = new Intern('john', 1, 'john@test.com', 'TEST University');
    expect(intern.getRole()).toEqual("Intern");
});