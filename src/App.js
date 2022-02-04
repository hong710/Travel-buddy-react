import React, {useState, useEffect} from "react";
import {Autocomplete} from "@react-google-maps/api";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Service from "./components/Services";
import DestinationsTop from "./components/DestinationsTop";
import Search from "./components/SearchBar";
import List from "./components/List";
import Map from "./components/Map";

import {getPlacesData} from './api';


function App() {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState();
  
  //top right left bottom of google map coord 
  const [bounds,setBounds] = useState({})

  //get user location when the page load
  useEffect(() =>{
    //build-in browser API to get user position
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates ({lat: latitude, lng: longitude});
        })
  },[]);

  // Set coordinates and bounds when user move map
  useEffect (()=> {

    //assign the boundaries to api properties api/index
    getPlacesData(bounds.sw, bounds.ne)
    .then ((res) => {
      setPlaces(res);
    })
  },[coordinates, bounds]);


  return (
    <>
      <Nav />
      {/* <Autocomplete > */}
        <Search />
      {/* </Autocomplete> */}
      <div className="container">
        <div className="row">
          <div className="col-md-4"> 
            <List places = {places}/>
          </div>

          <div className="col-md-8"> 
            <Map 
              setCoordinates = {setCoordinates}
              setBounds = {setBounds}
              coordinates = {coordinates}

            />
          </div>
        </div>

      </div>
      
      {/* <Header />
      <Service />
      <DestinationsTop /> */}
    </>
  );
}

export default App;
