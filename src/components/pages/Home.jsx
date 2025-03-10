import WhyUs from "../hero/WhyUs";
import Carousel from "../hero/Carousel";
import HowItWorks from "../hero/HowItWorks";
import OurServices from "../hero/OurServices";
import ExplorepPlans from "../hero/PackageTable.jsx";
import Projects from "../hero/Projects.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from '../hero/ProjectDetails.js';


import Vibes from "../hero/Vibes";
import Referral from "../hero/Referral";
import Promotional from "../hero/Promotional";
import Footer from "../footer/Footer";
import Testimonials from "../hero/Testimonials.jsx";



function Home() {
  const images = [
    "/car-images/slider2.png",
    "/car-images/slider3.png",
    "/car-images/slider4.png"
  ];
  const locations = [
    'UP, Sultanpur',
    'UP, Amethi',
    'UP, Lucknow',
  ];
  const captions = [
    'we provide outstanding construction services',
    'we provide outstanding construction services',
    'we provide outstanding construction services',
  ];
  
  





  return (
    <div>
      <Carousel images={images} locations={locations} captions={captions} autoSlide={true} slideInterval={4000}/>
      <WhyUs/>
      <HowItWorks/>
      <OurServices/>
      <ExplorepPlans/>
      {/*<Vibes/>
      <Referral/>*/}
      <Promotional/>
      <Projects />
      <Testimonials/>
    {/*<ProjectsSection projects={projectData} />*/}
      <Footer/>
    
      </div>
  );
}
export default Home;
