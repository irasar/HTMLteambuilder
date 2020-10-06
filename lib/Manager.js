// code to define and export the Manager class. 
const Employee = require("./Employee")
//This class is inherited from Employee.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //super since same as all employees
        super(name, id, email);
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber;
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
        return "Manager";
    }
}
//exporting to get info to other file
module.exports = Manager;

