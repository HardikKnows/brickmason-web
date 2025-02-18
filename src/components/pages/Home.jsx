import WhyUs from "../hero/WhyUs";
import Carousel from "../hero/Carousel";
import HowItWorks from "../hero/HowItWorks";
import OurServices from "../hero/OurServices";
import ExplorepPlans from "../hero/ExplorePlans";
import ProjectsSection from '../hero/ProjectsSection'

import Vibes from "../hero/Vibes";
import Referral from "../hero/Referral";
import Promotional from "../hero/Promotional";
import Footer from "../footer/Footer";
import Testimonial from "../hero/Testimonial";


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

const projectData = [
  {
    title: "HOUSE 1",
    description: "something to write description.",
    image: "/car-images/slider2.png",
    link: "https://example.com/portfolio",
    location: "San Francisco, CA",
    info: "G+1 ",
    size:" 1000 sqft.",
    package: "Premium package",
    Time: "Premium package",
  },
  {
    title: "HOUSE 2",
    description: "something to write description.",
    image: "/car-images/slider3.png",
    link: "https://example.com/ecommerce",
    location: "San Francisco, CA",
    info: "G+1 ",
    size:" 1000 sqft.",
    package: "Classic package",
    Time: "Premium package",
  },
  {
    title: "HOUSE 3",
    description: "something to write description.",
    image: "/car-images/slider4.png",
    link: "https://example.com/dashboard",
    location: "San Francisco, CA",
    info: "G+1 ",
    size:" 1000 sqft.",
    package: "Premium package",
    Time: "Premium package",
  },
  {
    title: "HOUSE 1",
    description: "something to write description.",
    image: "/car-images/pro4.JPG",
    link: "https://example.com/portfolio",
    location: "San Francisco, CA",
    info: "G+1 ",
    size:" 1000 sqft.",
    package: "Premium package",
    Time: "Premium package",
  },
  {
    title: "HOUSE 1",
    description: "something to write description.",
    image: "/car-images/slider2.png",
    link: "https://example.com/portfolio",
    location: "San Francisco, CA",
    info: "G+1 ",
    size:" 1000 sqft.",
    package: "Premium package",
    Time: "Premium package",
  },
];


  return (
    <div>
      <Carousel images={images} locations={locations} captions={captions} autoSlide={true} slideInterval={4000}/>
      <WhyUs/>
      <HowItWorks/>
      <OurServices/>
      <ExplorepPlans/>
      {/*<Testimonial/>*/}
      {/*<Vibes/>
      <Referral/>*/}
      <Promotional/>
      <ProjectsSection projects={projectData} />
      <Footer/>
    
      </div>
  );
}
export default Home;
