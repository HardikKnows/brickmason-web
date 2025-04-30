import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import xavier from "../../assets/xavier_uncle.jpg"; // Imported once and used for all

const testimonials = [
  {
    id: 1,
    name: "Mr. Anoop Shukla",
    role: "Employed at Secretariat Lucknow",
    comment: "Brickmason Construction exceeded our expectations. We highly recommend them for any future projects.",
  },
  {
    id: 2,
    name: "Mr. R.K.Verma",
    role: "Senior Guard at INDIAN RAILWAYS",
    comment: "Every corner reflects our vision. Thanks to the Brickmason team for bringing our dream home to life.",
  },
  {
    id: 3,
    name: "Mrs. Anita Singh",
    role: "Govt. Teacher",
    comment: "I was highly impressed with Brickmason’s organized and efficient work on my home. Shobhit and Pranjal were a pleasure to work with.",
  },
  {
    id: 4,
    name: "Mr. Vishwa Deepak Tiwari",
    role: "Businessman",
    comment: "Brickmason showed great professionalism and communication. They truly earned our trust during our home upgrade.",
  },
];

const Testimonials = () => {
  return (
    <section id='Reviews' className="relative overflow-hidden pt-10 ">
      <div className="text-center mb-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h1>
        <p className="text-gray-600">From a couple to large Indian family, we have houses built with emotions for everyone.</p>
      </div>

      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1, // 👈 1 slide on small screens
            },
            768: {
              slidesPerView: 2, // 👈 2 slides on medium+ screens
            },
          }}
          
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col sm:flex-row items-start gap-4">
                <img
                  src={xavier}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
