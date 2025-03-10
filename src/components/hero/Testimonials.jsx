import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles
import { Navigation, Pagination } from 'swiper/modules';
import xavier from "../../assets/xavier_uncle.jpg"


const testimonials = [
  {
    id: 1,
    name: "Mr. Anoop Shukla",
    role: "Employed at Secretariat Lucknow",
    comment: "We were extremely satisfied with Brickmason Construction role as Contractor for this project and would highly recommend this company for any future projects.",
    image: "../../assets/xavier_uncle.jpg", // Placeholder image
  },
  {
    id: 2,
    name: "Mr. R.K.Verma",
    role: "Senior Guard at INDIAN RAILWAYS",
    comment: "Every corner is designed according to our preferences. Thanks to BRICKMASON TEAM for understanding our needs & providing us my dream home.",
    image: "../../assets/xavier_uncle.jpg", // Placeholder image
  },
  
  {
    id: 3,
    name: "Mr. Vishwa Deepak Tiwari ",
    role: "Businessman",
    comment: "Brickmason Construction performed very professionally with great communication and excellent onsite project management. They earned our confidence during the upgrade project at our house Maa Smriti.",
    image: "../../assets/xavier_uncle.jpg", // Placeholder image
  },
  {
    id: 4,
    name: "Mrs. Anita Singh",
    role: "Govt. Teacher",
    comment: "I’ve been very impressed with BRICKMASON’s performance on my residential construction project. They are well-organized and run a clean, efficient job-site…Shobhit and Pranjal have been great to work with."
    ,
    image: "../../assets/xavier_uncle.jpg", // Placeholder image
  },
  // Add more testimonials
];

const Testimonials = () => {
  return (
    <div className='bg-[#D6CBBF] pt-6'>
      <div className="flex-col justify-center align-middle " >
    <h1 className="text-3xl font-bold text-center mb-8 ">What Our Clients Say</h1>
    <p className=' text-center'>From a couple to Large Indian Family, we have houses built with emotions for everyone</p>
    </div>
    
    <div className="container mx-auto p-4">

     
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={2} // Display 2 testimonials at a time
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 testimonial on small screens
          },
          768: {
            slidesPerView: 2, // 2 testimonials on medium screens
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center h-full">
              {/* Image on the Left */}
              <img
                src={xavier}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-6"
              />

              {/* Name, Role, and Comment on the Right */}
              <div>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 mb-2">{testimonial.role}</p>
                <p className="text-gray-800 italic">"{testimonial.comment}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Testimonials;