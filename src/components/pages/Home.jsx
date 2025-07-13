import WhyUs from "../hero/WhyUs";
import Carousel from "../hero/Carousel";
import HowItWorks from "../hero/HowItWorks";
import OurServices from "../hero/OurServices";
import ExplorepPlans from "../hero/PackageTable.jsx";
import Banner from "../hero/Banner.jsx";
import Projects from "../hero/Projects.jsx";
import ProjectDetails from './ProjectDetails.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "../common/ContactForm.jsx";



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
    'Sultanpur , Uttar pradesh',
    'Amethi , Uttar pradesh',
    'Lucknow , Uttar pradesh',
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
      <Banner/>
      {/*<Carousel images={images} locations={locations} captions={captions} autoSlide={true} slideInterval={4000}/>*/}
      <ContactForm/>
      <OurServices/>
      <ExplorepPlans/>
      <HowItWorks/>
     
   
      {/*<Vibes/>
      <Referral/>*/}
      <Promotional/>
      <Projects />
      <WhyUs/>
     

    {/*<ProjectsSection projects={projectData} />*/}
      <Footer/>
    
      </div>
  );
}
export default Home;
