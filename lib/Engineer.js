const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, role) {
    super(name, id, email, role);
    this.role = 'Engineer';
  }

}

module.exports = Engineer;