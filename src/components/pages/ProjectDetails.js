import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Modern Villa",
    location: "Bangalore",
    images: ["/car-images/slider2.png", "/car-images/slider3.png", "/car-images/slider4.png", "/car-images/slider5.png"],
    description: "Nestled in the heart of Bangalore, this luxurious modern villa offers the perfect blend of sophistication and comfort. Designed with state-of-the-art amenities, it stands as a testament to contemporary architectural excellence. The villa features expansive open-plan living spaces with high ceilings, allowing for an abundance of natural light and breathtaking views of the surrounding landscape. Every corner of the home is crafted with meticulous attention to detail, from the sleek, modern kitchen to the indulgent spa-like bathrooms. With its five spacious bedrooms, each equipped with premium fixtures and finishes, and a beautifully landscaped garden, this home provides a serene retreat from the bustle of city life. The villa also includes cutting-edge smart home technology, ensuring convenience and security at your fingertips. Perfect for those who seek a harmonious blend of modern living and timeless elegance, this villa is an ideal sanctuary for discerning homeowners.",
    details: {
      size: "5000 sq. ft.",
      rate: "₹2.5 Cr",
      bedrooms: "5",
      bathrooms: "4",
      builtYear: "2022",
      architect: "Jane Doe Architects",
    },
    testimonial: {
      text: "Brick&Bolt did an amazing job building our dream home. The team was professional, and the quality of work was outstanding!",
      author: "John Doe",
    },
  },
  // Add more projects
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="text-center text-red-500">Project not found.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 px-4 mx-auto p-8 space-y-8"
    >
      {/* Hero Section */}
      <motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.5 }}
  className="mb-10"
>
  <div className="text-center mb-6">
    <h1 className="text-5xl font-bold text-gray-800 mb-2">{project.title}</h1>
    <p className="text-xl text-gray-500">{project.location}</p>
  </div>

  <div className="flex flex-col lg:flex-row items-start gap-8">
    {/* Project Image */}
    <div className="flex-1">
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-96 object-cover rounded-xl shadow-2xl"
      />
    </div>

    {/* Project Details */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="flex-1"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-600">Size</p>
            <p className="text-gray-800 font-semibold">{project.details.size}</p>
          </div>
          <div>
            <p className="text-gray-600">Rate</p>
            <p className="text-gray-800 font-semibold">{project.details.rate}</p>
          </div>
          <div>
            <p className="text-gray-600">Bedrooms</p>
            <p className="text-gray-800 font-semibold">{project.details.bedrooms}</p>
          </div>
          <div>
            <p className="text-gray-600">Bathrooms</p>
            <p className="text-gray-800 font-semibold">{project.details.bathrooms}</p>
          </div>
          <div>
            <p className="text-gray-600">Built Year</p>
            <p className="text-gray-800 font-semibold">{project.details.builtYear}</p>
          </div>
          <div>
            <p className="text-gray-600">Architect</p>
            <p className="text-gray-800 font-semibold">{project.details.architect}</p>
          </div>
        </div>
      </motion.div>
        </div>
      </motion.div>

     {/* Image Gallery */}
<motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.5 }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
>
  {project.images.map((image, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-xl shadow-md transition-transform hover:scale-105"
    >
      <img
        src={image}
        alt={`Project Image ${index + 1}`}
        className="w-full h-64 object-cover"
      />
    </div>
  ))}
</motion.div>

      <p className="text-lg text-gray-800">{project.description}</p>


     {/* Testimonial Section */}
<motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.5 }}
  className="text-center max-w-4xl mx-auto p-6 rounded-xl shadow-lg bg-white/40 backdrop-blur-md"
>
  <h2 className="text-3xl font-semibold text-gray-800 mb-4">What Our Client Says</h2>
  <div className="text-gray-600 italic text-lg leading-relaxed mb-4 relative">
    <span className="text-4xl text-blue-400 mr-2">“</span>
    {project.testimonial.text}
    <span className="text-4xl text-blue-400 ml-1">”</span>
  </div>
  <p className="text-gray-700 font-semibold">— {project.testimonial.author}</p>
</motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interested? Schedule a Visit Today!</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg mb-4"
        >
          Schedule a Visit
        </motion.button>

        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Back to Projects
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
