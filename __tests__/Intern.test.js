const Intern = require('../lib/Intern');

test(`creates a Intern Object`, () => {
  const intern = new Intern('John Doe',1,'johndoe@email.com', 'uat');
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.role).toBe('Intern');
  expect(intern.school).toEqual(expect.any(String));

  expect(intern.getRole()).toBe('Intern');
});