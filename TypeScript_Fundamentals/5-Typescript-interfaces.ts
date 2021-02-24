/*
interface IPerson {
    name: string;
    display(): void;
}

interface IEmployee {
    empCode: number;
}

class Employee implements IPerson, IEmployee {
    empCode: number;
    name: string;
    constructor(name: string, empCode: number) {
        this.empCode = empCode;
        this.name = name;
    }
    display(): void {
        console.log("Employee Name : " + this.name);
        console.log("Employee Code : " + this.empCode);
    }
}

var obj1: IPerson = new Employee('King', 1001);
obj1.display();

var obj2: IEmployee = new Employee('Kochhar', 1002);
console.log("Employee Code : " + obj2.empCode);
*/

