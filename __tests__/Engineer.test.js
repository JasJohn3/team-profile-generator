const Engineer = require('../lib/Engineer');

test(`creates a Engineer Object`, () => {
  const engineer = new Engineer('John Doe',1,'johndoe@email.com','jasjohn3');
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.role).toBe('Engineer');
  expect(engineer.github).toEqual(expect.any(String));

  expect(engineer.getRole()).toBe('Engineer');
});