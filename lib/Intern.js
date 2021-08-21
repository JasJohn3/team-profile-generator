const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, role) {
    super(name, id, email, role);
  }
  //override employee's getRole() method
  getRole() {
    return this.role = 'Intern';
  }
}

module.exports = Intern;