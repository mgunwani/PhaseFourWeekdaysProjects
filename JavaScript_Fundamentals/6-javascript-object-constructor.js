
/**
 * Object Constructor
 */

// function Customer() {
//     // Properties
//     this.firstName = "John";
//     this.lastName = "Smith"
//     this.age = 23;
//     // Methods
//     this.getFullName = function () {
//         console.log(`${this.firstName} ${this.lastName}!!`);
//     }
//     this.displayDetails = function () {
//         console.log('Customer Details : ');
//         console.log('First Name : ' + this.firstName);
//         console.log('Last Name : ' + this.lastName);
//         console.log('Age : ' + this.age);
//     }
// }

// var c1 = new Customer();
// c1.displayDetails();

// First Way:
// var c1 = new Customer();
// console.log(c1.firstName);
// console.log(c1.lastName);
// console.log(c1["age"]);
// c1.getFullName();


// ---------------------------------------------------- //

function Customer(fname, lname, age) {
    // Properties
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    // Methods
    this.getFullName = function () {
        console.log(`${this.firstName} ${this.lastName}!!`);
    }
    this.displayDetails = function () {
        console.log('Customer Details : ');
        console.log('First Name : ' + this.firstName);
        console.log('Last Name : ' + this.lastName);
        console.log('Age : ' + this.age);
    }
}

var c1 = new Customer('Sarah', 'Bowling', 23);
c1.displayDetails();

var c2 = new Customer('James', 'Bond', 30);
c2.displayDetails();




















