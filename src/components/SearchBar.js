import React,{useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import { Autocomplete } from "@react-google-maps/api";

function SearchBar({setCoordinates}) {

    const [autocomplete, setAutocomplete] = useState(null);
    
    function onLoad(autoC) {
        setAutocomplete(autoC);
    }

    function onPlaceChanged(){
        //google Api functions
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({lat, lng});
    }


    return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>    
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
    </Autocomplete>    
)}

export default SearchBar;