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
            <h1 className="mx-auto pt-5 w-25  head purple">Our Top Courses</h1>
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