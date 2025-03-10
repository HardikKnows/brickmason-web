import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

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
    <div className='bg-[#D6CBBF] pt-6'>
      <div className="flex-col justify-center align-middle " >
      <h1 className="text-3xl font-bold text-center mb-8 ">Our Projects</h1>
      <p className=' text-center'>From a couple to Large Indian Family, we have houses built with emotions for everyone</p>
      </div>
    <div className="container mx-auto p-4">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
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
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => navigate(`/projects/${project.id}`)} // Navigate to detailed page
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-[#ffff]">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.location}</p>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Projects;