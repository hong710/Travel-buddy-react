import React from 'react';
import DestinationCard from './DestinationCard';
import topCities from '../assets/cities.json';

function DestinationsTop() {    
    return (
        <main className="pt-5">
            <div className="container">
                <h2 className="text-center custom-heading display-6">Top Destinations</h2>

                <div className="row">
                    {topCities.map(city => <DestinationCard name = {city.name} link={city.link}/>)}
                </div>
            </div>
        </main>
    )
}

export default DestinationsTop;
