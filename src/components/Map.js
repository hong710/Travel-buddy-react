import React from 'react';
import {IoLocationOutline} from 'react-icons/io5';
import GoogleMapReact from 'google-map-react';


const mapStyles = {
    width:  '100%',
    height: '800px'
    };

function Map({setCoordinates, setBounds, coordinates}) {


    return (
        <div className="" style={mapStyles}> 
            MAP
            <GoogleMapReact
                bootstrapURLKeys={{key: '' }}
                defaultCenter ={coordinates}
                center = {coordinates}
                defaultZoom = {14}
                margin= {[50,50,50,50]}
                options = {''}
                onChange= {(e) =>{
                    setCoordinates({lat: e.center.lat ,lng: e.center.lng});
                    setBounds ({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map;
