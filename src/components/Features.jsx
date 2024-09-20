import React from 'react';

const Features = () => {
  return (
    <div className="py-16 px-8 bg-gray-50 text-center">
     
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {[
          {
            img: 'https://printify.com/pfh/assets/legacy/higher-profits.svg',
            text: "Higher Profits",
            extra: "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
          },
          {
            img: 'https://printify.com/pfh/assets/legacy/robust-scaling.svg',
            text: "Robust Scaling",
            extra: "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
          },
          {
            img: 'https://printify.com/pfh/assets/legacy/best-selection.svg',
            text: "Best Selection",
            extra: "With 900+ products and top quality brands, you can choose the best products for your business.",
          },
        ].map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
            <div className="mb-4">
              <img src={service.img} alt={`Service ${index + 1}`} className="w-full rounded-md h-48 object-contain" />
            </div>
            <div className="text-gray-700">
              <p className="font-semibold mb-2">{service.text}</p>
              <p className="text-sm text-gray-500">{service.extra}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
