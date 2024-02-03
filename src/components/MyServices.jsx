import React from 'react';
import wara from '../assets/images/white_angle_right_arrow.png'
import uxuirimg from '../assets/images/ux_ui_right.png'
import gdlimg from '../assets/images/graphic_design_left_img.png'
import wdrimg from '../assets/images/web_design_right_img.png'
import pdlimg from '../assets/images/product_design_left_img.png'
import rsimg from '../assets/images/right_sign.png'
import rdsimg from '../assets/images/right_dark_sign.png'
import { Link } from 'react-router-dom';

const MyServices = () => {
    return (
        <div>
            <section className="service" style={{ overflowX: "hidden" }}>
                <div className="container">
                    <div className="row">
                        <div className="service_heading d-flex">
                            <h2 className="second_heading" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50"
                                data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                data-aos-once="false">

                                My Services</h2>

                            <div className="sevice_btn d-none d-lg-block"><button className="btn btn_dark dark_btn">
                                <Link to="/portfolio">View all works
                                    <a className="clr_orange">

                                    </a>
                                </Link>

                            </button>
                            </div>


                        </div>

                        <div className="sevice_btn d-lg-none d-block"><button className="btn btn_dark dark_btn">
                            <Link to="/portfolio">View all works
                                <a className="clr_orange">

                                </a>
                            </Link>

                        </button>
                        </div>



                        <ul className="service_items">
                            <a href="./portfolio_details.html">

                                <li className="service_items_child d-flex  justify-content-between position-relative">

                                    <h4 className="forth_heading">UI/UX Design</h4>
                                    <Link to="/portfolio">
                                    <a><img src={wara}
                                        alt="" /></a>
                                    </Link>

                                    <div className="hover_img position-absolute">

                                        <img className="img-fluid" src={uxuirimg} alt="" />
                                    </div>



                                </li>
                            </a>

                            <a href="./portfolio_details.html">

                                <li className=" service_items_child d-flex justify-content-between position-relative">


                                    <h4 className="forth_heading">Graphic Design</h4>
                                    <Link to="/portfolio">
                                    <a><img src={wara}
                                        alt="" /></a>
                                    </Link>

                                    <div className="hover_img position-absolute">

                                        <img className="img-fluid" src={gdlimg} alt="" />
                                    </div>

                                </li>
                            </a>

                            <a href="./portfolio_details.html">

                                <li className=" service_items_child d-flex justify-content-between position-relative">


                                    <h4 className="forth_heading">Web Design</h4>
                                    <Link to="/portfolio">
                                    <a><img src={wara}
                                        alt="" /></a>
                                    </Link>

                                    <div className="hover_img position-absolute">

                                        <img className="img-fluid" src={wdrimg} alt="" />
                                    </div>
                                </li>
                            </a>

                            <a href="./portfolio_details.html">

                                <li className=" service_items_child d-flex justify-content-between position-relative">
                                    <h4 className="forth_heading">Product Design</h4>
                                    <Link to="/portfolio">
                                    <a><img src={wara}
                                        alt="" /></a>
                                    </Link>

                                    <div className="hover_img position-absolute">

                                        <img className="img-fluid" src={pdlimg} alt="" />
                                    </div>
                                </li>


                            </a>

                        </ul>
                    </div>
                    <div className="row">
                        <div className="pricing_parent">
                            <h2 className="pricing_heading" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50"
                                data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                data-aos-once="false">
                                Pricing
                            </h2>
                        </div>

                    </div>
                    <div className="row">

                        <div className="col-lg-4  pt-4  ">
                            <div className="pricing_items " data-aos="fade-right" data-aos-offset="200" data-aos-delay="50"
                                data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                data-aos-once="false">
                                <div className="pricing_upper_btn">
                                    <button className="btn btn-plan">
                                        <a className="clr_gray_plan" href="#">Basic Plan

                                        </a>

                                    </button>
                                </div>

                                <p className="pricing_pera">Try Out Basic Plan Save 20%</p>
                                <h3 className="pricing_rate">$19.95 <span className="per_month">/per month</span></h3>
                                <p className="pricing_pera">Sed perspiciatis unde natus totam see <br className="d-none d-lg-block" />
                                    rem aperiam eaque inventore</p>

                                <ul className="pricing_list_parent">
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rsimg} alt="" />
                                        <p className="pricing_list_pera_white"><a className="list_white" href="">Website Design</a></p>
                                    </li>
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rsimg} alt="" />
                                        <p className="pricing_list_pera_white"><a className="list_white" href="">Mobile Apps Design</a>
                                        </p>
                                    </li>
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rsimg} alt="" />
                                        <p className="pricing_list_pera_white"><a className="list_white" href="">Product Design</a> </p>
                                    </li>
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rdsimg} alt="" />
                                        <p className="pricing_list_pera"><a className="list_white" href="">Digital Marketing</a></p>
                                    </li>
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rdsimg} alt="" />
                                        <p className="pricing_list_pera"><a className="list_white" href="">Custom Support</a></p>
                                    </li>
                                </ul>

                                <div className="pricing_lower_btn">
                                    <button className="btn btn-gray">
                                        <a className="clr_gray_white" href="#">Get Started Now

                                        </a>

                                    </button>


                                </div>

                            </div>

                        </div>

                        <div className="col-lg-4  pt-4">
                            <div className="pricing_items" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50"
                                data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                data-aos-once="false">
                                <div className="pricing_upper_btn">
                                    <button className="btn btn-plan">
                                        <a className="clr_gray_plan" href="#">Standard Plan

                                        </a>

                                    </button>
                                </div>

                                <p className="pricing_pera">Try Out Standard Plan Save 30%</p>
                                <h3 className="pricing_rate">$39.95 <span className="per_month">/per month</span></h3>
                                <p className="pricing_pera">Sed perspiciatis unde natus totam see <br className="d-none d-lg-block" />
                                    rem aperiam eaque inventore</p>

                                <ul className="pricing_list_parent">
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rsimg} alt="" />
                                        <p className="pricing_list_pera_white"><a className="list_white" href="">Website Design</a></p>
                                    </li>
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rsimg} alt="" />
                                        <p className="pricing_list_pera_white"><a className="list_white" href="">Mobile Apps Design</a>
                                        </p>
                                    </li>
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rsimg} alt="" />
                                        <p className="pricing_list_pera_white"><a className="list_white" href="">Product Design</a> </p>
                                    </li>
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rsimg} alt="" />
                                        <p className="pricing_list_pera_white"><a className="list_white" href="">Digital Marketing</a>
                                        </p>
                                    </li>
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rdsimg} alt="" />
                                        <p className="pricing_list_pera"><a className="list_white" href="">Custom Support</a></p>
                                    </li>
                                </ul>

                                <div className="pricing_lower_btn">
                                    <button className="btn btn-gray">
                                        <a className="clr_gray_white" href="#">Get Started Now

                                        </a>

                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 pt-4">
                            <div className="pricing_items" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50"
                                data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                data-aos-once="false">
                                <div className="pricing_upper_btn">
                                    <button className="btn btn-plan">
                                        <a className="clr_gray_plan" href="#">Premium Plan

                                        </a>

                                    </button>
                                </div>

                                <p className="pricing_pera">Try Out Premium Plan Save 50%</p>
                                <h3 className="pricing_rate">$99.95<span className="per_month">/per month</span></h3>
                                <p className="pricing_pera">Sed perspiciatis unde natus totam see <br className="d-none d-lg-block" />
                                    rem aperiam eaque inventore</p>

                                <ul className="pricing_list_parent">
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rsimg} alt="" />
                                        <p className="pricing_list_pera_white"><a className="list_white" href="">Website Design</a></p>
                                    </li>
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rsimg} alt="" />
                                        <p className="pricing_list_pera_white"><a className="list_white" href="">Mobile Apps Design</a>
                                        </p>
                                    </li>
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rsimg} alt="" />
                                        <p className="pricing_list_pera_white"><a className="list_white" href="">Product Design</a> </p>
                                    </li>
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rsimg} alt="" />
                                        <p className="pricing_list_pera_white"><a className="list_white" href="">Digital Marketing</a>
                                        </p>
                                    </li>
                                    <li className="pricing_list d-flex align-items-center">
                                        <img src={rsimg} alt="" />
                                        <p className="pricing_list_pera_white"><a className="list_white" href="">Custom Support</a></p>
                                    </li>
                                </ul>

                                <div className="pricing_lower_btn">
                                    <button className="btn btn-gray">
                                        <a className="clr_gray_white" href="#">Get Started Now

                                        </a>

                                    </button>


                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </section>
        </div>
    );
};

export default MyServices;