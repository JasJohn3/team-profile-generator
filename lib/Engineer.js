const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  
  //override employee's getRole() method
  getRole() {
    return this.role = 'Engineer';
  }

}

module.exports = Engineer;