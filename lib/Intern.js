// code to define and export the Intern class.  
const Employee = require("./Employee");
//This class is inherited from Employee.
class Intern extends Employee {
    constructor(name, id, email, school) {
        //super since same as all employees
        super(name, id, email);
        this.school = school;
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

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}
//exporting to get info to other file
module.exports = Intern;


