const Intern = require('../lib/Intern');

test('Create new Intern', () => {
    const intern = new Intern('Anthony', '12345', 'email@gmail.com', 'Rutgers');

    expect(intern.name).toBe('Anthony');
    expect(intern.id).toEqual('12345');
    expect(intern.email).toBe('email@gmail.com');
    expect(intern.school).toBe('Rutgers');
});