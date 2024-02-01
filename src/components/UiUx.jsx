import React from 'react';
import uxuirimg from '../assets/images/ux_ui_right.png'

const UiUx = () => {
    return (
        <div>
             <section className="left_side_content" style={{ overflowX: "hidden" }}>
        <div className="container">
            <div className="row align-items-center">


                <div className="col-md-6 d-lg-none d-block">
                    <div className="img_right">
                        <img className="img-fluid" src={uxuirimg}alt=""/>


                    </div>

                </div>

                <div className="col-md-6">
                    <div className="content_left">
                        <h3  

                        data-aos="fade-right" data-aos-offset="200" data-aos-delay="50"
                            data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false"
                        
                        >
                            UI/UX Design
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
                            <a className="clr_white" href="./portfolio.html">View Project

                            </a>

                        </button>



                    </div>

                </div>


                <div className="col-md-6 d-none d-lg-block">
                    <div className="img_right">
                        <img className="img-fluid" src={uxuirimg} alt=""


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

export default UiUx;