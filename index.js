const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the Employee name?',
  },
  {
    //Ask for the employee email
    type: 'input',
    name: 'email',
    message: 'What is the Employee email?',
  },
  {
    type: 'input',
    name: 'color',
    message: 'What is your favorite color?',
    default: 'World',
  },
  {
    type: 'input',
    name: 'food',
    message: 'What is your favorite food?',
    default: 'World',
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    fs.writeFileSync(
      path.resolve(__dirname, '../answers.json'),
      JSON.stringify(answers)
    );
    console.log('Answers saved to answers.json');
  })
  .catch((err) => {
    console.log(err);
  });
