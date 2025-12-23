import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import WhyUs from "../hero/WhyUs";
import Carousel from "../hero/Carousel";
import HowItWorks from "../hero/HowItWorks";
import OurServices from "../hero/OurServices";
import ExplorepPlans from "../hero/PackageTable.jsx";
import Banner from "../hero/Banner.jsx";
import Projects from "../hero/Projects.jsx";
import ContactForm from "../common/ContactForm.jsx";
import MeetOurTeam from "../hero/MeetOurTeam.jsx";
import Promotional from "../hero/Promotional";
import Footer from "../footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const location = useLocation();

  // 🔑 HANDLE SCROLL TO SECTION
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const element = document.getElementById(id);

    if (!element) return;

    // Delay ensures DOM + images are rendered
    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  }, [location]);

  return (
    <div id="top">
      <Banner />

      <ContactForm />

      {/* OUR SERVICES */}
      <section id="our-services">
        <OurServices />
      </section>

      <ExplorepPlans />

      {/* HOW IT WORKS */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      <Promotional />

      {/* PROJECTS */}
      <section id="our-projects">
        <Projects />
      </section>

      <WhyUs />

      <MeetOurTeam />

      <Footer />
    </div>
  );
}

export default Home;
