const Employee = require('../lib/Employee');

test('creates a Employee Object', () => {
  const employee = new Employee('John',1,'johndoe@email.com');
  expect(employee.name).toBe('John');
  expect(employee.id).toBe(1);
  expect(employee.email).toBe('johndoe@email.com');
  expect(employee.role).toBe('Employee');
});