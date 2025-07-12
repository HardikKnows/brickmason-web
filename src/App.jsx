import logo from "./assets/logo.png";
import "./App.css";
import FooterTabs from "./components/footer/FooterTabs";
import HeaderWindow from "./components/header/HeaderWindow";
import HeaderMobile from "./components/header/HeaderMobile";
import FooterUtils from "./components/footer/FooterUtils";
import Loader from "./components/common/Loader";
import Home from "./components/pages/Home";
import ContactPage from "./components/pages/ContactPage";
import ProjectDetails from './components/pages/ProjectDetails'; // Import the ProjectDetails component
import UnderConstruction from "./components/common/UnderConstruction";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="text-center">
      {/* <Loader /> */}
      {/*<HeaderMobile />*/}
      <HeaderWindow />
      <Routes> {/* No need for Router here */}
        <Route path="/" element={<Home />} /> {/* Home page with project section */}
        <Route path="/projects/:id" element={<ProjectDetails />} /> {/* Details page */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/UnderCons" element={<UnderConstruction />}/>
      </Routes>
      {/*<FooterUtils />*/}
      <FooterTabs />
    </div>
  );
}

export default App;
