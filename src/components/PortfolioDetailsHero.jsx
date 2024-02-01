import React from 'react';
import prtfolioherolimg from '../assets/images/portfolio_details_hero_left_img.png'
import prtfolioheromidimg from '../assets/images/portfolio_hero_middle_img.png'
import prtfolioherorightimg from '../assets/images/portfolio_hero_right_img.png'


const PortfolioDetailsHero = () => {
    return (
        <div>
            
    <section className="portfolio_details_hero" style={{ overflowX: "hidden" }}>


<div className="port_details_hero_img_group d-flex justify-content-center align-items-end">
    <div className="col-lg-3">
        <img className="img-fluid" src={prtfolioherolimg} alt=""/>
    </div>

    <div className="col-lg-6">
        <img className="img-fluid" src={prtfolioheromidimg} alt=""/>
    </div>

    <div className="col-lg-3">
        <img className="img-fluid" src={prtfolioherorightimg} alt=""/>
    </div>
</div>






</section>
        </div>
    );
};

export default PortfolioDetailsHero;