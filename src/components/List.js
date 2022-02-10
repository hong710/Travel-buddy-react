import React, {useState} from 'react';
import PlaceDetails from './PlaceDetails';
import SelectedDetail from './SelectedDetail';

const listStyles = {
    };

function List({places, isLoading, selectedPlace, switchSelected, setSwitchSelected}) {

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');


    function onChangeType (e){
        setType(e.target.value);
    }

    function onChangeRating (e){
        setRating(e.target.value);
    }
    return (
        <div className="">

            <h5> Restaurant, Hotels & Attractions around you</h5>
            {isLoading 
            ?(
                <div className="spinner-border d-grid" role="status">
                    <span className="visually-hidden grid-center">Loading...</span>
                </div>
            ): 
            (
            <>
                <div className="d-flex justify-content-between mb-5">
                    <select value={type} onChange={onChangeType} className="form-select">
                        <option value="restaurants">Restaurant</option>
                        <option value="hotels">Hotels</option>
                        <option value="attractions">Attractions</option>
                    </select>

                    <select value={rating} onChange={onChangeRating} className="form-select">
                        <option>Rating</option>
                        <option value={0}>All</option>
                        <option value={3}>Above 3.0</option>
                        <option value={4}>Above 4.0</option>
                        <option value={4.5}>Above 4.5</option>
                    </select>
                </div>
                
                <div className=" overflow-auto list-hw" style={listStyles} >
                {
                    switchSelected
                    ? (
                            <SelectedDetail place = {selectedPlace} setSwitchSelected={setSwitchSelected}/>
                    )
                    :    
                    places?.filter(place =>place.name).map( (place,index) => {
                        return(
                            
                                <PlaceDetails 
                                    key={index} 
                                    place = {place}
                                />     
                        )}     
                )}
                </div>
            </>
            )
            }
        </div>
    
    )
}


export default List;
