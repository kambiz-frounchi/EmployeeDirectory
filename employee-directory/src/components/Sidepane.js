import React, { useState } from "react";

function Sidepane(props) {
    const [name, setName] = useState();

    const setNameFilter = (value) => {
        console.log(value);
        setName(value);
    }

    return (
        <div>
            <nav id="sidebarMenu" className="d-md-block bg-light sidebar collapse">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                        aria-label="name"
                        aria-describedby="basic-addon2"
                        onChange = {e => setNameFilter(e.target.value)}/>
                    <div className="input-group-append">
                        <button id="filter-btn" className="btn btn-outline-secondary" type="button" onClick={() => {props.populateFilterByName(name)}}>Filter</button>
                        <button id="sort-btn" className="btn btn-outline-secondary" type="button" onClick={props.populateSortByName}>Sort</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Sidepane;