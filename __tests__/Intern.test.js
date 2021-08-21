const Intern = require('../lib/Intern');

test(`creates a Intern Object`, () => {
  const intern = new Intern('John Doe',1,'johndoe@email.com');
  expect(intern.name).toBe('John Doe');
  expect(intern.id).toBe(1);
  expect(intern.email).toBe('johndoe@email.com');
  expect(intern.role).toBe('Intern');
});