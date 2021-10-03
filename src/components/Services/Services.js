import React, { useEffect, useState } from 'react'
import "./Services.css"
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Services = () => {
    const [services, setSevices] = useState([]);
    useEffect(() => {
        fetch("./serviceData.json")
            .then(res => res.json())
            .then(data => setSevices(data))
    }, [])

    return (
        <div>
            <div className="header">
                <Header></Header>
            </div>
            <div className="service-body">
                <div className="row">
                    <h2 className="fw-lighter text-start pt-3 mx-2"> FEATURED COURSES:</h2>
                    <div className="col-md-12">
                        <div className="row row-cols-md-3 g-3" >
                            {
                                services.map(service => <Service
                                    service={service}
                                ></Service>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Services;