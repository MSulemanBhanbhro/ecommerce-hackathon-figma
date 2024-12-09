'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline, IoMenu, IoClose } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa'; // Import user icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false); // State for user dropdown
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setLanguageDropdownOpen(false);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black w-full text-white text-center py-4 px-4 md:px-12 h-auto md:h-[58px] flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center">
        <div className="hidden md:block"></div>
        <h1 className="text-sm md:text-base">
          Summer Sale For All Swim And Free Express Delivery - OFF 50%!{' '}
          <Link href="/" className="underline">
            Shop Now
          </Link>
        </h1>
        <div className="mt-2 md:mt-0 relative">
          <div
            className="flex items-center gap-2 text-sm md:text-base cursor-pointer"
            onClick={toggleLanguageDropdown}
          >
            {selectedLanguage} <IoIosArrowDown />
          </div>

          {/* Language Dropdown */}
          {languageDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md z-20">
              <ul className="text-black text-sm md:text-base">
                {['English', 'Urdu', 'French', 'Spanish'].map((language) => (
                  <li
                    key={language}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLanguageSelect(language)}
                  >
                    {language}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
              menuOpen ? 'block' : 'hidden'
            } absolute top-[80px] left-0 w-full bg-white md:static md:bg-transparent md:flex items-center z-10 md:z-auto md:w-auto text-center transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm md:text-xl p-4 md:p-0">
              {[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }, { name: 'About', path: '/about' }, { name: 'Signup', path: '/auth/signup' }].map(
                (link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`relative ${
                        pathname === link.path
                          ? 'text-black after:content-[""] after:block after:h-[2px] after:bg-black after:scale-x-100'
                          : 'text-gray-500 after:content-[""] after:block after:h-[2px] after:bg-black after:scale-x-0'
                      } hover:text-black transition-all duration-300 after:transition-transform after:duration-300`}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Search and Icons */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full md:w-auto border-2 border-gray-400 px-4 py-2 rounded-md bg-gray-200 outline-none text-sm"
            />
            <CiHeart size={24} className="cursor-pointer" />
            <IoCartOutline size={24} className="cursor-pointer" />
            {/* User Icon */}
            <div className="relative">
              <FaUserCircle
                size={24}
                className="cursor-pointer"
                onClick={toggleUserDropdown}
              />
              {/* User Dropdown */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md z-20">
                  <ul className="text-black text-sm md:text-base">
                    {[
                      { name: 'Manage My Account', path: '/account' },
                      { name: 'My Orders', path: '/orders' },
                      { name: 'My Cancellations', path: '/cancellations' },
                      { name: 'My Reviews', path: '/reviews' },
                      { name: 'Logout', path: '/logout' },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <Link href={item.path}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
