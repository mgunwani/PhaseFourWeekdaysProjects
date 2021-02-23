
// Definition: Simple Function
function sayHello() {
    console.log('Hello User!!');
}

// Calling: Simple Function
sayHello();
sayHello();

// ---------------------------------------------------- //


// Definition: Parameterized Function
function getFullName(fname, lname) {
    // console.log(fname + ' ' + lname + "!!");
    console.log(`${fname} ${lname}!!`);
}

// Calling: Parameterized Function
getFullName('King', 'Kochhar');
getFullName('King', 'Kochhar', 'Smith');
getFullName(100, 200);
getFullName('King');
getFullName();

// ---------------------------------------------------- //

// Definition: Parameterized Function with return statement
function getFullName(fname, lname) {
    return `${fname} ${lname}!!`;
}

// Calling: Parameterized Function with return statement
var result = getFullName('James', 'Bond');
console.log(result);
console.log(getFullName('Bhawna', 'Gunwani'));

// ---------------------------------------------------- //

// Definition: Function Expression
var printFullName = function getFullName1(fname, lname) {
    console.log(`${fname} ${lname}!!`);
}

// Calling: Function Expression
printFullName('Bhawna', 'Gunwani');

// ---------------------------------------------------- //

// Definition: UnNamed or Annonymous Function
var printFullName = function (fname, lname) {
    console.log(`${fname} ${lname}!!`);
}

// Calling: Function Expression
printFullName('Bhawna', 'Gunwani');

// ---------------------------------------------------- //

// Definition: Nested Function
function ShowMessage(fname) {
    function sayHello() {
        console.log('Hello ' + fname);
    }
    return sayHello();
}

// Calling: Nested Function
ShowMessage('Bhawna');








