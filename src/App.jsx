/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import RecentBlog from "./components/RecentBlog"

import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import SelectedPoject from './components/SelectedPoject';
import MyServices from './components/MyServices';
import Testimonial from './components/Testimonial';



import AboutHero from './components/AboutHero';
import AboutCompany from './components/AboutCompany';
import AboutFollow from './components/AboutFollow';


import ServiceHero from './components/ServiceHero';
import UiUx from './components/UiUx';
import GraphicDesign from './components/GraphicDesign';
import WebDesign from './components/WebDesign';
import ProductDesign from './components/ProductDesign';



import PortfolioHero from './components/PortfolioHero';
import PortfolioImg from './components/PortfolioImg';
import PortfolioDetailsHero from './components/PortfolioDetailsHero';
import PdetailsRealSate from './components/PdetailsRealSate';
import PdetailsInteresting from './components/PdetailsInteresting';
import PdetailsConnect from './components/PdetailsConnect';
import Blog from './components/Blog';








function App() {

  return (
    <>


      <Navbar />

      <Hero />
      <AboutMe />
      <SelectedPoject />
      <MyServices />
      <Testimonial />
      <RecentBlog />



      {/* <AboutHero />
      <AboutCompany />
      <AboutFollow/> */}
      {/* 
      <ServiceHero/>
      <UiUx />
      <GraphicDesign />
      <WebDesign/>
      <ProductDesign/> */}



      {/* <PortfolioHero />
      <PortfolioImg/> */}


      {/* <PortfolioDetailsHero/>
      <PdetailsRealSate/>
      <PdetailsInteresting/>
      <PdetailsConnect/> */}


      {/* <Blog/> */}



      <Footer />
    </>
  )
}

export default App
