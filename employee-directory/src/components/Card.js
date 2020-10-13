import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div id="employee-card" className="card">
            <div className="card-body">
                <h5 className="card-title"><strong>{props.firstName} {props.lastName}</strong></h5>
                <h6 className="card-subtitle mb-2"><strong>Title: </strong>{props.title}</h6>
                <h6 className="card-subtitle mb-2"><strong>Department: </strong>{props.department}</h6>
                <h6 className="card-subtitle mb-2"><strong>Manager: </strong>{props.managerFirstName} {props.managerLastName}</h6>
            </div>
        </div>   
    );
}


export default Card;