import React, { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleMobileMenuToggle = () => {
    setShow(!show);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center pt-5">
        <Link href={'/'}>
          <img
            src="assets/Logo.png"
            alt="Logo Wisata Nusantara"
            width="95"
            height="95"
            className="mr-4 lg:mr-14"
          />
        </Link>
        <div className="block lg:hidden ml-auto relative">
          <button
            id="burgerMenu"
            className="text-lg font-semibold"
            onClick={handleMobileMenuToggle}
          >
            <img src="assets/menu-icon.png" alt="Menu" width="30" height="30" />
          </button>
          {show && (
            <div className="absolute right-[8%] lg:hidden bg-white w-60 px-6 py-4 rounded-2xl">
              <ul className="flex flex-col mb-2 gap-y-2">
                <li className="text-lg cursor-pointer">Home</li>
                <li className="text-lg cursor-pointer">About Us</li>
                <li className="text-lg cursor-pointer">Packages</li>
                <li className="text-lg cursor-pointer">Contact Us</li>
              </ul>
              <button className="text-lg font-semibold mr-2 ">Sign Up</button>
              <button className="border border-[#DC602A] rounded-[31.5px] py-2 px-6 text-lg font-semibold">
                Log In
              </button>
            </div>
          )}
        </div>

        <ul className="hidden lg:flex gap-x-4">
          <li className="text-lg cursor-pointer">Home</li>
          <li className="text-lg cursor-pointer">About Us</li>
          <li className="text-lg cursor-pointer">Packages</li>
          <li className="text-lg cursor-pointer">Contact Us</li>
        </ul>

        <div className="hidden lg:flex ml-auto gap-x-4 items-center">
          <button className="text-lg font-semibold">Sign Up</button>
          <button className="border border-[#DC602A] rounded-[31.5px] py-2 px-6 text-lg font-semibold">
            Log In
          </button>
          <div>
            <img
              src="assets/icon-search.svg"
              alt="Search"
              width="29"
              height="23"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
