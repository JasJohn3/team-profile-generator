const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, role) {
    super(name, id, email, role);
    this.role = 'Intern';
  }

}

module.exports = Intern;