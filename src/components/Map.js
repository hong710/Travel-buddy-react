import React,{useState} from 'react';
import {IoLocationSharp, IoStar} from 'react-icons/io5';
import GoogleMapReact from 'google-map-react';



const mapStyles = {
    width:  '100%',
    height: '800px'
    };

function Map({setCoordinates, setBounds, coordinates, places}) {

    const filterPlaces = places?.filter(place =>place.name);
    return (
        <div className="" style={mapStyles}> 
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyDpx87EIP0wdi4B2qQKdJopBGyttVzyYLA' }}
                defaultCenter ={coordinates}
                center = {coordinates}
                defaultZoom = {14}
                margin= {[50,50,50,50]}
                options = {''}
                onChange= {(e) =>{
                    setCoordinates({lat: e.center.lat ,lng: e.center.lng});
                    setBounds ({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick = {((filterPlaces)=>{ })}


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
