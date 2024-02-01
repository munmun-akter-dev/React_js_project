import React from 'react';

import pdetailslimg from '../assets/images/portfolio_details_bottom_left_img.png'
import pdetailsmidimg from '../assets/images/portfolio_details_bottom_middle_img.png'
import pdetailsrimg from '../assets/images/portfolio_details_bottom_right_img.png'

const PdetailsInteresting = () => {
    return (
        <div>
             <section className="interesting" style={{ overflowX: "hidden" }}>
        <div className="container">
            <div className="row">
                <div className="interesting_parent">
                    <h3>Interesting facts in <br className="d-none d-lg-block "/>
                        development</h3>

                    <p className="interesting_content">Estates is a sophisticated and user-friendly real estate website
                        designed to provide a seamless
                        experience for property buyers, sellers, and <br className="d-none d-lg-block d-md-block"/> real
                        estate
                        professionals. With a focus on modern
                        design, robust functionality, and intuitive navigation, Elite Estates stands out as a premier
                        <br className="d-none d-lg-block d-md-block"/>
                        platform in the competitive real estate market.
                    </p>

                    <p className="interesting_content d-none d-md-block">Estates is a sophisticated and user-friendly real
                        estate website
                        designed to provide a seamless
                        experience for property buyers, sellers, and real estate
                        professionals. With a focus on modern
                        design, robust functionality, and intuitive navigation, Elite Estates stands out as a premier

                        platform in the competitive real estate market. </p>
                </div>


            </div>
        </div>



    </section>

    <div className="interesting_img_group d-flex justify-content-center  align-items-start"style={{ overflowX: "hidden" }}>
        <div className="col-lg-2">
            <img className="img-fluid d-lg-block d-none" src={pdetailslimg} alt=""
                width="100%"/>
        </div>

        <div className="col-lg-8">
            <img className="img-fluid" src={pdetailsmidimg} alt=""/>
        </div>

        <div className="col-lg-2">
            <img className="img-fluid d-lg-block d-none" src={pdetailsrimg} alt=""
                width="100%"/>
        </div>

    </div>
        </div>
    );
};

export default PdetailsInteresting;