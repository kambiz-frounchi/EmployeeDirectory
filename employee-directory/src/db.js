class Employee {
    constuctor (name, manager, department) {
        this.name = name;
        this.manager = manager;
        this.department = department;
    }
}


const employees = [];

employees.push(new Employee ("Kambiz Frounchi", "Brad Lawrence", "R&D"));
employees.push(new Employee ("Kaveh Frounchi", "Stacey Summers", "R&D"));
employees.push(new Employee ("Jenny Wang", "Brad Lawrence", "R&D"));
employees.push(new Employee ("Cassandra Bing", "Sarah Hashemi", "Finance"));
employees.push(new Employee ("Jacky Davis", "Sarah Hashemi", "Finance"));