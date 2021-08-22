const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const questions = [
  {
    type: 'input',
    name: 'manager',
    message: 'What is the Team Manager name?',
  },
  {
    //Ask for the employee email
    type: 'input',
    name: 'managerEID',
    message: 'What is the Manager Employee ID?',
  },
  {
    //Ask for the employee email
    type: 'input',
    name: 'managerEmail',
    message: 'What is the Manager email?',
  },
  {
    //Ask for the employee email
    type: 'input',
    name: 'managerOID',
    message: 'What is the Manager Office Number?',
  },
  {
    type: 'confirm',
    name: 'addEmployee',
    message: 'Would you like to add a new team Member?',
    default: true,
  },
  {
    type: 'list',
    name: 'role',
    message: 'What is the Employee role?',
    choices: ['Engineer','Intern'],
    when:({addEmployee}) => {
      if (addEmployee) {
        return true;
      }else{
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'engineerName',
    message: 'What is the Engineers Name?',
    when: ({role}) => {
      if (role === 'Engineer') {
        return true;
      }else{
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'engineerEID',
    message: 'What is the Engineers Employee ID?',
    when: ({role}) => {
      if (role === 'Engineer') {
        return true;
      }else{
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: 'What is the Engineers Email?',
    when: ({role}) => {
      if (role === 'Engineer') {
        return true;
      }else{
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'engineerGithub',
    message: 'What is the Engineers Github?',
    when: ({role}) => {
      if (role === 'Engineer') {
        return true;
      }else{
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'internName',
    message: 'What is the intern Name?',
    when: ({role}) => {
      if (role === 'Intern') {
        return true;
      }else{
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'internEID',
    message: 'What is the intern Employee ID?',
    when: ({role}) => {
      if (role === 'Intern') {
        return true;
      }else{
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'internEmail',
    message: 'What is the intern Email?',
    when: ({role}) => {
      if (role === 'Intern') {
        return true;
      }else{
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'internSchool',
    message: 'What is the Interns school?',
    when: ({role}) => {
      if (role === 'Intern') {
        return true;
      }else{
        return false;
      }
    }
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    fs.writeFileSync(
      path.resolve(__dirname, './answers.json'),
      JSON.stringify(answers)
    );
    console.log('Answers saved to answers.json');
  })
  .catch((err) => {
    console.log(err);
  });
