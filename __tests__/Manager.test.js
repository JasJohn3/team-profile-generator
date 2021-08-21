const Manager = require('../lib/Manager');
test(`creates a Manager Object`, () => {
  const manager = new Manager('John Doe',1,'johndoe@email.com');
  expect(manager.name).toBe('John Doe');
  expect(manager.id).toBe(1);
  expect(manager.email).toBe('johndoe@email.com');
  expect(manager.role).toBe('Manager');
});