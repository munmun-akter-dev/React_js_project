import amlimg from '../assets/images/about_me_left_img.png'
const AboutMe = () => {
    return (
        <div>
         
           <div className="about_me " style={{ overflowX: "hidden" }} />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about_me_left_side d-none d-lg-block d-md-block">
                            <img className="img-fluid" src={amlimg} alt="" />

                        </div>

                    </div>

                    <div className="col-lg-6">
                        <div className="about_me_right_side">
                            <h2 className="second_heading" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50"
                                data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                data-aos-once="false">About Me</h2>
                            <p className="about_me_pera" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50"
                                data-aos-duration="1400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                data-aos-once="false">With 10 years experience as a professional Web developer, 1 have <br
                                    className="d-none d-lg-block " />
                                acquired the skills an knowledge necessary to make your project a <br
                                    className="d-none d-lg-block" />
                                success. I enjoy every step of the design
                                process, from discussion and <br className="d-none d-lg-block" /> collaboration. </p>

                            <ul className="about_me_items d-flex justify-content-center align-items-center">
                                <li>
                                    <h3><span className="number">10</span>+</h3>
                                    <p>Years of Experience <br className="d-none d-lg-block d-md-block" />in Design</p>

                                </li>
                                <img className="d-lg-block d-none" src="./assets/images/rectaingel.png" alt="" />
                                <li>
                                    <h3><span className="number">120</span>+</h3>
                                    <p>Successfullly Projects <br className="d-none d-lg-block" />Completed </p>
                                </li>

                                <img className="d-lg-block d-none" src="./assets/images/rectaingel.png" alt="" />


                                <li>
                                    <h3> <span className="number">60</span>+</h3>
                                    <p>Global <br className="d-none d-lg-block" /> Customers</p>
                                </li>

                            </ul>

                            <div className="download_btn text-center text-lg-start">
                                <button className="btn btn_primary orange_btn">
                                    <a className="clr_white" href="#" download="./assets/images/about_me_left_img.png">Download
                                        CV
                                        <img src="./assets/images/download_btn_pic.png" alt="" />
                                    </a>

                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
      
            


        </div>
    );
};

export default AboutMe;