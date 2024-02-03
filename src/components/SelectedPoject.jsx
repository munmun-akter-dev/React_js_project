import React from 'react';
import splimg from '../assets/images/selected_project_left_img.png'
import raaimg from '../assets/images/right_angle_arrow.png'
import spfrimg from'../assets/images/selected_project_1st_right.png'
import wraimg from '../assets/images/white_angle_right_arrow.png'
import spsrimg from '../assets/images/selected_project_2nd_right_img.png'
import { Link } from 'react-router-dom';


const SelectedPoject = () => {
    return (
        <div>
             <section className=" selected_project bg_black_gray " style={{overflowX:"hidden"}}>
        <div className="container">
            <div className="row ">
                <div className="col-lg-6">
                    <div className="selected_project_left_side">
                        <h2 className="second_heading" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50"
                            data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">

                            Selected Projects</h2>
                        <p className="selected_project_content">I do deep market research before starting any project the
                            gives an <br className="d-none d-lg-block"/>
                            unfair advantage to bring the best result for client.</p>
                        <img className="img-fluid" src={splimg} alt=""
                            data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1400"
                            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"/>

                        <div className="third_heading_parent d-flex justify-content-space-between align-items-center  ">
                            <h3 className="third_heading">Flight Booking App

                            </h3>

                            {/* <a href="./portfolio.html"><img src={raaimg} alt=""/></a> */}
                            <Link to ="/portfolio"><a ><img src={raaimg} alt=""/></a></Link>
                        </div>
                        <h4 className="forth_heading d-none d-lg-block">02 - App Design</h4>

                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="selected_project_right_side">

                        <img className="img-fluid" src={spfrimg} alt=""
                            data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1400"
                            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"/>


                        <div className="third_heading_parent d-flex justify-content-space-between align-items-center  ">
                            <h3 className="third_heading d-flex">Ecommerce Website

                            </h3>

                            <Link to ="/portfolio"><a ><img src={raaimg} alt=""/></a></Link>
                        </div>


                        <h4 className="forth_heading d-none d-lg-block">01 - Web Design</h4>

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="selected_project_second_left_side" data-aos="fade-right" data-aos-offset="200"
                        data-aos-delay="50" data-aos-duration="1400" data-aos-easing="ease-in-out"
                        data-aos-mirror="true" data-aos-once="false">

                        <div className="project_circle">
                            <a href="./portfolio_details.html">


                                <h3 className="third_heading">Explore <br className="d-none d-lg-block d-md-block"/>
                                    All <br className="d-none d-lg-block d-md-block"/>
                                    Project

                                </h3>
                                <div className="circle_img">

                                    <Link to ="/portfolio">  <a >
                                        <img src={wraimg} alt=""/>
                                    </a></Link>
                                    

                                </div>
                            </a>

                        </div>

                    </div>
                </div>

                <div className="col-lg-6 d-none d-lg-block">
                    <div className="selected_project_second_right_side">

                        <img className="img-fluid" src={spsrimg} alt=""
                            data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1400"
                            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"/>

                        <div className="third_heading_parent d-flex justify-content-space-between align-items-center  ">
                            <h3 className="third_heading">Shop App UI Design

                            </h3>

                            <Link to ="/portfolio"><a ><img src={raaimg} alt=""/></a></Link>
                        </div>


                        <h4 className="forth_heading d-none d-lg-block">03 - App Design</h4>

                    </div>
                </div>

            </div>
        </div>
    </section>

        </div>
    );
};

export default SelectedPoject;