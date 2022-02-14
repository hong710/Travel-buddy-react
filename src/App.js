import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Service from "./components/Services";
import DestinationsTop from "./components/DestinationsTop";
import Search from "./components/SearchBar";
import List from "./components/List";
import Map from "./components/Map";

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

	//rating filter request
	useEffect(() =>{
		const ratingPlaces = places.filter ((place) => place.rating >= rating);
		setRatingPlaces(ratingPlaces);
	},[rating])

    return (
        <>
			<Nav />
			<Search setCoordinates={setCoordinates}/>
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

            {/* <Header />
			<Service />
			<DestinationsTop /> */}
        </>
    );
}

export default App;
