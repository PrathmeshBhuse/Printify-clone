import React from 'react';
import { Star } from 'lucide-react'; 
import { motion } from 'framer-motion'; 
import userPhoto1 from '../assets/userPhoto1.png'; 
import userPhoto2 from '../assets/userPhoto2.jpeg'; 
import userPhoto3 from '../assets/userPhoto3.jpeg';

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Review = () => {
  return (
    <div className="p-4 md:p-8">
      {/* Upper Section */}
      <div className="mb-8 mt-5">
        <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-start" style={{ fontFamily: 'CerebriSans, sans-serif' }}>
            Trusted by over 8M <br /> sellers around the <br /> world
          </h1>
          <p className="text-gray-600 max-w-xl mt-4 md:mt-0 text-start text-sm md:text-base">
            Whether you are just getting started or run an enterprise-level <br /> e-commerce business, we do everything we can to ensure a positive merchant experience.
          </p>
        </div>
      </div>

      {/* Lower Section with Review Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Review Card 1 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          custom={0}
          variants={cardVariants}
        >
          <div className="flex items-center mb-4">
            <img src={userPhoto1} alt="User" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">John Doe</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 text-yellow-500 mr-1" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            "The product quality exceeded my expectations. Shipping was fast, and customer service was very helpful."
          </p>
        </motion.div>

        {/* Review Card 2 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          custom={1}
          variants={cardVariants}
        >
          <div className="flex items-center mb-4">
            <img src={userPhoto2} alt="User" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">Jane Smith</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 text-yellow-500 mr-1" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            "I've been a loyal customer for years. Their team always goes above and beyond to meet my needs."
          </p>
        </motion.div>

        {/* Review Card 3 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          custom={2}
          variants={cardVariants}
        >
          <div className="flex items-center mb-4">
            <img src={userPhoto3} alt="User" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">Mike Johnson</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 text-yellow-500 mr-1" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            "Great value for the price. The products are durable and exactly what I was looking for."
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Review;
