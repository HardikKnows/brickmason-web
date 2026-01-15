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

  return <div style={{
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
    textAlign: "center"
  }}>
    <div>
      <h1>Service Temporarily Unavailable</h1>
      <p>This service has been paused due to administrative reasons.</p>
      <p>Please contact the administrator.</p>
    </div>
  </div>
}

export default Home;
