import React from 'react';
import "./Contact.css"
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarked, faMobileAlt, faSignInAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import Header from '../Header/Header';

const Contact = () => {

    return (
        <div className="contact-container">
            {/* Header Div */}
            <div className="header">
                <Header></Header>
            </div>

            {/* contact Container*/}
            <div className="contact-container about-body">
                <div className="contact-banner ">
                    <div className="row contact">

                        {/* Contact Photos */}
                        <div className="col-md-3">
                            <img className="contact-img" src="https://th.bing.com/th/id/OIP.VTb0scae8zxWIzm76jX1UAHaE7?pid=ImgDet&rs=1" alt="" />
                        </div>
                        <div className="col-md-3">
                            <img className="contact-img" src="https://th.bing.com/th/id/OIP.Flxy84hWZjfBwvvOBv1Y6QHaF_?pid=ImgDet&w=221&h=178&c=7&dpr=1.25" alt="" />
                        </div>
                        <div className="col-md-3">
                            <img className="contact-img" src="https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/gt/2020/06/02/1591074611197_FBmacaron.jpg?width=600&height=315&quality=75&mode=crop" alt="" />
                        </div>
                        <div className="col-md-3">
                            <img className="contact-img" src="https://th.bing.com/th/id/R.aba04c499fa350e4008b13f12eeb7119?rik=0YXdZtffJB3iHA&riu=http%3a%2f%2fblovelyevents.com%2fwp-content%2fuploads%2f2013%2f12%2fThe-reindeer-cookies-are-too-cute.jpg&ehk=%2fDLxQPNK5REVm1%2fbp4LYNQiSBRkTFKm%2fh5oFG6TesPI%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <div className="row mx-auto">
                        <h3 className="mt-5 mb-5 text-center purple">GET IN TOUCH</h3>
                        <div className="col-md-6 contact-info">

                            <div>
                                <h2 className="pt-5 fw-lighter">
                                    <FontAwesomeIcon className="black mx-2" icon={faMobileAlt} />
                                    Contact Information: </h2>

                                <div className="infos">
                                    <h4>
                                        <FontAwesomeIcon className="map" icon={faMapMarked} />   Address  </h4>
                                    <p>
                                        2268/3 Opp ICICI Bank <br />
                                        Sector 14, Gurgaon
                                    </p>
                                </div>

                                <div className="infos">
                                    <h4>  <FontAwesomeIcon className="phone" icon={faPhone} /> Phone</h4>
                                    <p>
                                        +91 9350893635
                                    </p>
                                </div>

                                <div className="infos">
                                    <h4> <FontAwesomeIcon className="fa-envelope mx-2" icon={faEnvelope} />Email</h4>
                                    <p>
                                        info@sweetExpert.com <br />
                                        setiagrupz@gmail.com
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Sign Up Part */}
                        <div className="col-md-6 sign-up">
                            <h2 className="fw-lighter pt-5">
                                <FontAwesomeIcon className="sign mx-2" icon={faSignInAlt} />
                                Sign Up</h2>
                            <input className="input mb-3" type="text" placeholder="Enter Name" id="" /> <br />
                            <input className="input mb-3" type="number" placeholder="Contact Number" id="" /> <br />
                            <input className="input mb-3" type="email" placeholder="Enter Email" id="" /> <br />
                            <h5>Queries:</h5>
                            <textarea placeholder="" type="text" className="text-area"></textarea>
                            <br />
                            <button className="btn btn-light">Submit</button>
                        </div>
                        <div>
                            <h3 className="fw-lighter mt-5 text-center">
                                <FontAwesomeIcon className=" mx-2" icon={faUserFriends} />
                                ONLINE CONSULTATION:</h3>
                            <p className="pt-3 pd-2">www.facetime/sweet_expert.com</p>
                            <button className=" btn-danger">Call Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer div */}
            <div className="footer">
                <Footer></Footer>
            </div>

        </div >
    );
};

export default Contact;