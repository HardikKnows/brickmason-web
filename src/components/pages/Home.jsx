import WhyUs from "../hero/WhyUs";
import Carousel from "../hero/Carousel";
import HowItWorks from "../hero/HowItWorks";
import OurServices from "../hero/OurServices";
import ExplorepPlans from "../hero/ExplorePlans";
import ProjectCarousel from "../hero/ProjectCarousel";
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
      <Footer/>
    
      </div>
  );
}
export default Home;
