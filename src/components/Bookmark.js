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
            {console.log({acType})
            } 
            {console.log({location})
            }          
    
            <div className="row mt-5">
                {
                    acType==="All"
                    ?
                    activities?.map((activity,index) => <BookmarkItem key= {index} activity = {activity}/>)
                    :
                    <></>
                }
                {
                    acType==="restaurant"
                    ?
                    activities?.filter(place => place.category==="restaurant").map((activity,index) => <BookmarkItem key= {index} activity = {activity}/>)
                    :
                    <></>
                } 
                {
                    acType==="hotel"
                    ?
                    activities?.filter(place => place.category==="hotel" ).map((activity,index) => <BookmarkItem key= {index} activity = {activity}/>)
                    :
                    <></>
                }   

                 {
                    acType==="attraction"
                    ?
                    activities?.filter(place => place.category==="attraction").map((activity,index) => <BookmarkItem key= {index} activity = {activity}/>)
                    :
                    <></>
                }          
        
                
            </div>
        </div>
    </div>
    )
}

export default Bookmark