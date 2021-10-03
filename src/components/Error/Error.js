import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Error = () => {
    return (
        <div>
            {/* Header div */}
            <div>
                <Header></Header>
            </div>

            {/* Error Showing Div */}
            <div className="about-body">
                <h1>Error 404</h1>
                <h2>No Result Found</h2>
                <p>(Hint:Try with other Keys)</p>
            </div>

            {/* Footer div */}
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Error;