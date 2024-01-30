import React from 'react';
import  tmolimg from'../assets/images/testimonial_left_pic.png'

const Testimonial = () => {
    return (
        <div>
               <section className="testimonial bg_black_gray" style={{ overflowX: "hidden" }}>
        <div className="container">
            <div className="slider">
                <div className="row slide d-flex  align-items-center">
                    <div className="col-md-6">
                        <div className="tesimonial_left_side">
                            <img className="img-fluid" src={tmolimg} alt=""/>

                        </div>
                    </div>

                    <div className="col-md-6  ">
                        <div className="tesimonial_right_side">
                            <h2>
                                Testimonial
                            </h2>
                            <p className="testimonial_pera">We worked with Marketify designing our backend web app <br
                                    className="d-none d-lg-block"/> from scratch and we are happy with
                                the results. He has good <br className="d-none d-lg-block"/> communication skills and uses
                                robust
                                workflows that <br className="d-none d-lg-block"/> allowed me and
                                my team to work with him efficiently.</p>

                            <h4>
                                By Adam Walker
                            </h4>
                            <p className="ceo">CEO @Javis Company Ltd.</p>
                        </div>
                    </div>
                </div>

              

             
            </div>


        </div>
    </section>

        </div>
    );
};

export default Testimonial;