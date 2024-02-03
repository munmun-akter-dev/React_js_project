
import blog1 from '../assets/images/recent_blog_left_img.png'
import blog2 from '../assets/images/recent_blog_right_img.png'
import blackarrow from '../assets//images/black-arrow.png'
import whitearrow from '../assets//images/white-arrow.png'
import hovern from '../assets/images/black-arrow.png'
import hoverb from '../assets/images/white-arrow.png'
import { Link } from 'react-router-dom';



const RecentBlog = () => {
    return (
        <>

            <section className="recent_blog" style={{ overflowX: "hidden" }}>
                <div className="container">
                    <div className="row ">
                        <div className="service_heading d-flex">
                            <h2 className="second_heading" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50"
                                data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                data-aos-once="false">

                                Recent Blog</h2>

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

                    </div>


                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="recent_blog_left_side">
                                <img className="img-fluid" src={blog1} alt=""
                                    data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1400"
                                    data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" />

                                <h3 className="blog_gray">Sep 22, 2023
                                    <img src="./assets/images/bg_white_right_arraow.png" alt="" />
                                </h3>
                                <div className=" heading_with_arrow d-flex justify-content-between align-items-center">
                                    <h2 className="blog_second_heading">Why your client needs a <br className="d-none d-lg-block" />
                                        responsive website

                                    </h2>

                                    <div className="recent_arrow ">
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

                        <div className="col-md-6 pt-3">
                            <div className="recent_blog_right_side">
                                <img className="img-fluid" src={blog2} alt=""
                                    data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1400"
                                    data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" />

                                <h3 className="blog_gray">Sep 26, 2023

                                </h3>

                                <div className=" heading_with_arrow d-flex justify-content-between align-items-center">
                                    <h2 className="blog_second_heading">Best design books for <br className="d-none d-lg-block" />
                                        increase design knowledge


                                    </h2>

                                    <div className="recent_arrow ">
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

            <div className="blog_bottom">
            </div>

          
        </>
    );
};

export default RecentBlog;