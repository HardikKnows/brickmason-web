import React, { useState, useEffect } from "react";
import pic from "../../assets/images/prop.jpg";

const Carousel = ({ images, locations, captions, autoSlide = true, slideInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveSlide = (direction) => {
    let newSlide = currentSlide + direction;
    if (newSlide >= images.length) newSlide = 0;
    else if (newSlide < 0) newSlide = images.length - 1;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => moveSlide(1), slideInterval);
      return () => clearInterval(interval);
    }
  }, [currentSlide, autoSlide, slideInterval]);

  return (
    <div>
      <div className="carousel-wrapper">
        {/* Carousel Section (70% width) */}
        <div className="carousel-container">
          <div className="carousel">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === currentSlide ? "active" : ""}`}
              >
                <img src={image} alt={`Slide ${index + 1}`} />
                <div className="location-label">{locations[index]}</div>
                
                {/* Caption Div - Added Here */}
                <div className="carousel-caption">
                  <div className="caption-content">
                   {/* <h3 >{captions[index].title}</h3>*/}
                    <p className="description-label"><span className="text-[20px]">{captions[index].title}</span><br/>{captions[index].description}</p>
                  </div>

                </div>
                {/*<a className="bg-[#D2042D] promo-btn-radius source-sans px-[15px] py-[7px] text-white text-[12px] md:text-[16px] no-underline   w-fit absolute bottom-2 left-[45%]" href="/lets-build.html">Let's Build&nbsp;&nbsp;<i className="fa fa-wrench"></i></a>*/}

              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button className="prev" onClick={() => moveSlide(-1)} aria-label="Previous Slide">
            &#10094;
          </button>
          <button className="next" onClick={() => moveSlide(1)} aria-label="Next Slide">
            &#10095;
          </button>
        </div>

        {/* Headline Section (30% width) */}
        <div className="headline-section">
          <img src={pic} alt="Property" />
          <div className="headline-content"></div>
        </div>
      </div>
      <h1 className="mt-3 mb-5 text-center workSans text-xs md:text-base">
        We have provided complete remodeling and construction solutions for residential and commercial properties all across Uttar Pradesh.
      </h1>
    </div>
  );
};

export default Carousel;