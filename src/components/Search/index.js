import React from "react";
import "./style.css";
//Input to search by technology, listens for handleinputchange that triggers the useEffect using debounced, changing displayed users based on words typed
//props.value to be grabbed by handleinputchange
function Search() {
    return (
        <div className="col-4 mt-3 justify-content-center">
            <input
            // value={props.value}
            // onChange={props.handleInputChange}
            className="form-control mb-3" 
            type="text" 
            placeholder="Enter Technology" 
            />
        </div>
    );
};

export default Search;
