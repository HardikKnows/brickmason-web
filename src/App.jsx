import logo from "./assets/logo.png";
import "./App.css";
import FooterTabs from "./components/footer/FooterTabs";
import HeaderWindow from "./components/header/HeaderWindow";
import HeaderMobile from "./components/header/HeaderMobile";
import FooterUtils from "./components/footer/FooterUtils";
import Loader from "./components/common/Loader";
import Home from "./components/pages/Home";
import ProjectDetails from './components/hero/ProjectDetails'; // Import the ProjectDetails component

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="text-center">
      {/* <Loader /> */}
      <HeaderMobile />
      <HeaderWindow />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page with project section */}
          <Route path="/projects/:id" element={<ProjectDetails />} /> {/* Details page */}
        </Routes>
    </Router>
     
      <FooterUtils />
      <FooterTabs />
    </div>
  );
}

export default App;
