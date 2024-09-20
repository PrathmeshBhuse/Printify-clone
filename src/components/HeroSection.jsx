import { Star } from "lucide-react";
import React from "react";
import modelImg from "../assets/model.jpg";

const HeroSection = () => {
  return (
    <div
      style={{ fontFamily: "CerebriSans, sans-serif" }}
      className="flex flex-col lg:flex-row items-center justify-between px-5 lg:px-20 py-10 gap-10"
    >
      {/* Text Section */}
      <div
        className="w-full lg:w-1/2 flex flex-col gap-5"
        style={{ fontFamily: "CerebriSans, sans-serif" }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Create and sell <br /> custom
          <span className="text-[#39b75d]"> Products</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          ipsa.
        </p>

        <div className="flex flex-col items-start gap-4 mt-5">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-[#E85C0D]" />
            <h4 className="text-sm sm:text-base lg:text-lg font-medium">
              100% Free to use
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-[#E85C0D]" />
            <h4 className="text-sm sm:text-base lg:text-lg font-medium">
              900+ High Quality Products
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-[#E85C0D]" />
            <h4 className="text-sm sm:text-base lg:text-lg font-medium">
              Largest global print network
            </h4>
          </div>
        </div>

        <div className="flex justify-start gap-4 mt-8 flex-wrap">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xs sm:text-sm lg:text-base px-4 sm:px-5 py-2 sm:py-2.5"
          >
            Start For Free
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xs sm:text-sm lg:text-base px-4 sm:px-5 py-2 sm:py-2.5"
          >
            How it Works?
          </button>
        </div>

        <h5 className="text-[#39b75d] mt-2 text-xs sm:text-sm lg:text-base">
          Trusted by over 8M sellers around the world
        </h5>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://img.freepik.com/premium-vector/woman-pointing-something-gesture_22669-94.jpg?w=740"
          className="w-full h-auto object-cover"
          alt="Model pointing"
        />
      </div>
    </div>
  );
};

export default HeroSection;
