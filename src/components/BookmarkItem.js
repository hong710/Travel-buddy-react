import React from 'react';
import {FaStar} from 'react-icons/fa';


function BookmarkItem({activities}) {
    return (
    <div className="col-4 mt-4 mt-4">
        <div className="card shadow">
            <div className="position-relative">
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