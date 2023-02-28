function employees(inputArr) {
    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }
    }

    for (const employee of inputArr) {
        let employeeObj = new Employee(employee, employee.length);
        console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.personalNumber}`);
    }
}

employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])