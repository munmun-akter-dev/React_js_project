import React from 'react';

import blackarrow from '../assets/images/black-arrow.png'
import whitearrow from '../assets/images/white-arrow.png/'
import bgwhiterarrow from '../assets/images/bg_white_right_arraow.png'
import rcentbloglimg from '../assets/images/recent_blog_left_img.png'
import rcentblogrimg from '../assets/images/recent_blog_right_img.png'
import rcntblogl2 from '../assets/images/blog_left2.png'
import rcntblogr2 from '../assets/images/blog_right2.png'
import rcntblogl4 from '../assets/images/blog_left4.png'
import rcntblogr4 from '../assets/images/blog_right4_img.png'
import {Link} from 'react-router-dom';



const Blog = () => {
    return (
        <div>
            <section className="blog" style={{ overflowX: "hidden" }}>
                <div className="container">
                    <div className="row ">
                        <div className="service_heading d-flex">
                            <h2 className="second_heading"

                                data-aos="fade-down" data-aos-offset="200" data-aos-delay="50"
                                data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                data-aos-once="false"



                            >My All Blog</h2>

                        </div>
                    </div>


                    <div className=" row align-items-center p-3">
                        <div className="col-lg-6">
                            <div className="blog_left_side">
                                <img className="img-fluid" src={rcentbloglimg} alt=""

                                    data-aos="fade-right" data-aos-offset="200" data-aos-delay="50"
                                    data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                    data-aos-once="false"

                                />

                                <h3 className="blog_gray">Sep 22, 2023

                                </h3>
                                <div className=" heading_with_arrow d-flex justify-content-between align-items-center">
                                    <h2 className="blog_second_heading">Why your client needs a <br className="d-none d-lg-block" />
                                        responsive website
                                    </h2>
                                    <div className="recent_arrow_blog ">
                                        <Link to="/portfolio">
                                            <a >
                                                <img className="hover_none" src={blackarrow} alt="" />
                                                <img className="hover_block" src={whitearrow} alt="" />
                                            </a>

                                        </Link>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 pt-3">
                            <div className="blog_right_side">
                                <img className="img-fluid" src={rcentblogrimg} alt=""

                                    data-aos="fade-left" data-aos-offset="200" data-aos-delay="50"
                                    data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                    data-aos-once="false"
                                />

                                <h3 className="blog_gray">Sep 26, 2023
                                    <img src={bgwhiterarrow} alt="" />
                                </h3>
                                <div className=" heading_with_arrow d-flex justify-content-between align-items-center">
                                    <h2 className="blog_second_heading">Best design books for <br className="d-none d-lg-block" />
                                        increase design knowledge
                                    </h2>

                                    <div className="recent_arrow_blog ">
                                    <Link to="/portfolio">
                                            <a >
                                                <img className="hover_none" src={blackarrow} alt="" />
                                                <img className="hover_block" src={whitearrow} alt="" />
                                            </a>

                                        </Link>

                                    </div>

                                </div>
                            </div>

                        </div>




                        <div className="col-lg-6">
                            <div className="blog_left_side">
                                <img className="img-fluid" src={rcntblogl2} alt=""

                                    data-aos="fade-right" data-aos-offset="200" data-aos-delay="50"
                                    data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                    data-aos-once="false"

                                />

                                <h3 className="blog_gray">Oct 01, 2023
                                    <img src={bgwhiterarrow} alt="" />
                                </h3>
                                <div className=" heading_with_arrow d-flex justify-content-between align-items-center">
                                    <h2 className="blog_second_heading">Best design books for <br className="d-none d-lg-block" />
                                        increase design knowledge


                                    </h2>

                                    <div className="recent_arrow_blog ">
                                    <Link to="/portfolio">
                                            <a >
                                                <img className="hover_none" src={blackarrow} alt="" />
                                                <img className="hover_block" src={whitearrow} alt="" />
                                            </a>

                                        </Link>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="blog_left_side">
                                <img className="img-fluid" src={rcntblogr2} alt=""
                                    data-aos="fade-left" data-aos-offset="200" data-aos-delay="50"
                                    data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                    data-aos-once="false"

                                />

                                <h3 className="blog_gray">Oct 05, 2023
                                    <img src={bgwhiterarrow} alt="" />
                                </h3>
                                <div className=" heading_with_arrow d-flex justify-content-between align-items-center">
                                    <h2 className="blog_second_heading">Best design books for <br className="d-none d-lg-block" />
                                        increase design knowledge


                                    </h2>

                                    <div className="recent_arrow_blog ">
                                    <Link to="/portfolio">
                                            <a >
                                                <img className="hover_none" src={blackarrow} alt="" />
                                                <img className="hover_block" src={whitearrow} alt="" />
                                            </a>

                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>


                        <div className="col-lg-6">
                            <div className="blog_left_side">
                                <img className="img-fluid" src={rcentbloglimg} alt=""

                                    data-aos="fade-right" data-aos-offset="200" data-aos-delay="50"
                                    data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                    data-aos-once="false"
                                />

                                <h3 className="blog_gray">Nov 12, 2023
                                    <img src={bgwhiterarrow} alt="" />
                                </h3>
                                <div className=" heading_with_arrow d-flex justify-content-between align-items-center">
                                    <h2 className="blog_second_heading">Best design books for <br className="d-none d-lg-block" />
                                        increase design knowledge


                                    </h2>

                                    <div className="recent_arrow_blog ">
                                    <Link to="/portfolio">
                                            <a >
                                                <img className="hover_none" src={blackarrow} alt="" />
                                                <img className="hover_block" src={whitearrow} alt="" />
                                            </a>

                                        </Link>

                                    </div>

                                </div>
                            </div>

                        </div>


                        <div className="col-lg-6">
                            <div className="blog_left_side">
                                <img className="img-fluid" src={rcentblogrimg} alt=""
                                    data-aos="fade-left" data-aos-offset="200" data-aos-delay="50"
                                    data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                    data-aos-once="false"

                                />

                                <h3 className="blog_gray">Nov 15, 2023
                                    <img src={bgwhiterarrow} alt="" />
                                </h3>
                                <div className=" heading_with_arrow d-flex justify-content-between align-items-center">
                                    <h2 className="blog_second_heading">Best design books for <br className="d-none d-lg-block" />
                                        increase design knowledge


                                    </h2>

                                    <div className="recent_arrow_blog ">
                                    <Link to="/portfolio">
                                            <a >
                                                <img className="hover_none" src={blackarrow} alt="" />
                                                <img className="hover_block" src={whitearrow} alt="" />
                                            </a>

                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>



                        <div className="col-lg-6">
                            <div className="blog_left_side">
                                <img className="img-fluid" src={rcntblogl4} alt=""
                                    data-aos="fade-right" data-aos-offset="200" data-aos-delay="50"
                                    data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                    data-aos-once="false"
                                />

                                <h3 className="blog_gray">Nov 18, 2023
                                    <img src={bgwhiterarrow} alt="" />
                                </h3>
                                <div className=" heading_with_arrow d-flex justify-content-between align-items-center">
                                    <h2 className="blog_second_heading">Best design books for <br className="d-none d-lg-block" />
                                        increase design knowledge


                                    </h2>

                                    <div className="recent_arrow_blog ">
                                    <Link to="/portfolio">
                                            <a >
                                                <img className="hover_none" src={blackarrow} alt="" />
                                                <img className="hover_block" src={whitearrow} alt="" />
                                            </a>

                                        </Link>

                                    </div>

                                </div>
                            </div>

                        </div>




                        <div className="col-lg-6">
                            <div className="blog_left_side">
                                <img className="img-fluid" src={rcntblogr4} alt=""

                                    data-aos="fade-left" data-aos-offset="200" data-aos-delay="50"
                                    data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                    data-aos-once="false"

                                />

                                <h3 className="blog_gray">Dec 05, 2023
                                    <img src={bgwhiterarrow} alt="" />
                                </h3>
                                <div className=" heading_with_arrow d-flex justify-content-between align-items-center">
                                    <h2 className="blog_second_heading">Best design books for <br className="d-none d-lg-block" />
                                        increase design knowledge


                                    </h2>

                                    <div className="recent_arrow_blog ">
                                    <Link to="/portfolio">
                                            <a >
                                                <img className="hover_none" src={blackarrow} alt="" />
                                                <img className="hover_block" src={whitearrow} alt="" />
                                            </a>

                                        </Link>

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

export default Blog;