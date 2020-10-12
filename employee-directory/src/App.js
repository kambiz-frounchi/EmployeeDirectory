import React, { useEffect, useState } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Sidepane from "./components/Sidepane";
import './bootstrap/dist/css/bootstrap.min.css';
import db from "./db";

function App() {
  
  const [employees, setEmployees] = useState();

  const populateEmployees = (employees) => {
    console.log(employees);
    if (employees) {
      return employees.map((employee, index) => {
        return <Card key={index} {...employee}/>;
      });
    }
  }

  useEffect(() => {
    setEmployees(db.employees);
  }, []);
  
  const filterByName = (name) => {
    console.log(name);
    const filteredEmployees = db.employees.filter((employee) => {
      console.log(employee);
      return ((employee.firstName === name) || (employee.lastName === name));
    });
  
    setEmployees(filteredEmployees);
  }
  
  const sortByName = () => {
    console.log("sortByName");
    const sortedEmployees = [...employees];
    sortedEmployees.sort((employeeA, employeeB) => {
      const firstNameA = employeeA.firstName.toUpperCase();
      const firstNameB = employeeB.firstName.toUpperCase();

      if (firstNameA < firstNameB) return -1;
      if (firstNameA > firstNameB) return 1;
      if (firstNameA === firstNameB) {
        const lastNameA = employeeA.lastName.toUpperCase();
        const lastNameB = employeeB.lastName.toUpperCase();
        if (lastNameA < lastNameB) return -1;
        if (lastNameA > lastNameB) return 1;
      }

      return 0;
    });
    console.log("sortedEmployees");
    console.log(sortedEmployees);
    setEmployees(sortedEmployees);
  }

  return (
    <div className="App">
      <Jumbotron/>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Sidepane 
              filterByName={(name) => filterByName(name)} 
              sortByName={sortByName}
            />  
          </div>
          <div id="employees-div" className="col-md-8">
            {populateEmployees(employees)}  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
