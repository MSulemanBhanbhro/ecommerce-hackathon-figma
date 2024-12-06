'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black w-full text-white text-center py-4 px-4 md:px-12 h-auto md:h-[48px] flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center">
        <div className="hidden md:block"></div>
        <h1 className="text-sm md:text-base">
          Summer Sale For All Swim And Free Express Delivery - OFF 50%!{" "}
          <Link href={'/'} className="underline">Shop Now</Link>
        </h1>
        <div className="mt-2 md:mt-0">
          <h1 className="flex items-center gap-2 text-sm md:text-base">
            English <IoIosArrowDown />
          </h1>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="relative">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center py-6 px-4 md:px-12">
          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold">Exclusive</h1>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-2xl focus:outline-none"
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-[80px] left-0 w-full bg-white md:static md:bg-transparent md:flex items-center z-10 md:z-auto md:w-auto text-center transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm md:text-xl p-4 md:p-0">
              <li><Link href={'/'} className='underline underline-offset-8'>Home</Link></li>
              <li><Link href={'/'}>Contact</Link></li>
              <li><Link href={'/about'}>About</Link></li>
              <li><Link href={'/auth/signup'}>Signup</Link></li>
            </ul>

            {/* Search Input (Visible in Mobile Menu) */}
            <div className="flex items-center gap-4 mt-4 md:hidden px-4">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full border-2 border-gray-400 px-4 py-2 rounded-md bg-gray-200 outline-none text-sm"
              />
              <CiHeart size={24} className="cursor-pointer" />
              <IoCartOutline size={24} className="cursor-pointer" />
            </div>
          </div>

          {/* Search and Icons (Visible for Larger Screens) */}
          <div className="hidden md:flex items-center gap-4 mt-4 md:mt-0">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full md:w-auto border-2 border-gray-400 px-4 py-2 rounded-md bg-gray-200 outline-none text-sm"
            />
            <CiHeart size={24} className="cursor-pointer" />
            <IoCartOutline size={24} className="cursor-pointer" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
