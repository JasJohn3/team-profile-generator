import Employee from '../src/Employee';

test('creates a Employee Object', () => {
  const employee = new Employee('John Doe');
  expect(Employee.name).toBe('John Doe');
  expect(Employee.id).toEqual(expect.any(Number));
  expect(Employee.email).toEqual(expect.any(String));
  expect(employee.role).toBe('Employee');
});