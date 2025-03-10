import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Modern Villa",
    location: "Bangalore",
    image: "/car-images/slider2.png",
    description: "A luxurious modern villa with state-of-the-art amenities.",
    details: {
      size: "5000 sq. ft.",
      rate: "₹2.5 Cr",
      bedrooms: "5",
      bathrooms: "4",
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
      className="container mx-auto p-4 flex-col"
    >
     

      {/* Hero Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8 w-full"
      >
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object- rounded-lg shadow-lg "
        />
      </motion.div>

      {/* Project Description */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-800 text-lg mb-8"
      >
        {project.description}
      </motion.p>

      {/* Project Details */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-gray-50 p-6 rounded-lg shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Project Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        </div>
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-blue-50 p-6 rounded-lg shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">What Our Client Says</h2>
        <p className="text-gray-800 italic mb-4">"{project.testimonial.text}"</p>
        <p className="text-gray-600 font-semibold">- {project.testimonial.author}</p>
      </motion.div>

      {/* Call-to-Action (CTA) Button */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg"
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