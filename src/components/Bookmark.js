import React,{useState, useEffect} from 'react';
import BookmarkItem from './BookmarkItem';

const urlApi = "http://localhost:3000/api/v1"

function Bookmark() {

    const [activities, setActivities] = useState([]) 

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

            <div className="row mt-5">
                {activities?.map((activities,index) => <BookmarkItem key= {index} activities = {activities}/>)}
            </div>
        </div>
    </div>
    )
}

export default Bookmark