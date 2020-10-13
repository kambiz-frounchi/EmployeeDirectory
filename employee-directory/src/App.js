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
    if (employees) {
      return employees.map((employee, index) => {
        return <Card key={index} {...employee}/>;
      });
    }
  }

  useEffect(() => {
    setEmployees(db.employees);
  }, []);

  //find any employees that include the input name in their first or last name
  const filterByName = (name) => {
    const filteredEmployees = db.employees.filter((employee) => {
      const nameCaps = name.toUpperCase();
      const firstNameCaps = employee.firstName.toUpperCase();
      const lastNameCaps = employee.lastName.toUpperCase();
      return (firstNameCaps.includes(nameCaps) || lastNameCaps.includes(nameCaps));
    });

    setEmployees(filteredEmployees);
  }

  //undo name filter
  const removeFilterByName = () => {
    setEmployees(db.employees);
  }
  
  //sort in ascending order using firstName and then last name
  const sortByName = () => {
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

    setEmployees(sortedEmployees);
  }

  //sort in descending order using first name and then last name
  const sortByNameDescending = () => {
    const sortedEmployees = [...employees];
    sortedEmployees.sort((employeeA, employeeB) => {
      const firstNameA = employeeA.firstName.toUpperCase();
      const firstNameB = employeeB.firstName.toUpperCase();

      if (firstNameA < firstNameB) return 1;
      if (firstNameA > firstNameB) return -1;
      if (firstNameA === firstNameB) {
        const lastNameA = employeeA.lastName.toUpperCase();
        const lastNameB = employeeB.lastName.toUpperCase();
        if (lastNameA < lastNameB) return 1;
        if (lastNameA > lastNameB) return -1;
      }

      return 0;
    });

    setEmployees(sortedEmployees);
  };

  return (
    <div className="App">
      <Jumbotron/>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Sidepane 
              filterByName={(name) => filterByName(name)} 
              sortByName={sortByName}
              removeFilterByName={removeFilterByName}
              sortByNameDescending ={sortByNameDescending}
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
