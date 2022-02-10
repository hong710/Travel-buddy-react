import React, {useState} from 'react';
import PlaceDetails from './PlaceDetails';

const listStyles = {
    width:  '100%',
    height: '800px',
    };

function List({places, isLoading}) {

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
                <div className=" overflow-auto" style={listStyles}>
                {
                    
                    places?.filter(place =>place.name).map( (place,index) => {
                        //console.log(place)
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
