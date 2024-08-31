import WhyUs from "../hero/WhyUs";
import HeroSection from "../hero/HeroSection";
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
  return (
    <div>
      <HeroSection/>
      <WhyUs/>
      <HowItWorks/>
      <OurServices/>
      <ExplorepPlans/>
      {/*<Testimonial/>*/}
      <Vibes/>
      <Referral/>
      <Promotional/>
      <Footer/>
    
      </div>
  );
}
export default Home;
