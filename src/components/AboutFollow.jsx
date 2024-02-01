import React from 'react';
import fmelimg from '../assets/images/follow_me_left_img.png'

import fb1 from '../assets/images/f_fb1.png'
import fin2 from '../assets/images/f_in2.png'
import ftwt3 from '../assets/images/f_twt3.png'
import fins4 from '../assets/images/f_ins4.png'
import fgolbe5 from '../assets/images/fglobe5.png'
import fbe6 from '../assets/images/f_be6.png'


const AboutFollow = () => {
    return (
        <div>
                <section className="follow_me_about_page"style={{ overflowX: "hidden" }}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4">

                    <div className="follow_me_left_side">
                        <img className="img-fluid" src={fmelimg} alt="" data-aos="fade-right"
                            data-aos-offset="200" data-aos-delay="50" data-aos-duration="1600"
                            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"/>

                    </div>


                </div>

                <div className="col-md-8">
                    <div className="follow_me_box"
                    
                    data-aos="fade-left"
                            data-aos-offset="200" data-aos-delay="50" data-aos-duration="1600"
                            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                    
                        <h3>
                            Follow me
                        </h3>
                        <p className="follow_me_box_pera">
                            I am Kartik Bansal, a designer who works with <br className="d-none d-lg-block"/> startups to
                            build brands.


                        </p>

                        <div className="follow_line text-center">

                        </div>

                        <ul className="follow_social_group d-flex justify-content-center align-items-center">
                            <li><a href="https://www.facebook.com/Opediatech/"><img src={fb1} alt=""/></a></li>
                            <li><a href=""><img src={fin2} alt=""/></a></li>
                            <li><a href=""><img src={ftwt3} alt=""/></a></li>
                            <li><a href=""><img src={fins4} alt=""/></a></li>
                            <li><a href=""><img src={fgolbe5} alt=""/></a></li>
                            <li><a href=""><img src={fbe6} alt=""/></a></li>
                        </ul>
                    </div>



                </div>


            </div>
        </div>
    </section>
        </div>
    );
};

export default AboutFollow;