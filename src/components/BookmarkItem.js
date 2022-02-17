import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa';
import {IoCloseSharp} from "react-icons/io5";


function BookmarkItem({activities}) {

    const[closed, setClosed] = useState({display: "block"});

    function deleteItemClick(e){
        e.preventDefault();
        setClosed({display: "none"});
        fetch(`http://localhost:3000/activities/${activities.id}`, {
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
                    src={activities.img}
                    alt="Card"
                />
            </div>
            <div className="card-body">
                <h5 className="custom-subheading">{activities.name}</h5>
                <h6>{activities.address}</h6>
                <h6>Phone number: {activities.phone}</h6>
                <h6>Rating: {activities.review} <FaStar className="text-warning"/> </h6>                   
            </div>                
        </div>
    </div>
    )}

export default BookmarkItem