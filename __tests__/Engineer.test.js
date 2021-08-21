const Engineer = require('../lib/Engineer');

test(`creates a Engineer Object`, () => {
  const engineer = new Engineer('John Doe',1,'johndoe@email.com');
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.role).toBe(undefined);

  expect(engineer.getRole()).toBe('Engineer');
});