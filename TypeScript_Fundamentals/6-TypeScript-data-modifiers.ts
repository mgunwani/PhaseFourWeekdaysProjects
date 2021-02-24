
/**
 * Data Modifiers: Public, Private and Protected.
 */

// Public: By default, all members of a class in TS are public.
// Public members can be accessed anywhere without any restrictions.

// Private: Private modifier ensures that class members are visible only in the same context or class.

/*
class Employee {
    private empCode: number;
    private empName: string;
    constructor() {
        this.empCode = 1001;
        this.empName = "Shruti";
    }
    displayDetails(): void {
        console.log('Employee Details:');
        console.log('Employee Code: ' + this.empCode);
        console.log('Employee Name: ' + this.empName);
    }
}

var emp1 = new Employee();
emp1.displayDetails();
// console.log(emp1.empCode);
*/

// Protected Members are accessible in its own class and child class.

class Employee {
    protected empCode: number;
    protected empName: string;
    constructor(empCode: number, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }
}
class SalesEmployee extends Employee {
    private departmentName: string;
    constructor(empCode: number, empName: string, departmentName: string) {
        super(empCode, empName);
        this.departmentName = departmentName;
    }
    displayDetails(): void {
        console.log('Employee Details:');
        console.log('Employee Code: ' + this.empCode);
        console.log('Employee Name: ' + this.empName);
        console.log('Employee Name: ' + this.departmentName);
    }
}

var emp1: SalesEmployee = new SalesEmployee(101, "King", "Sales");
emp1.displayDetails();







