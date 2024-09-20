import React from 'react';
import backgroundImage from '../assets/backimg.svg'; 

const Letter = () => {
  return (
    <div className="flex items-center justify-center mt-10 p-4 md:p-8">
      <div
        className="relative flex items-center justify-between px-8 py-6 bg-cover bg-center rounded-lg shadow-lg max-w-8xl border border-gray-300"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'right' }}
      >
        <div className="text-white max-w-xl pr-12">
          <h1 className="text-3xl font-bold mb-4 text-green-800" style={{ fontFamily: "CerebriSans, sans-serif" }}>
            Are you a large business looking for custom solutions?
          </h1>
        </div>
        <div className="flex-shrink-0 flex items-center">
          <button className="bg-white text-black px-6 py-3 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-gray-100 hover:text-green-600">
            Talk To Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Letter;
