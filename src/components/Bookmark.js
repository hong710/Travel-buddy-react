import React,{useState, useEffect} from 'react';
import BookmarkItem from './BookmarkItem';

const urlApi = "http://localhost:3000/api/v1"

function Bookmark() {

    const [activities, setActivities] = useState([]); 
    const [acType, setAcType] = useState("All");
    const [location, setLocation] = useState("All");

    function onChangeAcType(e){
        setAcType(e.target.value);
    }

    function onChangeLocation(e){
        setLocation(e.target.value);
    }


    useEffect(()=>{
        fetch(`${urlApi}/users/${localStorage.getItem('id')}`, {
            method: "GET",
            headers: {
                Accepts: 'application/json',
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res) => res.json())
        .then((data) => setActivities(data))
    },[])

    const cities = activities?.map((activity) => activity.city)
    const uniqueCities = [...new Set(cities)]
    uniqueCities.unshift('All')

    return (
        <div className="pt-5">
        <div className="container">
            <h2 className="text-center custom-heading display-6 mt-5">Your Bookmarks</h2>
            <div className="row justify-content-center align-items-cent">
                
                <div className="col-3 er">
                    <h6>Activities</h6>
                    <select value={acType} onChange={onChangeAcType} className="form-select">
                        <option value="All">All</option>
                        <option value="restaurant">Restaurants</option>
                        <option value="hotel">Hotels</option>
                        <option value="attraction">Attractions</option>
                    </select>
                </div>

                <div className="col-3">
                    <h6>Location</h6>
                    <select value={location} onChange={onChangeLocation} className="form-select">
                        {
                        uniqueCities?.map((city,i)=><option key ={i} value={city}>{city}</option>)}
                    </select>
                </div>

                
            </div>            
    
            <div className="row mt-5">
                {
                    acType==="All" && location ==="All"
                    ?
                    activities?.map((activities,index) => <BookmarkItem key= {index} activities = {activities}/>)
                    :
                    activities?.filter(place => place.city===location).map((activities,index) => <BookmarkItem key= {index} activities = {activities}/>)
                }
                {
                    acType==="restaurant" && location !=="All"
                    ?
                    activities?.filter(place => place.category===acType && place.city===location).map((activities,index) => <BookmarkItem key= {index} activities = {activities}/>)
                    :
                    activities?.filter(place => place.category===acType).map((activities,index) => <BookmarkItem key= {index} activities = {activities}/>)
                }
                {
                    acType==="hotel" && location !=="All"
                    ?
                    activities?.filter(place => place.category===acType).map((activities,index) => <BookmarkItem key= {index} activities = {activities}/>)
                    :
                    activities?.filter(place => place.category===acType).map((activities,index) => <BookmarkItem key= {index} activities = {activities}/>)
                }
                {
                    acType==="attraction" && location !=="All"
                    ?
                    activities?.filter(place => place.category===acType).map((activities,index) => <BookmarkItem key= {index} activities = {activities}/>)
                    :
                    activities?.filter(place => place.category===acType).map((activities,index) => <BookmarkItem key= {index} activities = {activities}/>)
                }                   
        
                
            </div>
        </div>
    </div>
    )
}

export default Bookmark