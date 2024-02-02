/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioDetailsHero from '../components/PortfolioDetailsHero';

import PdetailsRealSate from '../components/PdetailsRealSate';
import PdetailsInteresting from '../components/PdetailsInteresting';
import PdetailsConnect from '../components/PdetailsConnect';


const PortfolioDetailsPage = () => {
    return (
        <div>
            <Navbar />
            <PortfolioDetailsHero />
            <PdetailsRealSate />
            <PdetailsInteresting />
            <PdetailsConnect/>
    
            <Footer />
        </div>
    );
};

export default PortfolioDetailsPage;