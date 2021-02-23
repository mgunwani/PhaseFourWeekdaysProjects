
/**
 * Object Literal
 */

// Empty Object Literal
var person = {}
person.firstName = "Bhawna";
person.lastName = "Gunwani"

// Define Object Literal with Properties:
var person = {
    fname: 'King',
    lname: 'Kochhar'
}

// Define Object Literal with Properties and Methods:
var person = {
    fname: 'King',
    lname: 'Kochhar',
    getFullName: function () {
        console.log(`${this.fname} ${this.lname}!!`);
    }
}

// Access the props and methods of person object
console.log(person.fname);
console.log(person.lname);
console.log(person["fname"])
console.log(person["lname"])
person.getFullName();
