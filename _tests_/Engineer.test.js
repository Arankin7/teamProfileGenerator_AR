const Engineer = require('../lib/Engineer');

test('Create new Engineer', () =>{
    const engineer = new Engineer('Anthony', '12345', 'email@gmail.com', 'githubUser');

    expect(engineer.name).toBe('Anthony');
    expect(engineer.id).toEqual('12345');
    expect(engineer.email).toBe('email@gmail.com');
    expect(engineer.github).toBe('githubUser');
});