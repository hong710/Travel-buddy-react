import {FaStar} from 'react-icons/fa';


function SelectedDetail({place, setSwitchSelected}) {
    


    return (
        <div className="mt-4">
            <div className="card shadow">
                <div className="position-relative">
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setSwitchSelected(false)}></button>
                    <img
                        className=" card-img-top object-fit-cover"
                        height="250px"
                        src={place.photo ? place.photo.images.large.url :'https://images.unsplash.com/photo-1618597017017-7ce39f28eb41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'}
                        alt="Card"
                    />
                </div>
                <div className="card-body">
                    <h5 className="custom-subheading">{place.name ? place.name: ""}</h5>
                    <h6>{place.address}</h6>
                    <h6>Phone number: {place.phone}</h6>
                    <h6>Ranking: {place.ranking}</h6>
                    <h6>Price range: {place.price_level}</h6>
                    <h6>Rating: {place.rating} <FaStar className="text-warning"/> out of  {place.num_reviews} reviews</h6>
                    {
                    place?.cuisine?.map (({ name }) => (
                        <span className="badge rounded-pill bg-primary me-1">{name}</span>
                    ) 
                    )}    

                    <div className="mt-3 d-flex justify-content-around">
                        <h6><a href={place.website}>Website</a></h6>
                        <h6><a href={place.web_url}>More info</a></h6>
                    </div>                    
                </div>                
            </div>
        </div>
    
    )
}


export default SelectedDetail;