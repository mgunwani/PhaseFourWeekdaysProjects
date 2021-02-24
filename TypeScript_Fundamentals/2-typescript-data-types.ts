
/**
 * 	String
 */

var fname: string = 'King';
var lname: string = "Kochhar";
console.log(fname + ' ' + lname)
console.log(`${fname} ${lname}!!`);

/**
 * Boolean
 */

var isPresent: boolean = true;
console.log(isPresent ? "Hello" : "Bye");

/*
 * Array
 */

var names: string[] = ["King", "John", "James"];
var ages: Array<Number> = [156, 45, 34];
var values: (string | number)[] = [1, 2, 3, "one", "two", "three"];
console.log(names);
console.log(ages);
console.log(values);
console.log("First Element of values array : " + values[0]);
console.log("Fourth Element of values array : " + values[3]);
console.log("Array Elements are: ");
for (var index in values) {
    console.log(values[index]);
}

/**
 * Tuple
 */

// var empId: number = 1001;
// var empName: string = "King Kochhar";
// var employee: [number, string] = [101, "John Smith"];
// console.log(employee);
var employee: [number, string][];
employee = [[101, "King"], [102, "Kochhar"], [103, "Smith"]];
console.log(employee);
console.log(employee[0])
console.log(employee[2]);

/**
 * Enum: Numeric, String, Heterogeneous
 */

enum Colors {
    Blue = "Active",
    White = 0,
    Green = 1,
    Black = "Dark"
}
function getColor(colorInitial: string): Colors {
    if (colorInitial === 'Bl' || colorInitial === 'bl') {
        return Colors.Black;
    }
}
var result: Colors = getColor('Bl');
console.log(result)

/**
 * Union
 */

var code: (string | number);
code = 1234;
console.log(code);
code = "U1234";
console.log(code);

/**
 * Any
 */

var something: any = 1234;
something = "Hello";
console.log(something);

/**
 * Void
 */

function addition1(num1: number, num2: number): void {
    console.log(num1 + num2);
}

function addition2(num1: number, num2: number): number {
    return num1 + num2;
}

addition1(10, 20);
console.log(addition2(100, 200));
