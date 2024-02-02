// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioHero from '../components/PortfolioHero';
import PortfolioImg from '../components/PortfolioImg';

const PortfolioPage = () => {
    return (
        <div>
            <Navbar />

            <PortfolioHero />
            <PortfolioImg />

            <Footer />
        </div>
    );
};

export default PortfolioPage;