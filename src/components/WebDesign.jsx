import React from 'react';
import wdesignrimg from '../assets/images/web_design_right_img.png'
import { Link } from 'react-router-dom';


const WebDesign = () => {
    return (
        <div>
                <section className="left_side_content bg_black_gray" style={{ overflowX: "hidden" }}>
        <div className="container">
            <div className="row align-items-center">

                <div className="col-md-6 d-lg-none  d-block">
                    <div className="img_right">
                        <img className="img-fluid" src={wdesignrimg} alt=""  
                        
                        data-aos="fade-left" data-aos-offset="200" data-aos-delay="50"
                            data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false"
                        
                        />


                    </div>

                </div>

                 <div className="col-md-6"> 
                    <div className="content_left">
                        <h3
                        data-aos="fade-right" data-aos-offset="200" data-aos-delay="50"
                            data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false"
                        
                        >
                            Web Design
                        </h3>

                        <p>
                            Web design is a multifaceted discipline that involves creating and <br
                                className="d-none d-lg-block"/> maintaining the visual
                            appearance and user experience of websites. It <br className="d-none d-lg-block"/> encompasses
                            various elements, including
                            graphic design, user <br className="d-none d-lg-block"/> interface (UI) design, user experience
                            (UX) design, and front-end <br className="d-none d-lg-block"/>
                            development. Here are key components of web design
                        </p>

                        <button className="btn btn_primary orange_btn">
                        <Link to="/portfolio">
                            <a className="clr_white" >View Project

                            </a>
                            </Link>

                        </button>



                    </div>

                </div> 


                <div className="col-md-6 d-none d-lg-block">
                    <div className="img_right">
                        <img className="img-fluid" src={wdesignrimg} alt=""
                        data-aos="fade-left" data-aos-offset="200" data-aos-delay="50"
                            data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false"
                        
                        
                        
                        />


                    </div>

                </div>

            </div>

        </div>
    </section>
        </div>
    );
};

export default WebDesign;