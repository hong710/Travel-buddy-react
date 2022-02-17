import React, {useState,useEffect} from 'react';
import {FaStar} from 'react-icons/fa';

const urlAPI = "http://localhost:3000";

function PlaceDetails({place}) {
    const location_img =place.photo ? place.photo.images.large.url :'https://images.unsplash.com/photo-1618597017017-7ce39f28eb41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80 '

    const [typeId, setTypeId] = useState();

    const data = {
        name: place.name,
        address: place.address || place.location_string,
        img: location_img,
        category: place.ranking_category,
        phone: place.phone,
        review: place.rating,
        city: place.ranking_geo
        
    }

    function addPlanHandle(e){
        e.preventDefault();
        fetch(`${urlAPI}/activities`,{
            method: 'POST',
            headers: {
                Accepts: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body:JSON.stringify(data)
        })
        .then (res => res.json())
        .then(data => {
            setTypeId(data.id); 
        })
    }
    // console.log({typeId})


    // assign  restaurant to user_id
    
    useEffect(()=>{
        if(typeId!==undefined){
            fetch(`${urlAPI}/user_activities`,{
                method: 'POST',
                headers: {
                    Accepts: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                },
                body:JSON.stringify({activity_id:typeId, user_id:localStorage.getItem('id')})
            })
            .then (res => res.json())
            .then(data => console.log(data.id))
            .catch(err =>console.log(err))
        }        

    },[typeId])

    return (
        <div className="mt-4">
            <div className="card shadow">
                <img
                    className=" card-img-top object-fit-cover"
                    height="250px"
                    src={location_img}
                    alt="Card"
                />
                <div className="card-body">
                    <h5 className="custom-subheading">{place.name ? place.name: ""}</h5>
                    <h6>{place.address || place.ranking_geo }</h6>
                    <h6>{place.phone}</h6>
                    <h6>Ranking: {place.ranking}</h6>
                    <h6>Price range: {place.price_level}</h6>
                    <h6>Rating: {place.rating} <FaStar className="text-warning"/> out of  {place.num_reviews} reviews</h6>
                    {
                    place?.cuisine?.map (({ name }) => (
                        <span className="badge rounded-pill bg-primary me-1">{name}</span>
                    ) 
                    )}    

                    <div className="mt-3 d-flex justify-content-around">
                        <div>
                            <h6><a href={place.website}>Website</a></h6>
                            <h6><a href={place.web_url}>More info</a></h6>
                        </div>
                        {
                            localStorage.getItem('username')
                            ?
                            <div >
                            <button className="btn btn-outline-custom-blue" onClick={addPlanHandle}>Add to bookmark</button>
                            </div>
                            : 
                            <></>
                        }
                        
                        
                    </div>                    
                </div>                
            </div>
        </div>
    )
}
export default PlaceDetails;