/* eslint-disable no-unused-vars */
import React from 'react';

import cryptoauid from '../assets/images/crypto_app_ui_design.png'
import pdotimg from '../assets/images/portfolio_dot_img.png'
import balckarrow from '../assets/images/black-arrow.png'
import whitearrow from '../assets/images/white-arrow.png'
import sellbyedis from '../assets/images/sell_buy_discover.png'
import storeour from '../assets/images/store_our.png'
import fashionappui from '../assets/images/fashion_app_ui_design.png'
import realstatewebd from '../assets/images/real_estate_web_design.png'
import artistappd from '../assets/images/artist_app_design.png'
import financialfrdomapp from '../assets/images/financial_freedom_img.png'
import { Link } from 'react-router-dom';


const PortfolioImg = () => {
    return (
        <div>
            <section className="portfolio_img_section" style={{ overflowX: "hidden" }}>

                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="left_img">


                                <div className="grid">
                                    <div className="position-relative abc " data-aos="fade-right" data-aos-offset="200"
                                        data-aos-delay="50" data-aos-duration="1400" data-aos-easing="ease-in-out"
                                        data-aos-mirror="true" data-aos-once="false">

                                        <img className=" img-fluid mb-4" src={cryptoauid} alt="img" />


                                        <div className="protBg position-absolute">

                                            <ul className="img_head d-flex align-items-center ">
                                                <li><img className="img-fluid" src={pdotimg} alt="" />
                                                </li>
                                                <li>
                                                    <h3 className="gradient_head">App</h3>
                                                </li>
                                            </ul>
                                            <div
                                                className="img_heading_with_arrow d-flex justify-content-between align-items-center">

                                                <h2 className="img_white_head">
                                                    Crypto App Ul Design
                                                </h2>

                                                <div className="recent_arrow_portfolio ">
                                                    <Link to="/portfoliodetails">

                                                        <a>


                                                            <img className="hover_none" src={balckarrow} alt="" />
                                                            <img className="hover_block" src={whitearrow} alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="position-relative abc " data-aos="fade-right" data-aos-offset="200"
                                        data-aos-delay="50" data-aos-duration="1400" data-aos-easing="ease-in-out"
                                        data-aos-mirror="true" data-aos-once="false">

                                        <img className="img-fluid mb-4" src={sellbyedis} alt="img" />

                                        <div className="protBg position-absolute">

                                            <ul className="img_head d-flex align-items-center ">
                                                <li><img className="img-fluid" src={pdotimg} alt="" /></li>
                                                <li>
                                                    <h3 className="gradient_head">Website Design</h3>
                                                </li>
                                            </ul>
                                            <div className="img_heading_with_arrow d-flex justify-content-between align-items-center">

                                                <h2 className="img_white_head">
                                                    NFT Arts Website Design
                                                </h2>
                                                <div className="recent_arrow_portfolio ">
                                                    <Link to="/portfoliodetails">

                                                        <a>


                                                            <img className="hover_none" src={balckarrow} alt="" />
                                                            <img className="hover_block" src={whitearrow} alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="position-relative abc " data-aos="fade-right" data-aos-offset="200"
                                        data-aos-delay="50" data-aos-duration="1400" data-aos-easing="ease-in-out"
                                        data-aos-mirror="true" data-aos-once="false">

                                        <img className="img-fluid mb-4 mt-4" src={fashionappui} alt="img" />

                                        <div className="protBg position-absolute">

                                            <ul className="img_head d-flex align-items-center ">
                                                <li><img className="img-fluid" src={pdotimg} alt="" /></li>
                                                <li>
                                                    <h3 className="gradient_head">App</h3>
                                                </li>
                                            </ul>
                                            <div className="img_heading_with_arrow d-flex justify-content-between align-items-center">

                                                <h2 className="img_white_head">
                                                    Fashion App UI Design
                                                </h2>
                                                <div className="recent_arrow_portfolio ">
                                                    <Link to="/portfoliodetails">

                                                        <a>


                                                            <img className="hover_none" src={balckarrow} alt="" />
                                                            <img className="hover_block" src={whitearrow} alt="" />
                                                        </a>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="position-relative abc " data-aos="fade-right" data-aos-offset="200"
                                        data-aos-delay="50" data-aos-duration="1400" data-aos-easing="ease-in-out"
                                        data-aos-mirror="true" data-aos-once="false">

                                        <img className=" img-fluid mb-4" src={storeour} alt="img" />


                                        <div className="protBg position-absolute">

                                            <ul className="img_head d-flex align-items-center ">
                                                <li><img className="img-fluid" src={pdotimg} alt="" /></li>
                                                <li>
                                                    <h3 className="gradient_head">Website Design</h3>
                                                </li>
                                            </ul>
                                            <div className="img_heading_with_arrow d-flex justify-content-between align-items-center">

                                                <h2 className="img_white_head">
                                                    Real Estate Website Design
                                                </h2>
                                                <div className="recent_arrow_portfolio ">
                                                    <Link to="/portfoliodetails">

                                                        <a>


                                                            <img className="hover_none" src={balckarrow} alt="" />
                                                            <img className="hover_block" src={whitearrow} alt="" />
                                                        </a>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="right_img_parent">
                                <div className="left_img">

                                    <div className="position-relative abc" data-aos="fade-left" data-aos-offset="200"
                                        data-aos-delay="50" data-aos-duration="1400" data-aos-easing="ease-in-out"
                                        data-aos-mirror="true" data-aos-once="false">

                                        <img className="img-fluid mb-4" src={realstatewebd} alt="img" />

                                        <div className="protBg position-absolute">

                                            <ul className="img_head d-flex align-items-center ">
                                                <li><img className="img-fluid" src={pdotimg} alt="" />
                                                </li>
                                                <li>
                                                    <h3 className="gradient_head">Website Design</h3>
                                                </li>
                                            </ul>
                                            <div
                                                className="img_heading_with_arrow d-flex justify-content-between align-items-center">

                                                <h2 className="img_white_head">
                                                    Real Estate Web Design
                                                </h2>
                                                <div className="recent_arrow_portfolio ">
                                                    <Link to="/portfoliodetails">

                                                        <a>


                                                            <img className="hover_none" src={balckarrow} alt="" />
                                                            <img className="hover_block" src={whitearrow} alt="" />
                                                        </a>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="position-relative abc" data-aos="fade-left" data-aos-offset="200"
                                        data-aos-delay="50" data-aos-duration="1400" data-aos-easing="ease-in-out"
                                        data-aos-mirror="true" data-aos-once="false">

                                        <img className="img-fluid mb-4" src={artistappd} alt="img" />

                                        <div className="protBg position-absolute">

                                            <ul className="img_head d-flex align-items-center ">
                                                <li><img className="img-fluid" src={pdotimg} alt="" />
                                                </li>
                                                <li>
                                                    <h3 className="gradient_head">App</h3>
                                                </li>
                                            </ul>
                                            <div
                                                className="img_heading_with_arrow d-flex justify-content-between align-items-center">

                                                <h2 className="img_white_head">
                                                    Artist App design
                                                </h2>
                                                <div className="recent_arrow_portfolio ">
                                                    <Link to="/portfoliodetails">

                                                        <a>


                                                            <img className="hover_none" src={balckarrow} alt="" />
                                                            <img className="hover_block" src={whitearrow} alt="" />
                                                        </a>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="position-relative abc" data-aos="fade-left" data-aos-offset="200"
                                        data-aos-delay="50" data-aos-duration="1400" data-aos-easing="ease-in-out"
                                        data-aos-mirror="true" data-aos-once="false">

                                        <img className="img-fluid mb-4" src={financialfrdomapp} alt="img" />

                                        <div className="protBg position-absolute">

                                            <ul className="img_head d-flex align-items-center ">
                                                <li><img className="img-fluid" src={pdotimg} alt="" />
                                                </li>
                                                <li>
                                                    <h3 className="gradient_head">Website Design</h3>
                                                </li>
                                            </ul>
                                            <div
                                                className="img_heading_with_arrow d-flex justify-content-between align-items-center">

                                                <h2 className="img_white_head">
                                                    NFT Website Design
                                                </h2>
                                                <div className="recent_arrow_portfolio ">
                                                    <Link to="/portfoliodetails">

                                                        <a>


                                                            <img className="hover_none" src={balckarrow} alt="" />
                                                            <img className="hover_block" src={whitearrow} alt="" />
                                                        </a>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="position-relative abc" data-aos="fade-left" data-aos-offset="200"
                                        data-aos-delay="50" data-aos-duration="1400" data-aos-easing="ease-in-out"
                                        data-aos-mirror="true" data-aos-once="false">

                                        <img className="img-fluid mt-4" src={cryptoauid} alt="img" />

                                        <div className="protBg2 position-absolute">

                                            <ul className="img_head d-flex align-items-center ">
                                                <li><img className="img-fluid" src={pdotimg} alt="" />
                                                </li>
                                                <li>
                                                    <h3 className="gradient_head">App</h3>
                                                </li>
                                            </ul>
                                            <div
                                                className="img_heading_with_arrow d-flex justify-content-between align-items-center">

                                                <h2 className="img_white_head">
                                                    Crypto App UI Design
                                                </h2>
                                                <div className="recent_arrow_portfolio ">
                                                    <Link to="/portfoliodetails">

                                                        <a>


                                                            <img className="hover_none" src={balckarrow} alt="" />
                                                            <img className="hover_block" src={whitearrow} alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default PortfolioImg;