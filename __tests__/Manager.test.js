const Manager = require('../lib/Manager');
test(`creates a Manager Object`, () => {
  const manager = new Manager('John Doe',1,'johndoe@email.com',1);
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.role).toBe('Manager');
  expect(manager.officenumber).toEqual(expect.any(Number));

  expect(manager.getRole()).toBe('Manager');
});