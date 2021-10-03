import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./AboutUs.css"


const AboutUs = () => {
    return (
        <div className="about-container">

            {/* Header Div */}
            <div className="header">
                <Header></Header>
            </div>

            {/* About Body */}
            <div className="about-body">

                {/* Carousel */}
                <div className="body-tittle mx-auto text-center">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://th.bing.com/th/id/R.1460c4a8dc73765d1c8010ed734fd90c?rik=pAGHYbb9MwyS0A&pid=ImgRaw&r=0" className="d-block w-100 car-img" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://image.makewebeasy.net/makeweb/0/scANTcF1o/DefaultData/Kitchen_lab_4__resize_.jpg?v=202012190947" className="d-block w-100 car-img" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://th.bing.com/th/id/R.b39df884a3b9ec10030b9af4621b4cff?rik=8N%2b4TxkIy1lFWQ&pid=ImgRaw&r=0" className="d-block w-100 car-img" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div>
                        <h3 className="mt-3 mb-3"> ABOUT US </h3>
                        <div className="row">

                            {/* Describtions */}
                            <div className="col-md-6 pt-4 info mt-auto">
                                <h1>SWEET EXPERT </h1>
                                <h6>(A academy where you can we impart skills and tecniques)</h6>
                                <p>It has been more than 10 years now,<br />
                                    we are engaged with bakery and<br />
                                    restaurent industry , we started<br />
                                    this engagement in 2008 with providing<br />
                                    consultancy to the bakeries and restaurent<br />
                                    industries.In 2010 we</p>
                            </div>

                            <div className="col-md-6 info mt-auto" >
                                <h1>THE VISION</h1>
                                <p>To give world class and professional<br />
                                    training to people who are passionate<br />
                                    enough to be best chefs in the bakery<br />
                                    and restaurent industry.
                                </p>
                                <h1>THE MISSION</h1>
                                <p>Our mission is to train people so that they can get employement and as well genrate employment for others in bakery and restaurent industry.</p>
                            </div>

                        </div>

                        {/* Acheivments Div */}
                        <div>
                            <h3 className="heading mt-5 mx-2">   <i class="fas fa-award"></i> ACHIVEMENTS:</h3>
                            <div className="ul">
                                <h4 className="text-start">
                                    <i class="fas fa-trophy"></i>
                                    Our most on the students got
                                    chance to battle for internation baking opetition.Our studenst are tough to battle.Beacuase they are trained by most skilled pestry chefs
                                </h4>
                                <h4 className="text-start">
                                    <i class="fas fa-trophy"></i>
                                    Hired by most rewand Hotels such as five star's and others.
                                </h4>
                                <h4 className="text-start">
                                    <i class="fas fa-trophy"></i>
                                    All students get chance to earn funds from different companies for thei own venture.
                                </h4>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer Div */}
            <div className="footer">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AboutUs;