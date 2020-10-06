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

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
