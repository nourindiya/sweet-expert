import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-continer">
            <div className="footer">
                <h3>Sweet Experts</h3>
                <p>A place for baking enthusiasm</p>
                <ul className="socials">
                    <li><i class="fab fa-facebook-square"></i> Sweet Expert</li>
                    <li><i class="fab fa-google-plus-g"> sweet.expert1@gmail.com</i></li>
                    <li><i class="fab fa-twitter"> @sweet_expert</i></li>
                </ul>
                <p className="mt-5 p-3">Copyright 1999-2021 by Sweet Expert. All Rights Reserved</p>
            </div>
        </div >
    );
};

export default Footer;
