import React from 'react';
import "./Banner.css"


const Banner = () => {
    return (
        <div className="row">
            <div className="col-md-6 info">
                <div className="sweet">
                    <h1> Sweet Expert</h1>
                    <h4>By Nishat</h4>
                    <p>Sweet Expert is here for teching higt tecniques of baking.Baking is combained with science and skills.We're here for tect you and make you expert</p>
                    <button className="btn btn-light">Join Now</button>
                </div>
            </div>

            <div className="col-md-6">
                <img className="img" src="https://3.bp.blogspot.com/-6rWIv26pHXk/TgTjtPjvW2I/AAAAAAAAAjc/pO5HFuTKRhE/s1600/OkCm_005.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;