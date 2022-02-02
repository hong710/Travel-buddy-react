
import { FaHotel, FaPlaneDeparture,FaUtensils, FaLandmark } from 'react-icons/fa';


function ServiceCard({name, description}) {

    if (name ==="Hotels"){
        return (
        <div className="col-3 mt-4">
            <div className="card shadow">
                <div className="text-center display-4" >
                    <FaHotel className="text-custom-yellow"/>
                </div>
                <div className="card-body">
                    <h4 className="text-center">{name}</h4>
                    <p>{description}</p>
                </div>                
            </div>
        </div>
        )
    }
    else if(name ==="Destinations"){
        return (
            <div className="col-3 mt-4">
                <div className="card shadow">
                    <div className="text-center display-4" >
                        <FaPlaneDeparture className="text-primary"/>
                        
                    </div>
                    <div className="card-body">
                    <h4 className="text-center">{name}</h4>
                        <p>{description}</p>
                    </div>                
                </div>
            </div>
            )
    } else if(name ==="Restaurants"){
        return (
            <div className="col-3 mt-4">
                <div className="card shadow">
                    <div className="text-center display-4" >
                        <FaUtensils className="text-success"/>
                    </div>
                    <div className="card-body">
                    <h4 className="text-center">{name}</h4>
                        <p>{description}</p>
                    </div>                
                </div>
            </div>
            )
    }else{
        return (
            <div className="col-3 mt-4">
                <div className="card shadow">
                    <div className="text-center display-4" >
                        <FaLandmark className="text-danger"/>
                    </div>
                    <div className="card-body">
                        <h4 className="text-center">{name}</h4>
                        <p>{description}</p>
                    </div>                
                </div>
            </div>
            )
    }
}

export default ServiceCard;