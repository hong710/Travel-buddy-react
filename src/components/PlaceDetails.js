
function PlaceDetails({place}) {
    
    return (
        <div className="mt-4">
            <div className="card shadow">
                <img
                    className=" card-img-top object-fit-cover"
                    height="250px"
                    src={"place.images.lg.url"}
                    alt="Card"
                />
                <div className="card-body">
                    <h4>{place.name}</h4>
                    <h6>{place.address}</h6>
                </div>                
            </div>
        </div>
    
    )
}


export default PlaceDetails;