import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-white mt-20  p-5
     shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
      
        <div className="flex-none">
          <h1 className="text-3xl font-bold">
            <span className="text-[#39b75d] ">PrintiFy</span>
          </h1>
        </div>

        <div className='flex gap-6'>
          <Facebook/>
          <Linkedin/>
          <Twitter/>
          <Github/>
          <Instagram/>
        </div>

       
       
      </div>
    </div>
  )
}

export default Footer
