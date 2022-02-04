import React from 'react';
import {FaSearch} from 'react-icons/fa';

function SearchBar() {
    return (
    <div className="container">    
        <div className="row height d-flex justify-content-center my-5">
            <div className="col-md-5">
                <div className="form d-flex align-items-center justify-content-center input-group"> 
                    <input type="text" className="form-control form-input search-box " placeholder="Search anything..."/> 
                    <button className="btn btn-custom-yellow search-btn"><FaSearch /></button>
                </div>
            </div>
        </div>
    </div>     
)}

export default SearchBar;