import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import "./Home.css"
const Home = () => {
    return (
        <div className="home-container">
            <div className="nav">
                <Header></Header>
            </div>
            <div className="banner">
                <Banner></Banner>
            </div>
            <div className="courses">
                <Courses></Courses>
            </div>
            <div className="footer">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;