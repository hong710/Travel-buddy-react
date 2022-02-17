import React from 'react';
import PlaceDetails from './PlaceDetails';
import SelectedDetail from './SelectedDetail';

const listStyles = {
    };

function List({places, isLoading, selectedPlace, switchSelected, setSwitchSelected, type, setType, rating,setRating}) {

    function onChangeType (e){
        setType(e.target.value);
    }

    function onChangeRating (e){
        setRating(e.target.value);
    }
    return (
        <div className="mt-5">

            <div className="d-flex justify-content-between mb-5">
                <select value={type} onChange={onChangeType} className="form-select">
                    <option value="restaurants">Restaurant</option>
                    <option value="hotels">Hotels</option>
                    <option value="attractions">Attractions</option>
                </select>

                <select value={rating} onChange={onChangeRating} className="form-select">
                    <option value={0}>All</option>
                    <option value={3}>Above 3.0</option>
                    <option value={4}>Above 4.0</option>
                    <option value={4.5}>Above 4.5</option>
                </select>
            </div>

            {isLoading 
            ?(
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <div className="visually-hidden text-center">Loading...</div>
                    </div>
                </div>
            ): 
            (
            <>
                <div className=" overflow-auto list-hw" style={listStyles} >
                {
                    switchSelected
                    ? (
                            <SelectedDetail place = {selectedPlace} setSwitchSelected={setSwitchSelected}/>
                    )
                    :    
                    places?.filter(place =>place.name && place.ranking_category).map( (place,index) => {
                        console.log(place)
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
