/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import AboutCompany from '../components/AboutCompany';
import AboutFollow from '../components/AboutFollow';
import Footer from '../components/Footer';


const AboutPage = () => {
    return (
        <div>
              <Navbar />
            <AboutHero />
            <AboutCompany />
            <AboutFollow />
            <Footer />
        </div>
    );
};

export default AboutPage;