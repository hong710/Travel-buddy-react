import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa';
import {IoCloseSharp} from "react-icons/io5";


function BookmarkItem({activity}) {

    const[closed, setClosed] = useState({display: "block"});
    console.log(activity);
    function deleteItemClick(e){
        e.preventDefault();
        setClosed({display: "none"});
        fetch(`http://localhost:3000/activity/${activity.id}`, {
        method: "DELETE",
        headers: {
			'Authorization': `Bearer ${localStorage.getItem('jwt')}`
		}
        })
    }
    return (
    <div className="col-4 mt-4 mt-4" style={closed}>
        <div className="card shadow bookmark-item">
            <div className="position-relative ">
                <div type="button" className="delete-btn text-center"  aria-label="Close" 
                onClick={deleteItemClick}             
                >
                    <IoCloseSharp className="text-danger" />
                </div>
                <img
                    className=" card-img-top object-fit-cover"
                    height="250px"
                    src={activity.img}
                    alt="Card"
                />
            </div>
            {console.log(activity)}
            <div className="card-body">
                <h5 className="custom-subheading">{activity.name}</h5>
                <h6>{activity.address}</h6>
                <h6>Phone number: {activity.phone}</h6>
                <h6>Rating: {activity.review} <FaStar className="text-warning"/> </h6>                   
            </div>                
        </div>
    </div>
    )}

export default BookmarkItem