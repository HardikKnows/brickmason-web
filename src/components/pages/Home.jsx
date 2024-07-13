import WhyUs from "../hero/WhyUs";
import slide1 from "../../assets/slider-1.jpg"
import slide2 from "../../assets/slider-2.jpg"
import slide3 from "../../assets/slider-3.jpg"
import HeroSection from "../hero/HeroSection";
var slides = [
    slide1,
    slide2,
    slide3
    
];
function Home() {
  return (
    <div>
      <HeroSection autoSlide={true}>
    {[...slides.map((s) => (
            <img src={s} />
          ))]}
    </HeroSection>
      <WhyUs></WhyUs>
    </div>
  );
}
export default Home;
