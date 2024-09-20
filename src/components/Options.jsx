import React from "react";
import { motion } from "framer-motion";

const Options = () => {
  // Animation variant for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initially hidden and below
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 }, // Stagger the animation
    }),
  };

  return (
    <div className="py-16 px-4 md:px-8 bg-gray-50 text-center">
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* First Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3"
          custom={0} // Animation delay for this card
          variants={cardVariants}
        >
          <div className="mb-4">
            <img
              src="https://printify.com/pfh/assets/legacy/custom-products.png"
              alt="Higher Profits"
              className="w-full rounded-md h-48 object-contain"
            />
          </div>
          <div>
            <h1
              className="font-bold text-lg md:text-xl mb-2 text-green-600"
              style={{ fontFamily: "CerebriSans, sans-serif" }}
            >
              CREATE <br />
              <span className="text-black">custom products</span>
            </h1>
            <p className="text-sm text-gray-500">
              We offer some of the lowest prices in the industry because print
              providers continuously compete to win your business.
            </p>
          </div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3"
          custom={1} // Animation delay for this card
          variants={cardVariants}
        >
          <div className="mb-4">
            <img
              src="https://printify.com/pfh/assets/legacy/your-products.png"
              alt="Robust Scaling"
              className="w-full rounded-md h-48 object-contain"
            />
          </div>
          <div>
            <h1
              className="font-bold text-lg md:text-xl mb-2 text-green-600"
              style={{ fontFamily: "CerebriSans, sans-serif" }}
            >
              SELL <br />
              <span className="text-black">on your terms</span>
            </h1>
            <p className="text-sm text-gray-500">
              You choose the products, sale price, and where to sell
            </p>
          </div>
        </motion.div>

        {/* Third Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3"
          custom={2} // Animation delay for this card
          variants={cardVariants}
        >
          <div className="mb-4">
            <img
              src="https://printify.com/pfh/assets/legacy/fullfillment.png"
              alt="Best Selection"
              className="w-full rounded-md h-48 object-contain"
            />
          </div>
          <div className="text-gray-700">
            <h1
              className="font-bold text-lg md:text-xl mb-2 text-green-600"
              style={{ fontFamily: "CerebriSans, sans-serif" }}
            >
              WE HANDLE <br />
              <span className="text-black">fulfillment</span>
            </h1>
            <p className="text-sm text-gray-500">
              Once an order is placed, we automatically handle all the printing
              and delivery logistics
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Options;
