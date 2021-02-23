
var num1 = 100;
console.log(num1);

var num2 = new Number(100);
console.log(num2);

// ---------------------------------- //

var str1 = "Hello World";
var str2 = 'Hello World';
var str3 = "Lets Learn 'JavaScript' Scripting Language"
var str4 = 'Lets Learn "JavaScript" Scripting Language'
var str5 = 'Lets Learn \'JavaScript\' Scripting Language'
var str6 = "Lets Learn \"JavaScript\" Scripting Language"
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);

// -------------------------------------- / / 

var isGraduate = true;
console.log(isGraduate)
// isGraduate = false;
// console.log(isGraduate)
if (isGraduate)
    console.log('WOW')
else
    console.log('OOPS')

// -------------------------------------- // 

// null value means absence.
// undefined value means lack of value.
// A null and undefined value evaluates to false in conditional expression.

// Lack of value
var val1;
console.log(val1);
if (val1)
    console.log('WOW value1 is there..')
else
    console.log('OOPS value1 is not available.');


// Lack of value
var val2 = null;
console.log(val2);

console.log(val2);
if (val2)
    console.log('WOW value2 is there..')
else
    console.log('OOPS value2 is not available.')

