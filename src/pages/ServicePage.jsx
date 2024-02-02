import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ServiceHero from '../components/ServiceHero';
import UiUx from '../components/UiUx';
import GraphicDesign from '../components/GraphicDesign';
import WebDesign from '../components/WebDesign';
import ProductDesign from '../components/ProductDesign';
const ServicePage = () => {
    return (
        <div>
            <Navbar />


            <ServiceHero />
            <UiUx />
            <GraphicDesign />
            <WebDesign />
            <ProductDesign />
            <Footer />


        </div>
    );
};

export default ServicePage;