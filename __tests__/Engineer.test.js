const Employee = require('../lib/Employee');

test(`creates a Engineer Object`, () => {
  const employee = new Employee('John Doe',1,'johndoe@email.com','Engineer');
  expect(employee.name).toBe('John Doe');
  expect(employee.id).toBe(1);
  expect(employee.role).toBe('Engineer');
});