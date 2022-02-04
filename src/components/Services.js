import ServiceCard from './ServiceCard';
import services from '../assets/services.json';



function Service() {    
    return (
        <section className="pt-5">
            <div className="container">
                <h2 className="text-center custom-heading display-6">Our Services </h2>
                <div className="row mt-5">
                    {
                        services.map(service => <ServiceCard name= {service.service} description={service.description}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Service;