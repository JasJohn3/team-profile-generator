//create and Employee class with name,id,email, getName(), getId(), getEmail(), getRole()
class Employee {
  constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = this.getRole();
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