const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, role, officenumber) {
    super(name, id, email, role);
    this.officenumber = officenumber;
  }
 getRole(){
   return this.role = "Manager";
 }
}

module.exports = Manager;