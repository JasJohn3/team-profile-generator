const inquirer = require('inquirer');
const employeeArray = [];
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const writeFile = require('./utils/writeFile.js');
const htmlGenerator = require('./src/htmlGenerator.js');

const managerPrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Team Manager name?',
    },
    {
      //Ask for the employee email
      type: 'input',
      name: 'id',
      message: 'What is the Manager Employee ID?',
    },
    {
      //Ask for the employee email
      type: 'input',
      name: 'email',
      message: 'What is the Manager email?',
    },
    {
      //Ask for the employee email
      type: 'input',
      name: 'officenumber',
      message: 'What is the Manager Office Number?',
    },
  ])
  .then((answers)=>{
    const {name, id, email, officenumber} = answers;
    const manager = new Manager(name, id, email, officenumber);
    employeeArray.push(manager);
    console.log(employeeArray);
  });
}
const promptTeam = teamData => {
  // If there's no 'projects' array property, create one
  if (!teamData) {
    teamData = [];
  }
    console.log(`
  =======================
   Add a New Team Member
  =======================
  `);
    return inquirer.prompt([

      {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Add a new team Member?',
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
        name: 'name',
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
        name: 'id',
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
        name: 'email',
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
        name: 'github',
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
        name: 'name',
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
        name: 'id',
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
        name: 'email',
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
        name: 'school',
        message: 'What is the Interns school?',
        when: ({role}) => {
          if (role === 'Intern') {
            return true;
          }else{
            return false;
          }
        },

      },

    ]).then((answers)=>{
      console.log(answers);
      if(answers.role === 'Engineer'){
        const {name, id, email, github} = answers;
        const engineer = new Engineer(name, id, email, github);
        employeeArray.push(engineer);
        console.log(employeeArray);
      }
      if(answers.role === 'Intern'){
        const {name, id, email, school} = answers;
        const intern = new Intern(name, id, email, school);
        employeeArray.push(intern);
        console.log(employeeArray);
      }
    }
    )
    .then(promptAddAnotherTeamMember);  
  };
const promptAddAnotherTeamMember = () => {
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmAddTeam',
      message: 'Add additional team members?',
      default: false
    }
  ])
  .then(answers => {
    if (answers.confirmAddTeam) {
    console.log('Adding a new team member');
    return promptTeam();
  }
  });
}

managerPrompt()
.then(promptTeam)
.then(()=>{
  writeFile(htmlGenerator(employeeArray));
});
