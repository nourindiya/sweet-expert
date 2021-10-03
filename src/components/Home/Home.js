import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import "./Home.css"
const Home = () => {
    return (
        <div className="home-container">

            {/* Header div */}
            <div className="nav">
                <Header></Header>
            </div>

            {/* Banner div */}
            <div className="banner">
                <Banner></Banner>
            </div>

            {/* COURSES div */}
            <div className="courses">
                <Courses></Courses>
            </div>

            {/* Footer Div */}
            <div className="footer">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;