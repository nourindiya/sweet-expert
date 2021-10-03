import React from 'react';
import "./Course.css"

const Course = (props) => {
    const { name, CourseFee, img } = props.course || {};
    console.log(props)
    return (
        <div className="col-md-4 g-2 ">

            {/* Course Cards */}
            <div className="card mb-3 mt-3 h-80">
                <div className="col g-0">

                    {/* Card Image */}
                    <div className="col">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>

                    {/* Card Body */}
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title">Course: {name}</h5>
                            <p className="card-text">Course Fee: {CourseFee}</p>
                            <button className="btn btn-light">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Course;