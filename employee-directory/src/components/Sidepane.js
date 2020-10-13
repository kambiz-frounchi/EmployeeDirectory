import React, { useState } from "react";
import "./style.css";

function Sidepane(props) {
    const [name, setName] = useState();

    const setNameFilter = (value) => {
        setName(value);
    }

    return (
        <div>
            <nav className="d-md-block bg-light sidebar">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                        aria-label="name"
                        aria-describedby="basic-addon2"
                        onChange = {e => setNameFilter(e.target.value)}/>
                    <div className="input-group-append">
                        <button id="filter-btn" className="btn btn-outline-secondary" type="button" onClick={() => {props.filterByName(name)}}>Filter</button>
                        <button id="sort-btn" className="btn btn-outline-secondary" type="button" onClick={props.removeFilterByName}>Undo Filter</button>
                        <button id="sort-btn" className="btn btn-outline-secondary" type="button" onClick={props.sortByName}>Sort</button>
                        <button id="sort-btn" className="btn btn-outline-secondary" type="button" onClick={props.sortByNameDescending}>Sort Descending</button>

                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Sidepane;