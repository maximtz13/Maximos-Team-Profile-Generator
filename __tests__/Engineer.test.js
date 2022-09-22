const Engineer = require('../lib/Engineer');

test("creates 'engineer' object", () => {
    const engineer = new Engineer('john', 1, 'john@test.com', 'john01');
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets value for engineer's github", () => {
    const engineer = new Engineer('john', 1, 'john@test.com', 'john01');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of engineer', () => {
    const engineer = new Engineer('john', 1, 'john@test.com', 'john01');
    expect(engineer.getRole()).toEqual('Engineer');
});