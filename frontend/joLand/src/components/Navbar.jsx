import React, {useEffect, useState} from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  },[showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-[999] backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center py-4 pl-2 pr-10 md:pl-4 md:pr-20 lg:pl-8 lg:pr-32">
       <img src={assets.logo} className="w-16 sm:w-20 md:w-24 lg:w-30 -ml-4 md:-ml-8" />

        
        <ul className="hidden md:flex gap-7 text-white font-medium">
          <li><a href="#Header" className="hover:text-gray-300 transition">Home</a></li>
          <li><a href="#About" className="hover:text-gray-300 transition">About</a></li>
          <li><a href="#Projects" className="hover:text-gray-300 transition">Projects</a></li>
          <li><a href="#Testimonials" className="hover:text-gray-300 transition">Testimonials</a></li>
        </ul>

        <button className="hidden md:block bg-white text-[#3b6d72] px-8 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          Jo Land
        </button>

        <img onClick={() => setShowMobileMenu(true)} src ={assets.MenuIcon} alt="Menu Icon" className="md:hidden w-8 h-8 cursor-pointer" />


      </div>
      {/*----------- mobile menu -----------*/}
      
      <div
  className={`md:hidden ${
    showMobileMenu
      ? 'fixed inset-0 w-screen h-screen'     // full-screen overlay
      : 'w-0 h-0 overflow-hidden'             // collapsed
  } bg-white transition-all `}
>

        <div className='flex justify-end p-6 cursor-pointer  ' >
        <img onClick={() => setShowMobileMenu(false)} src={assets.CrossIcon} className='w-10'/>
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 
        text-lg font-medium '>
          <a  onClick={() => setShowMobileMenu(false)} href ="#Header" 
          className='px-4 py2 rounded-full inline-block'>Home</a>
        <a onClick={() => setShowMobileMenu(false)} href ="#About" 
          className='px-4 py2 rounded-full inline-block'>About</a>
          <a onClick={() => setShowMobileMenu(false)} href ="#Projects" 
          className='px-4 py2 rounded-full inline-block'>Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href ="#Testimonials" 
          className='px-4 py2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
