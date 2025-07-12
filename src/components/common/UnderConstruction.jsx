import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const UnderConstruction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-gray-100 to-gray-200 text-center px-4"
    >
      <img
        src="https://i.gifer.com/VAyR.gif"
        alt="Under Construction"
        className="w-64 h-64 mb-6 rounded-xl shadow-md"
      />

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
        This Page is Under Construction
      </h1>

      <p className="text-gray-600 text-lg md:text-xl max-w-xl mb-6">
        We're working hard to bring this section live. It will be available very soon. Thank you for your patience!
      </p>

      <Link to="/">
        <button className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg transition-all duration-300">
          ← Back to Home
        </button>
      </Link>
    </motion.div>
  );
};

export default UnderConstruction;
