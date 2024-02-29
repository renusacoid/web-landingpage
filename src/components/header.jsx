import React from 'react';
import Nav from './nav';

const Header = () => {
  return (
    <header
      className="bg-[url('/assets/bg-hero.png')] h-full md:h-screen bg-cover bg-fixed bg-no-repeat"
      id="header"
    >
      <Nav />
      <div id="responsiveMenu" className="hidden md:hidden">
        <ul className="flex flex-col items-start">
          <li className="text-lg py-2 px-4">Home</li>
          <li className="text-lg py-2 px-4">About Us</li>
          <li className="text-lg py-2 px-4">Packages</li>
          <li className="text-lg py-2 px-4">Contact Us</li>
        </ul>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center content-center md:h-[80vh] pb-12 p-4 md:pb-0">
        <div className="md:justify-self-end">
          <h1 className="montserrat text-white text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem] lg:mr-[-5rem] font-extrabold">
            Introduce <br />
            Wisnu.
          </h1>
          <p className="text-white font-medium sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Teman Perjalanan kamu
          </p>
        </div>
        <div className="mt-5 md:mt-0 md:ml-20 lg:ml-40">
          <button className="bg-[#DC602A] flex items-center py-2 px-3 md:py-3 md:px-5 rounded-[20px] border-2 border-white text-white text-sm md:text-base xl:text-lg font-medium">
            <a href="#tentangwisnu">Explore More</a>
            <div className="">
              <img
                src="assets/icon-arrow-right.svg"
                className="ml-1 w-4 md:ml-3 md:w-5"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
