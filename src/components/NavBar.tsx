"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={"/daikoomyo.png"} className="h-8 w-8 text-purple-600 rounded-full" />
            <span className="ml-2 text-xl font-semibold text-gray-800">Daikoomyo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">Acceuil</Link>
            <Link href="/#about" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">A propos</Link>
            <Link href="/#services" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">Soins</Link>
            <Link href="/#testimonials" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">Avis</Link>
            <Link href="/#blog" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">Blog</Link>
            <Link href="/#contact" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">Contact</Link>
          </div>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full transition-colors shadow-md border-2 border-purple-800"
            >
              Prendre RDV
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen bg-white shadow-md' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-2 space-y-3">
          <Link 
            href="/" 
            className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Acceuil
          </Link>
          <Link 
            href="/#about" 
            className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            A propos
          </Link>
          <Link 
            href="/#services" 
            className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Soins
          </Link>
          <Link 
            href="/#testimonials" 
            className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Avis
          </Link>
          <Link 
            href="/#blog" 
            className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="#contact" 
            className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/#contact" 
            className="block py-2 bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-full transition-colors text-center shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Prendre RDV
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;