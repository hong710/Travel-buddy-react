import React,{useState, useEffect} from 'react';
import BookmarkItem from './BookmarkItem';

const urlApi = "http://localhost:3000/api/v1"

function Bookmark() {

    const [activities, setActivities] = useState([]); 
    const [acType, setActype] = useState("All");

    function onChangeAcType(){
        setActype(acType);
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


    return (
        <div className="pt-5">
        <div className="container">
            <h2 className="text-center custom-heading display-6 mt-5">Your Bookmarks</h2>
            <div className="row justify-content-center align-items-cent">
                
                <div className="col-3 er">
                    <h6>Activities</h6>
                    <select value={acType} onChange={onChangeAcType} className="form-select">
                        <option value="restaurants">All</option>
                        <option value="restaurants">Restaurant</option>
                        <option value="hotels">Hotels</option>
                        <option value="attractions">Attractions</option>
                    </select>
                </div>

                <div className="col-3">
                    <h6>Location</h6>
                    <select value={acType} onChange={onChangeAcType} className="form-select">
                        <option value="restaurants">All</option>
                        <option value="restaurants">Restaurant</option>
                        <option value="hotels">Hotels</option>
                        <option value="attractions">Attractions</option>
                    </select>
                </div>

                
            </div>
           
            

            <div className="row mt-5">
                {activities?.map((activities,index) => <BookmarkItem key= {index} activities = {activities}/>)}
            </div>
        </div>
    </div>
    )
}

export default Bookmark