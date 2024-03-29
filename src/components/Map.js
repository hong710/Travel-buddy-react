import React from 'react';
import {IoStar} from 'react-icons/io5';
import GoogleMapReact from 'google-map-react';

const mapStyles = {
    width:  '100%',
    height: '890px'
    };

function Map({setCoordinates, setBounds, coordinates, places, setSelectedPlace, setSwitchSelected, loggedInUsername}) {

    const filterPlaces = places?.filter(place =>place.name);


    return (
        <div className="mt-5" style={mapStyles}> 
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter ={coordinates}
                center = {coordinates}
                defaultZoom = {14}
                margin= {[50,50,50,50]}
                options = {{disableDefaultUI: true, zoomControl: true }}
                onChange= {(e) =>{
                    setCoordinates({lat: e.center.lat ,lng: e.center.lng});
                    setBounds ({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick = {(child)=> {
                    setSelectedPlace (filterPlaces[child]);
                    setSwitchSelected(true);
                } }
            >

                {filterPlaces?.map( (place,index) => (
                    <div 
                        lat={Number(place.latitude)}
                        lng = {Number(place.longitude)}
                        key ={index}
                    >
                        {/* <IoLocationSharp className = "display-6 text-danger"/> */}
                        <div className="location-card shadow">
                            <img src={place.photo ? place.photo.images.large.url :'https://images.unsplash.com/photo-1618597017017-7ce39f28eb41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'} className="location-img" alt="..." />
                            <p className="text-center fw-bold pt-2">{place.name}</p>
                            <p  className="text-center">{place.rating}<IoStar className="text-warning"/></p>
                        </div>
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map;
