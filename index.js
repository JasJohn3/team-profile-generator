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
  ]);
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
        },

      },

    ]).then((answers)=>{
      console.log(answers);
      if(answers.role === 'Engineer'){
        const engineer = new Engineer(answers.engineerName, answers.engineerEID,answers.engineerEmail,answers.engineerGithub);
        employeeArray.push(engineer);
        console.log(employeeArray);
      }
      if(answers.role === 'Intern'){
        const intern = new Intern(answers.internName, answers.internEID,answers.internEmail,answers.internSchool);
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
.then((answers)=>{
  const manager = new Manager(answers.manager, answers.managerEID,answers.managerEmail,answers.managerOID);
  employeeArray.push(manager);
  console.log(employeeArray);
})
.then(promptTeam)
.then(() => {
  console.log(employeeArray);
});

writeFile(htmlGenerator(employeeArray));