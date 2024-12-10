'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">LearningMS</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Courses</a>
          <a href="#" className="hover:text-gray-300">Pages</a>
          <a href="#" className="hover:text-gray-300">Blog</a>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="md:flex items-center space-x-4">
          <Link href="/auth/signin">
            <button className="bg-white text-black px-3 py-1 rounded hover:bg-gray-500">
              Register
            </button>
          </Link>
          <Link href="/auth/login">
            <button className="bg-white text-black px-3 py-1 rounded hover:bg-gray-500">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-black">
          <div className="flex flex-col items-center space-y-4 p-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Courses</a>
            <a href="#" className="hover:text-gray-300">Pages</a>
            <a href="#" className="hover:text-gray-300">Blog</a>
            
            <div className="flex space-x-4">
              <Link href="/auth/signin">
                <button className="bg-white text-black px-3 py-1 rounded hover:bg-gray-500">
                  Register
                </button>
              </Link>
              <Link href="/auth/login">
                <button className="bg-white text-black px-3 py-1 rounded hover:bg-gray-500">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}