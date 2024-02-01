import React from 'react';
import cimg1 from '../assets/images/c.img1.png'
import cimg2 from '../assets/images/c.img2.png'
import cimg3 from '../assets/images/c.img3.png'
import cimg4 from '../assets/images/c.img4.png'
import cimg5 from '../assets/images/c.img5.png'
import cimg6 from '../assets/images/c.img6.png'
import cimg7 from '../assets/images/c.img7.png'
import cimg8 from '../assets/images/c.img8.png'
import cimg9 from '../assets/images/c.img9.png'
import cimg10 from '../assets/images/c.img10.png'



const AboutCompany = () => {
    return (
        <div>
                <section className="about_company"  style={{ overflowX: "hidden" }}>
        <div className="container">
            <div className="row">
                <div className="company_parent">
                    <h2 className="gradient">
                        Companies
                        <span>I have Worked with</span>
                    </h2>

                    <ul className="company_img_group_upper d-flex justify-content-center align-items-center   ">
                        <li><img className="img-fluid" src={cimg1} alt=""/></li>
                        <li><img className="img-fluid" src={cimg2} alt=""/></li>
                        <li><img className="img-fluid" src= {cimg3}alt=""/></li>
                        <li><img className="img-fluid" src={cimg4} alt=""/></li>
                        <li><img className="img-fluid " src={cimg5} alt=""/></li>
                    </ul>


                    <ul className="company_img_group_lower d-flex justify-content-center align-items-center ">
                        <li><img className="img-fluid  d-none d-lg-block " src={cimg6} alt=""/></li>
                        <li><img className="img-fluid  d-none d-lg-block " src={cimg7}alt=""/></li>
                        <li><img className="img-fluid  d-none d-lg-block " src={cimg8}alt=""/></li>
                        <li><img className="img-fluid  d-none d-lg-block " src={cimg9} alt=""/></li>
                        <li><img className="img-fluid  d-none d-lg-block  " src={cimg10} alt=""/></li>
                    </ul>


                </div>

            </div>
        </div>
    </section>
        </div>
    );
};

export default AboutCompany;