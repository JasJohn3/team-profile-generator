import Employee from '../src/Employee';
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
test(`Employee`, () => {
  const employee = new Employee('John Doe',1,'johndoe@email.com');
  expect(Employee.name).toBe('John Doe');
  expect(Employee.id).toBe(1);
  expect(Employee.email).toBe('johndoe@email.com');
  expect(employee.role).toBe('Engineer');
});