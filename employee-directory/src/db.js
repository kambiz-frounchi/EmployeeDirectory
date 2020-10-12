class Employee {
    constructor (firstName, lastName, title, managerFirstName, managerLastName, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.managerFirstName = managerFirstName;
        this.managerLastName = managerLastName;
        this.department = department;
    }
}


const employees = [];

employees.push(new Employee ("Kambiz", "Frounchi", "Senior Software Engineer", "Brad", "Lawrence", "R&D"));
employees.push(new Employee ("Kaveh", "Frounchi", "Junior Software Engineer", "Stacey", "Summers", "R&D"));
employees.push(new Employee ("Jenny", "Wang", "Junior Test Engineer", "Brad", "Lawrence", "R&D"));
employees.push(new Employee ("Cassandra", "Bing", "Senior Accountant", "Sarah", "Hashemi", "Finance"));
employees.push(new Employee ("Jacky", "Davis", "Junior Accountant", "Sarah", "Hashemi", "Finance"));

const db = {employees: employees};

export default db;