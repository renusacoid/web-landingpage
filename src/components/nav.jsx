import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex items-center px-4 md:px-32 xl:px-40 pt-5">
      <Link href={"/"}>
        <img
          src="assets/Logo.png"
          alt="Logo Wisata Nusantara"
          width="95"
          height="95"
          className="mr-4 lg:mr-14"
        />
      </Link>
      <div className="block lg:hidden ml-auto">
        <button id="burgerMenu" className="text-lg font-semibold">
          <img src="assets/menu-icon.png" alt="Menu" width="30" height="30" />
        </button>
      </div>

      <ul className="hidden lg:flex gap-x-4">
        <li className="text-lg">Home</li>
        <li className="text-lg">About Us</li>
        <li className="text-lg">Packages</li>
        <li className="text-lg">Contact Us</li>
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
  );
};

export default Nav;
