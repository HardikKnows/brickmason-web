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
import pic from "../../assets/images/prop.jpg"



function Home() {
  const images = [
    "/car-images/slider2.png",
    "/car-images/slider3.png",
    "/car-images/slider4.png",
  ];
  const locations = [
    'UP, Sultanpur',
    'UP, Amethi',
    'UP, Lucknow',
  ];
  const captions = [
    {
      title: "Premium Construction Services",
      description: "Delivering exceptional quality in residential and commercial projects across Uttar Pradesh"
    },
    {
      title: "Expert Remodeling Solutions",
      description: "Transforming spaces with innovative designs and precision craftsmanship"
    },
    {
      title: "End-to-End Project Management",
      description: "From concept to completion, we handle every detail of your construction needs"
    }
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
