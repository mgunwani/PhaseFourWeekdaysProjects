/**
 * Data Modifiers: Public, Private and Protected.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Employee = /** @class */ (function () {
    function Employee(empCode, empName) {
        this.empCode = empCode;
        this.empName = empName;
    }
    return Employee;
}());
var SalesEmployee = /** @class */ (function (_super) {
    __extends(SalesEmployee, _super);
    function SalesEmployee(empCode, empName, departmentName) {
        var _this = _super.call(this, empCode, empName) || this;
        _this.departmentName = departmentName;
        return _this;
    }
    SalesEmployee.prototype.displayDetails = function () {
        console.log('Employee Details:');
        console.log('Employee Code: ' + this.empCode);
        console.log('Employee Name: ' + this.empName);
        console.log('Employee Name: ' + this.departmentName);
    };
    return SalesEmployee;
}(Employee));
var emp1 = new SalesEmployee(101, "King", "Sales");
emp1.displayDetails();
