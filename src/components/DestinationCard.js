
function DestinationCard({name, link}) {

    return (
        <div className="col-4 mt-4">
            
                <div className="card shadow">
                <img
                    className=" card-img-top object-fit-cover"
                    height="400px"
                    src={link}
                    alt="Card"
                />
                <div className="card-body">
                    <h4>{name}</h4>
                    <h6>Price range: $$$</h6>

                </div>                
            </div>
    
        </div>
    
    );
}

export default DestinationCard;