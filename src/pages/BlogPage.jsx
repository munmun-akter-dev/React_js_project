import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

const BlogPage = () => {
    return (
        <div>
             <Navbar />
               <Blog />
            <Footer />
        </div>
    );
};

export default BlogPage;