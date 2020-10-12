import React, { useState } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Sidepane from "./components/Sidepane";
import './bootstrap/dist/css/bootstrap.min.css';
import db from "./db";

function App() {
  
  const populateEmployees = (employees) => {
    let employeesArray = [];
    if (employees) {
      employeesArray = employees;
    } else {
      employeesArray = db.employees;
    }
  
    console.log("populateEmployees");
    console.log(employeesArray);
  
    return employeesArray.map((employee, index) => {
      return <Card key={index} {...employee}/>;
    });
  }
  
  const filterByName = (name) => {
    console.log(name);
    const filteredArray = db.employees.filter((employee) => {
      console.log(employee);
      return ((employee.firstName === name) || (employee.lastName === name));
    });
  
    console.log(filteredArray);
    return filteredArray;
  }
  
  const sortByName = () => {
    console.log("sortByName");
    const employees = [...db.employees];
    return employees.sort();
  }

  return (
    <div className="App">
      <Jumbotron/>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Sidepane 
              populateFilterByName={(name) => populateEmployees(filterByName(name))} 
              populateSortByName={() => populateEmployees(sortByName())}
            />  
          </div>
          <div id="employees-div" className="col-md-8">
            {populateEmployees()}  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
