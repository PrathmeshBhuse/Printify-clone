import React from 'react';
import img from '../assets/topimg.jpg';
import { ChevronsRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Info = () => {
  return (
    <div
      className='flex flex-col md:flex-row items-center justify-center mx-auto px-5 md:px-12 py-10'
      style={{ fontFamily: "CerebriSans, sans-serif" }}
    >
      {/* Image Section */}
      <div className='w-full md:w-1/2 flex justify-center'>
        <motion.img
          src={img}
          alt="Product Image"
          className='h-[300px] md:h-[400px] lg:h-[500px] w-full md:w-[95%] mt-5 mx-auto md:mx-0 object-cover'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>

      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h1 className='text-[30px] md:text-[35px] lg:text-[40px] font-bold text-black'>
          Easily add your design to a wide range of products
        </h1>

        <p className='text-gray-500 text-sm md:text-md lg:text-lg mt-3 font-medium leading-relaxed'>
          With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases,
          and hundreds of other products.
        </p>

        <div className='flex justify-center md:justify-start'>
          <button
            type="button"
            className="flex justify-between items-center gap-2 mt-3 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-green-500 dark:text-green-400 dark:hover:text-white dark:hover:bg-green-700 dark:focus:ring-green-800 transition duration-300"
          >
            All Products
            <ChevronsRight />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
