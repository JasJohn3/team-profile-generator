const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  //override employee's getRole() method
  getRole() {
    return this.role = 'Intern';
  }
}

module.exports = Intern;