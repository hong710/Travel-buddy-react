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
        <div id="search-box">
            <div className="row d-flex ">
                <div className="">
                    <div className="form"> <FaSearch className="fa fa-search">
                        </FaSearch> <input type="text" className="form-control form-input" placeholder="Search anything..."/>
                    </div>
                </div>
            </div>
        </div>
    </Autocomplete>  
)}

export default SearchBar;