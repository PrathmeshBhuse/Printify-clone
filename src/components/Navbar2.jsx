import React from 'react';

const Navbar2 = () => {
  return (
    <div className="flex flex-col items-center py-4 text-sm mt-10">
      <ul className="flex space-x-8">
        <li className="text-gray-500 hover:text-[#39b75d] cursor-pointer">Intellectual Property Policy</li>
        <li className="text-gray-500 hover:text-[#39b75d] cursor-pointer">Terms of Service</li>
        <li className="text-gray-500 hover:text-[#39b75d] cursor-pointer">Privacy Policy</li>
        <li className="text-gray-500 hover:text-[#39b75d] cursor-pointer">Security</li>
      </ul>
      <div className="mt-2 text-black">
        © 2024 Printify,Inc.All rights reserved.
      </div>
    </div>
  );
};

export default Navbar2;
