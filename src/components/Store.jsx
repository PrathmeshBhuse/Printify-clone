import React from 'react';

// Import images from the assets folder
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';
import image4 from '../assets/img4.jpg';
import image5 from '../assets/img5.jpg';
import image6 from '../assets/img6.jpg';

const Store = () => {
  return (
    <div className="text-center py-8">
      <h1 className="text-2xl font-bold mb-2">Connect to Your Store</h1>
      <p className="text-gray-600 mb-8">Easily showcase your products and services</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img className="h-32 w-auto max-w-full rounded-lg" src={image1} alt="Gallery Image 1" />
          </div>
          <div>
            <img className="h-32 w-auto max-w-full rounded-lg" src={image2} alt="Gallery Image 2" />
          </div>
          <div>
            <img className="h-32 w-auto max-w-full rounded-lg" src={image3} alt="Gallery Image 3" />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img className="h-32 w-auto max-w-full rounded-lg" src={image4} alt="Gallery Image 4" />
          </div>
          <div>
            <img className="h-32 w-auto max-w-full rounded-lg" src={image5} alt="Gallery Image 5" />
          </div>
          <div>
            <img className="h-32 w-auto max-w-full rounded-lg" src={image6} alt="Gallery Image 6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
