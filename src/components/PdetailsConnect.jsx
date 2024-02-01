import React from 'react';
import letscnctimg from '../assets/images/lets_cnt_img.png'

const PdetailsConnect = () => {
    return (
        <div>
            <section className="connect" style={{ overflowX: "hidden" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="connect_left_side">

                                <h2 className="cnt_head">
                                    Lets <a href="mailto:kazimun50@gmail.com" target="blank">
                                        <img
                                            src={letscnctimg} alt="" /></a>
                                    <br className="d-none d-lg-block " />
                                    <a href="">Connect.</a>



                                </h2>
                                <p>We take the time to understand your business and develop a <br className="d-none d-lg-block" />
                                    strategy that is tailored to your unique needs and goals.</p>

                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="connect_right_side">

                                <div className="connect_child">


                                    <input id="connect_child_content" type="text" placeholder="Your Name" />


                                    <div className="connect_line">

                                    </div>
                                </div>

                                <div className="connect_child">

                                    <input id="connect_child_content" type="text" placeholder="Your Mail" />

                                    <div className="connect_line">

                                    </div>
                                </div>

                                <div className="connect_child">
                                    <input id="connect_child_content" type="text" placeholder="Message" />


                                    <div className="connect_line">

                                    </div>
                                </div>

                                <a href="mailto:kazimun50@gmail.com" target="blank"><p className="send_mgs">Send Message</p></a>


                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default PdetailsConnect;