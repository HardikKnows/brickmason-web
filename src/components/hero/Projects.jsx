import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import Testimonials from './Testimonials';

const projects = [
  {
    id: 1,
    title: "Modern Villa",
    location: "Bangalore",
    image: "/car-images/slider2.png",
  },
  {
    id: 2,
    title: "Office Space",
    location: "Mumbai",
    image: "/car-images/slider3.png",
  },
  {
    id: 3,
    title: "Luxury Apartment",
    location: "Delhi",
    image: "/car-images/slider4.png",
  },
  // Add more projects
  {
    id: 4,
    title: "Modern Villa",
    location: "Bangalore",
    image: "/car-images/pro4.JPG",
  },
  {
    id: 5,
    title: "Office Space",
    location: "Mumbai",
    image: "/car-images/slider2.png",
  },
  {
    id: 6,
    title: "Luxury Apartment",
    location: "Delhi",
    image: "https://via.placeholder.com/300",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section id='our-projects' className="relative overflow-hidden bg-gradient-to-b from-yellow-50 via-orange-50 to-rose-50 py-10">
      <div className="flex-col justify-center align-middle " >
      <h1 className="text-3xl font-bold text-center mb-8 ">Our Projects</h1>
      <p className=' text-center'>From a couple to Large Indian Family, we have houses built with emotions for everyone</p>
      </div>
      <div className="container mx-auto p-4 relative">
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    className="custom-swiper"
    breakpoints={{
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
  >
    {projects.map((project) => (
      <SwiperSlide key={project.id}>
        <div
  className="group border rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white hover:scale-105"
  onClick={() => navigate(`/projects/${project.id}`)}
>
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
  />
  <div className="p-4">
    <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
    <p className="text-gray-500">{project.location}</p>
  </div>
</div>

      </SwiperSlide>
    ))}
  </Swiper>
</div>

      <Testimonials/>
       {/* Decorative Background Elements (Optional for flair) */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-40 h-40 bg-orange-200 rounded-full opacity-30 top-10 left-10 animate-pulse" />
        <div className="absolute w-32 h-32 bg-yellow-200 rounded-full opacity-20 bottom-0 right-0 animate-[bounce_6s_ease-in-out_infinite] " />
      </div>
    </section>
  );
};

export default Projects;