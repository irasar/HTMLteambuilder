// code to define and export the Engineer class.  
const Employee = require("./Employee");
// class inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //super since same as all employees
        super(name, id, email);
        this.github = github;
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

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}
//exporting to get info to other file
module.exports = Engineer;



