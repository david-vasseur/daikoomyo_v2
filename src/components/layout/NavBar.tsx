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
            <img src={"/new_logo.png"} className="h-8 w-8 rounded-full" />
            <span className="cursor-default ml-2 text-xl font-semibold text-gray-800">Daikoomyo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">Accueil</Link>
            <Link href="/#about" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">A propos</Link>
            <li className="list-none text-gray-700 font-semibold hover:text-purple-600 transition-colors group cursor-pointer relative">
                <Link href="/#services" className="inline-block  text-gray-700 font-semibold hover:text-purple-600 transition-colors">Accompagnement & Soins</Link>
                <ul className={`absolute w-[calc(100%)] block pt-[20px] pb-4 text-left h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:h-[400%] group-hover:opacity-100 z-10 rounded-b-lg ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent' }`}>
                    <li>
                        <Link
                        href="/soin-energetique"
                        className="whitespace-nowrap p-1 -mx-[1px]  text-gray-700 font-semibold hover:text-purple-600 transition-colors"
                        >
                        Soin Énergétique
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/eft"
                        className="whitespace-nowrap p-1  text-gray-700 font-semibold hover:text-purple-600 transition-colors"
                        >
                        EFT
                        </Link>
                    </li>                    
                    <li>
                        <Link
                        href="/fleurs-de-bach"
                        className="whitespace-nowrap p-1  text-gray-700 font-semibold hover:text-purple-600 transition-colors"
                        >
                        Fleurs de Bach
                        </Link>
                    </li>
                </ul>
            </li>
            <Link href="/#contact" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">Contact</Link>            
            <Link href="/blog" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">Blog</Link>
            <Link href="/#avis" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">Avis</Link>
            
          </div>

          <div className="hidden md:block">
            <Link 
              href="/#contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md border-2 border-purple-800"
            >
              Prendre RDV
            </Link>
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
            Accueil
          </Link>
          <Link 
            href="/#about" 
            className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            A propos
          </Link>
          <Link 
            href="/eft" 
            className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            EFT
          </Link>
          <Link 
            href="/soin-energetique" 
            className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Soin énergetique
          </Link>
          <Link 
            href="/fleurs-de-bach" 
            className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Fleurs de Bach
          </Link>
          <Link 
            href="/#avis" 
            className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Avis
          </Link>
          <Link 
            href="/blog" 
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