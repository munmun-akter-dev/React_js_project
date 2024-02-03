import React from 'react';
import gphiclimg from '../assets/images/graphic_design_left_img.png'
import { Link } from 'react-router-dom';

const GraphicDesign = () => {
    return (
        <div>
             <section className="right_side_content bg_black_gray"  style={{ overflowX: "hidden" }}>
        <div className="container">
            <div className="row align-items-center">


                <div className="col-md-6">
                    <div className="img_right">
                        <img className="img-fluid" src={gphiclimg} alt=""  
                        
                        
                        data-aos="fade-right" data-aos-offset="200" data-aos-delay="50"
                            data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false"
                        
                        />


                    </div>

                </div>



                <div className="col-md-6">
                    <div className="content_right">
                        <h3
                        data-aos="fade-left" data-aos-offset="200" data-aos-delay="50"
                            data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false"
                        
                        >
                            Graphic Design
                        </h3>

                        <p>
                            Graphic design is a creative process that involves the visual <br className="d-none d-lg-block"/>
                            communication and presentation
                            of ideas using various visual <br className="d-none d-lg-block"/> elements and tools. Graphic
                            designers use their skills to
                            create visual <br className="d-none d-lg-block"/> content for a wide range of mediums, including
                            print, digital, and <br className="d-none d-lg-block"/> multimedia
                            platforms. The goal of graphic design is to convey a <br className="d-none d-lg-block"/> message,
                            evoke emotions, or communicate
                            information in a visually <br className="d-none d-lg-block"/> appealing and effective manner.
                        </p>

                        <button className="btn btn_primary orange_btn">
                        <Link to="/portfolio">
                            <a className="clr_white" >View Project

                            </a>
                            </Link>

                        </button>



                    </div>

                </div>

            </div>


        </div>
    </section>
        </div>
    );
};

export default GraphicDesign;