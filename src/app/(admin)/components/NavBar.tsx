"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useClerk } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { BackButton } from './BackButton';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const pathName = usePathname();
    const { signOut } = useClerk()

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isBackButton = () => {
            if (pathName === "/back-office") {
                return (
                    <>
                        <img src={"/new_logo.png"} className="h-8 w-8 rounded-full" />
                        <span className="cursor-default ml-2 text-xl font-semibold text-purple-600">Daikoomyo - BackOffice</span>
                    </>
                )
            } else {
                return (
                    <BackButton />
                )
            }
        }

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
                    {isBackButton()}  
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/back-office" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">Accueil</Link>
                    <Link href="/back-office/planning" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">Planing</Link>
                    <Link href="/back-office/post" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">Blog</Link>            
                    <Link href="/back-office/newsletter" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">Newsletter</Link>
                    <Link href="/back-office/client" className="text-gray-700 font-semibold hover:text-purple-600 transition-colors">Dossier client</Link>
                    
                </div>

                <div className="hidden md:block">
                    <button
                    className="bg-red-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md border-2 border-purple-800"
                    onClick={() => signOut({ redirectUrl: '/' })}
                    >
                    Se deconnecter
                    </button>
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
                isOpen ? 'max-h-screen bg-pink-50 shadow-md' : 'max-h-0'
                }`}
            >
                <div className="px-4 py-2 space-y-3">
                    <Link 
                        href="/back-office" 
                        className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Accueil
                    </Link>
                    <Link 
                        href="/back-office/planning" 
                        className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Planning
                    </Link>
                    <Link 
                        href="/back-office/post" 
                        className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Blog
                    </Link>
                    <Link 
                        href="/back-office/newsletter" 
                        className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Newsletter
                    </Link>
                    <Link 
                        href="/back-office/client" 
                        className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Dossier client
                    </Link>
                    <button 
                        className="block py-2 bg-red-600 hover:bg-purple-700 text-white px-4 rounded-full transition-colors text-center shadow-md"
                        onClick={() => signOut({ redirectUrl: '/' })}
                    >
                        Se deconnecter
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;