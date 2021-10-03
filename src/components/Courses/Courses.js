import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import "./Courses.css"

const Courses = () => {
    const [courses, setCourses] = useState([]);
    // load and set data
    useEffect(() => {
        fetch('./projectData1.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    console.log(courses)
    return (
        <div>
            <h1 className="m-5 mx-auto text-center p-2 text-lg bg-dark w-25 
     text-light">Top Courses</h1>
            <div className="row">
                <div className="col-md-12">
                    <div className="row row-cols-md-4 g-3">

                        {
                            courses.map(course => <Course
                                course={course}
                            >
                            </Course>
                            )}
                    </div>
                </div>
            </div >
        </div>

    );

};

export default Courses;