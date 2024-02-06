/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import SelectedPoject from '../components/SelectedPoject';
import MyServices from '../components/MyServices';
import Testimonial from '../components/Testimonial';

import RecentBlog from '../components/RecentBlog';
import { FaArrowUp } from 'react-icons/fa6';

const HomePage = () => {
    return (
        <div className='position-relative'>
            <Navbar />
            <Hero />
            <AboutMe />
            <SelectedPoject />
            <MyServices />
            <Testimonial />
            <RecentBlog /> 
            <Footer />
            
            <div className="goToTop">
            <FaArrowUp />
            </div>

        </div>
    );
};

export default HomePage;