const Employee = require('../lib/Employee');

test('creates a Employee Object', () => {
  const employee = new Employee('John',1,'johndoe@email.com');
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.role).toBe(undefined);

  expect(employee.getRole()).toEqual('Employee');
});