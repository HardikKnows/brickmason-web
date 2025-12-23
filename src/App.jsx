import "./App.css";
import FooterTabs from "./components/footer/FooterTabs";
import HeaderWindow from "./components/header/HeaderWindow";
import Home from "./components/pages/Home";
import ContactPage from "./components/pages/ContactPage";
import ProjectDetails from "./components/pages/ProjectDetails";
import UnderConstruction from "./components/common/UnderConstruction";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import FAQs from "./components/pages/FAQs";
import CancellationPolicy from "./components/pages/CancellationPolicy";
import AboutUs from "./components/pages/AboutUs";
import CostEstimator from "./components/pages/CostEstimator";
import FloorPlans from "./components/pages/FloorPlans";
import ScrollToHash from "./ScrollToHash";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-center">
      <HeaderWindow />

      {/* 👇 MUST be above Routes */}
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/UnderCons" element={<UnderConstruction />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/cost-estimator" element={<CostEstimator />} />
        <Route path="/floor-plans" element={<FloorPlans />} />
      </Routes>

      <FooterTabs />
    </div>
  );
}

export default App;
