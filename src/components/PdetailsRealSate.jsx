import React from 'react';
import wecratearrowimg from '../assets/images/we_create_arrow_img.png'

const PdetailsRealSate = () => {
    return (
        <div>
              <section className="realstate_website" style={{ overflowX: "hidden" }}>
        <div className="container">
            <div className="row">

                <div className="realstate_parent d-flex justify-content-center  ">
                    <p className="d-none d-lg-block">06 October,2023</p>
                    <h3 className="d-none d-lg-block"> Real Estate Website</h3>
                    <h5>Website Design</h5>

                </div>
                <div className="small_device_parent">
                    <h3 className=" small_device d-lg-none d-block"> Real Estate Website</h3>
                </div>

                <div className="overview_parent">
                    <h4>Overview</h4>
                    <p className="overview_content">Estates is a sophisticated and user-friendly real estate website
                        designed to
                        provide a seamless experience for property buyers, sellers, and real estate professionals. <br
                            className="d-none d-lg-block"/> With a
                        focus on modern design, robust functionality, and intuitive navigation, Elite Estates stands out
                        as
                        a premier platform in the competitive real estate market.



                        Estates <br className="d-none d-lg-block"/>
                        is a sophisticated and
                        user-friendly real estate website designed to provide a seamless experience for property buyers,
                        sellers, and real estate professionals. With a <br className="d-none d-lg-block"/> focus on modern
                        design, robust functionality, and
                        intuitive navigation, Elite Estates stands out as a premier platform in the competitive real
                        estate
                        market.</p>


                </div>

                <div className="key_feature_parent">
                    <h4>Key Features:</h4>

                    <div className="key_feature_child">
                        <h5>Responsive Design</h5>
                        <p className="key_feature_content">Estates boasts a responsive design, ensuring a seamless and
                            visually appealing experience
                            across various devices, <br className="d-none d-lg-block"/> including desktops, tablets, and
                            smartphones</p>

                        <div className="child_bottom">

                        </div>
                    </div>

                    <div className="key_feature_child">
                        <h5>Property Search</h5>
                        <p className="key_feature_content">A powerful and customizable property search feature allows users
                            to filter properties based on location, price <br className="d-none d-lg-block"/>range, property
                            type, and other criteria,
                            facilitating quick and efficient property discovery.</p>

                        <div className="child_bottom">

                        </div>
                    </div>

                    <div className="key_feature_child">
                        <h5>Interactive Map Integration</h5>
                        <p className="key_feature_content">The integration of an interactive map feature enhances the user
                            experience by providing a visual representation of <br className="d-none d-lg-block"/> property
                            locations. Users can
                            explore
                            neighborhoods and nearby amenities with ease</p>

                        <div className="child_bottom">

                        </div>
                    </div>


                    <div className="key_feature_child">
                        <h5>User Profiles and Dashboards</h5>
                        <p className="key_feature_content">Personalized user profiles and dashboards offer registered users
                            the ability to save favorite listings, <br className="d-none d-lg-block"/> track property
                            history, and manage property
                            alerts,
                            ensuring a tailored experience</p>

                        <div className="child_bottom">

                        </div>
                    </div>


                    <div className="key_feature_child">
                        <h5>Virtual Tours and Multimedia</h5>
                        <p className="key_feature_content">High-quality images and virtual tours provide a detailed and
                            immersive view of listed <br className="d-none d-lg-block"/> properties, giving potential buyers
                            a comprehensive understanding
                            of each space.</p>

                        <div className="child_bottom">

                        </div>
                    </div>

                </div>


            </div>
        </div>

        <div className="we_create d-flex  ">
            <h3 className="d-lg-block  d-none">hings</h3>
            <a href=""><img className="img-fluid d-lg-block  d-none" src={wecratearrowimg}
                    alt=""/></a>
            <h3 className="d-md-block d-sm-block">We create special things</h3>
            <a href=""><img src={wecratearrowimg} alt=""/></a>
            <h3 className="d-none d-lg-block ">We cre</h3>


        </div>

    </section>

        </div>
    );
};

export default PdetailsRealSate;