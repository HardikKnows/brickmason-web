import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProjectsSection = ({ projects }) => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop slides infinitely
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of cards visible
    slidesToScroll: 1, // Number of slides to move per scroll
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Delay for auto-slide
    swipeToSlide: true, // Enables swipe gesture
    touchMove: true, // Enables touch movement
    arrows: true, // Show previous/next buttons
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="projects-carousel-section">
      <h2 className="section-title">Projects</h2>
      <p className='pb-5'>From a couple to a large Indian family,<br/>
we have houses built with emotions for everyone</p>      
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-location">
                <span>{project.location}</span>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProjectsSection;

