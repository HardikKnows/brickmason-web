import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Homeicon from "../../assets/OurServices/icons/house.png";
import EXT from "../../assets/OurServices/icons/extention.png";
import Reno from "../../assets/OurServices/icons/rennovation.png";
import Dev from "../../assets/OurServices/icons/devolpment.png";
import LandSacape from "../../assets/OurServices/icons/landscape.png";
import Comm from "../../assets/OurServices/icons/commercial.png";



const services = [
  {
    title: 'Build New Homes',
    description: 'Turnkey packages for constructing new homes with a focus on collaboration with clients and architects.',
    icon: Homeicon,
    fullDescription: 'We can provide a turnkey package to construct a new build home. We are happy working closely with clients and architects to form a robust, well-informed team to move the project forwards with no surprises. Whether it is a traditional or contemporary new build home in Huddersfield that you are looking for, we can help.'
  },
  {
    title: 'House Extensions',
    description: 'Guidance on extending your home to suit your needs, often a more cost-effective solution than moving.',
    icon: EXT,
    fullDescription: 'Extending your home can often be a less costly and stressful option than moving to a new property. You can take the opportunity to change the layout and make the building work better for you. We will guide you every step of the way with your house extension. If required, we know some great Architects who can help design the space, apply for planning permission, and produce detailed plans.'
  },
  {
    title: 'House Renovation',
    description: 'Breathing new life into tired homes with experience in listed buildings and those in Heritage and Conservation areas.',
    icon: Reno,
    fullDescription: 'House renovation projects breathe new life into tired homes. We have significant experience working with listed buildings and ones within Heritage and Conservation areas. We use building techniques that are sympathetic to the building. You can update the layout to create better spaces. Make structural changes or perhaps just modernise what already exists. There are endless possibilities for completely changing the look, function, and feel of your house renovation project.'
  },
  {
    title: 'Property Development',
    description: 'Seeking properties and land for development in the Huddersfield area to create unique, high-quality properties.',
    icon: Dev,
    fullDescription: 'We are actively seeking properties with development potential. Also, land which may pose the opportunity for new build projects. Particularly we are looking for projects in the Holmfirth and Huddersfield areas. We will also consider opportunities which are further afield. Our aim is to produce unique and interesting properties built with care. If you have a property or land you would like to discuss, then please get in touch.'
  },
  {
    title: 'Landscaping & External Works',
    description: 'Adding value to your property with carefully built outdoor spaces, from driveways to rock features.',
    icon: LandSacape,
    fullDescription: 'Hard landscaping projects create an interesting outside area to your property and will add to its value. You can include Paved Areas, Bound Aggregate Paths with Timber, Concrete or Brick Edging, Rock & Stone Features, Pergolas & Shelters, Ponds & Water Features. Additionally, driveways and paths in a multitude of finishes, all carefully built to a high standard.'
  },
  {
    title: 'Commercial Construction',
    description: 'Delivering small to medium-sized projects in the commercial sector, from office refurbishments to industrial units.',
    icon: Comm,
    fullDescription: 'Building services to the commercial sector are within our scope. We are capable of delivering small to medium-sized projects which may include office or restaurant refurbishments, extensions to commercial premises, complete construction of small industrial units, change of use on commercial premises, and hard landscaping to external areas.'
  },
];

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const handleClose = () => {
    setActiveIndex(null);
  };

  return (
    <section className="py-16 bg-white relative z-0">
      <div className={`max-w-6xl mx-auto px-4 ${activeIndex !== null ? 'blur-sm pointer-events-none' : ''}`}>
        <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-center">
          We specialize in various construction services, from residential to commercial projects, tailored to your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow-md border bg-white text-gray-800"
            >
              <img src={service.icon} alt="" className="w-14 h-14 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm mb-6">{service.description}</p>
              <button
                onClick={() => handleCardClick(index)}
                className="px-4 py-2 rounded text-sm font-medium bg-red-600 text-white hover:bg-red-700"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Overlay */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl max-w-lg w-full p-8 relative text-center"
            >
              <img src={services[activeIndex].icon} alt="" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">{services[activeIndex].title}</h3>
              <p className="text-gray-700 mb-6">{services[activeIndex].description}</p>
              <p className="text-sm text-gray-500 mb-6">
                {services[activeIndex].fullDescription}
              </p>
              <button
                onClick={handleClose}
                className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurServices;
