const Manager = require('../lib/Manger');

test('Create new manager', () => {
    const manager =  new Manager('Anthony', '12345', 'email@gmail.com', '8675309');

    expect(manager.name).toBe('Anthony');
    expect(manager.id).toEqual('12345');
    expect(manager.email).toBe('email@gmail.com');
    expect(manager.officeNumber).toBe('8675309');
});