const Employee = require('../lib/Employee');

test ('Generates new employee', () => {
    const employee = new Employee('Anthony', '12345', 'email@gmail.com');

    expect(employee.name).toBe("Anthony");
    expect(employee.id).toEqual("12345");
    expect(employee.email).toBe("email@gmail.com");
});