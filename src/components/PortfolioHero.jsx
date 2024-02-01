import React from 'react';

const PortfolioHero = () => {
    return (
        <div>
                <section className="service_hero">
        <div className="container">
            <div className="row">
                <div className="portfolio_head">
                    <h2 data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1400"
                        data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        My Portfolio
                    </h2>

                    <ul className="portfolio_list_group d-flex justify-content-center align-items-center">
                        <li className="nav-item ">
                            <a className="nav-link active" aria-current="page" href="./portfolio_details.html">All</a>
                        </li>
                      
                        <li><a href="./portfolio.html">
                                <p className="p_list">Graphic Design</p>
                            </a></li>
                        <li><a href="./portfolio.html">
                                <p className="p_list">UI UX Design</p>
                            </a></li>
                        <li><a href="./portfolio.html">
                                <p className="p_list">Development</p>
                            </a></li>

                    </ul>
                </div>
            </div>
        </div>

    </section>

        </div>
    );
};

export default PortfolioHero;