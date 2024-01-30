import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import RecentBlog from "./components/RecentBlog"

import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import SelectedPoject from './components/SelectedPoject';
import MyServices from './components/MyServices';
import Testimonial from './components/Testimonial';



function App() {

  return (
    <>


      <Navbar />
      <Hero />
      <AboutMe />
      <SelectedPoject/>
      <MyServices/>
      <Testimonial/>
      <RecentBlog />
      <Footer />
    </>
  )
}

export default App
