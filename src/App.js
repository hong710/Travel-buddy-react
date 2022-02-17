import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Service from "./components/Services";
import DestinationsTop from "./components/DestinationsTop";
import Login from "./components/Login";
import Signup from "./components/Signup";
import List from "./components/List";
import Map from "./components/Map";
import Bookmark from "./components/Bookmark";

import { getPlacesData } from "./api";

function App() {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState();
	const [ratingPlaces, setRatingPlaces] = useState([]);
    //top right left bottom of google map coord
    const [bounds, setBounds] = useState({});
    //lift state from Map to List
    const [selectedPlace, setSelectedPlace] = useState({});
    const [switchSelected, setSwitchSelected] = useState(false);
	const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

	


    //loading state;
    const [isLoading, setIsLoading] = useState(false);

    //get user location when the page load
    useEffect(() => {
        setIsLoading(true);
        //build-in browser API to get user position
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoordinates({ lat: latitude, lng: longitude });
            }
        );
    }, []);

    // Set coordinates and bounds when user move map
    useEffect(() => {
		if(bounds.sw && bounds.ne){
			//loading Data progress
			setIsLoading(true);
			//assign the boundaries to api properties api/index
			getPlacesData(type, bounds.sw, bounds.ne)
			.then((res) => {
				setPlaces(res);
				setRatingPlaces([]);
				setIsLoading(false);
			});
		}
    }, [type, bounds]);


	const loginAPI = "http://localhost:3000/api/v1";
	fetch(`${loginAPI}/profile`, {
		method: "GET",
		headers: {
			Accepts: 'application/json',
			"Content-Type": "application/json",
			'Authorization': `Bearer ${localStorage.getItem('jwt')}`
		}
	})
	.then((res) => res.json())
	.then((json) => {
		if (json.username){
			localStorage.setItem('username',json.username);
			localStorage.setItem('id',json.id);
		}
		
		
	});

	//rating filter request
	useEffect(() =>{
		const ratingPlaces = places.filter ((place) => place.rating >= rating);
		setRatingPlaces(ratingPlaces);
	},[rating])

    return (
		<Router>
        <Routes >			
			<Route path="map" element={
				<>
				<Nav setCoordinates={setCoordinates}/>
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<List
								places={ratingPlaces.length ? ratingPlaces: places}
								isLoading={isLoading}
								selectedPlace={selectedPlace}
								switchSelected={switchSelected}
								setSwitchSelected={setSwitchSelected}
								type = {type}
								setType={setType}
								rating ={rating}
								setRating={setRating}
							/>
						</div>
						<div className="col-md-8">
							<Map
								setCoordinates={setCoordinates}
								setBounds={setBounds}
								coordinates={coordinates}
								places={ratingPlaces.length ? ratingPlaces: places}
								setSelectedPlace={setSelectedPlace}
								setSwitchSelected={setSwitchSelected}
							/>
						</div>
					</div>
				</div>
			</>
			}/>		
		
			<Route path="/" element={
				<>
				<Nav setCoordinates={setCoordinates}/>
				<Header />
				<Service />
				<DestinationsTop />
				</>
			}/>

			<Route path="/plan" element={
				<>
				<Nav setCoordinates={setCoordinates}/>
				<Bookmark />
				</>
			}/>

			<Route path="login" element={<Login />}/>

			<Route path="signup" element={<Signup />}/>
		</Routes>
		</Router>
    );
}

export default App;
