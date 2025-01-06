import React, { useState, useEffect } from "react";

const Carousel = ({ images, locations, captions, autoSlide = true, slideInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Move to next or previous slide
  const moveSlide = (direction) => {
    let newSlide = currentSlide + direction;

    if (newSlide >= images.length) {
      newSlide = 0; // loop to the first slide
    } else if (newSlide < 0) {
      newSlide = images.length - 1; // loop to the last slide
    }

    setCurrentSlide(newSlide);
  };

  // Automatic sliding functionality
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        moveSlide(1);
      }, slideInterval);
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [currentSlide, autoSlide, slideInterval]);

  return (
    <div className="carousel-container bg-[#e7e8e9]">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentSlide ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
            <div className="dim-overlay"></div> {/* Dim effect overlay */}
          {/* Location Label */}
          <div className="location-label">{locations[index]}</div>
          {/* Centered Caption */}
          <div className="caption">{captions[index]}</div>
         {/* Horizontal line below the carousel */}
      <div className="carousel-line"></div>
      {/* Text below the line */}
      <div className="carousel-text">
        <p><strong>We have provided complete remodeling and construction solutions for </strong></p>
        <p><strong>residential and commercial properties all across Uttar Pradesh.</strong></p>
      </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button className="prev" onClick={() => moveSlide(-1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => moveSlide(1)}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;