//create and Employee class with name,id,email, getName(), getId(), getEmail(), getRole()
const uuidv4 =require('uuid');
class Employee {
  constructor(name, id, email, role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
  }

  getName() {
      return this.name;
  }

  getId() {
      return this.id;
  }

  getEmail() {
      return this.email;
  }

  getRole() {
      return this.role ='Employee';
  }
}

module.exports = Employee;