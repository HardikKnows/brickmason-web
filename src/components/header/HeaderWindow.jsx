import logo from "../../assets/logo.png";
import React from 'react';

const HeaderWindow = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Brick Mason Logo" />
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#our-projects">Our Projects</a></li>
            <li><a href="#cost-estimator">Cost Estimator</a></li>
            <li><a href="#how-it-works">How it Works</a></li>
            <li><a href="#our-services">Our Services</a></li>
            <li className="dropdown">
              <a href="#more">More</a>
              <ul className="dropdown-menu">
                <li><a href="#material-estimator">Material Estimator</a></li>
                <li><a href="#floor-plans">Floor Plans</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#our-team">Our Team</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="cta">
          <a href="#contact-us" className="cta-button">Let's Build</a>
        </div>
      </div>
    </header>
  );
};

export default HeaderWindow;
