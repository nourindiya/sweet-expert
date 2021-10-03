import React from 'react';
import "./Service.css"

const Service = (props) => {
    const { name, CourseFee, img } = props.service || {};
    return (
        <div className="col-md-4 g-2">
            {/* All courses Card */}
            <div className="card mb-3 mt-3 h-80">
                <div className="col g-0">

                    {/* Card Image */}
                    <div className="col">
                        <img className="img-fluid rounded-start" src={img} alt="" />
                    </div>

                    {/* Card Body */}
                    <div className="col">
                        <div className="card-body">
                            <h2 className="fw-lighter">Course:{name}</h2>
                            <p>Course Fee:{CourseFee}</p>
                            <button className="btn btn-light">Enroll</button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Service;