const Engineer = require('../lib/Engineer');

test(`creates a Engineer Object`, () => {
  const engineer = new Engineer('John Doe',1,'johndoe@email.com');
  expect(engineer.name).toBe('John Doe');
  expect(engineer.id).toBe(1);
  expect(engineer.role).toBe('Engineer');
});