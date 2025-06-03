import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img src={"/new_logo.png"} className="h-8 w-8 text-purple-600 rounded-full" />
              <span className="ml-2 text-xl font-semibold">Daikoomyo</span>
            </div>
            <p className="text-gray-400 mb-6">
                Chaque Journée est une nouvelle chance de <span className="text-purple-300">changer</span> votre vie...
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/camille_energeticienne?igsh=em0yeWlvbmwyeGh4&utm_-soucre=qr" target="_blank" className="text-gray-400 hover:text-purple-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/share/18wR7MdAoX/?mibextid=wwwXlfr" target="_blank" className="text-gray-400 hover:text-purple-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu rapide</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="text-gray-400 hover:text-purple-400 transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-purple-400 transition-colors">A propos</Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-purple-400 transition-colors">Accompagnements & Soins</Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-400 hover:text-purple-400 transition-colors">Avis</Link>
              </li>
              <li>
                <Link href="/#blog" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Accompagnements & Soins</h3>
                <ul className="space-y-2">
                    <li>
                        <Link href="/eft" className="text-gray-400 hover:text-purple-400 transition-colors">
                        Emotional Freedom Technique
                        </Link>
                    </li>
                    <li>
                        <Link href="/soin-energetique" className="text-gray-400 hover:text-purple-400 transition-colors">
                        Soin energetique
                        </Link>
                    </li>
                    <li>
                        <Link href="/fleurs-de-bach" className="text-gray-400 hover:text-purple-400 transition-colors">
                        Fleurs de Bach
                        </Link>
                    </li>
                </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
                Abonnez-vous pour recevoir des inspirations spirituelles, des notifications d&apos;événements et des offres exclusives
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="w-full px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button 
                  type="submit" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-r-lg transition-colors"
                >
                  S&apos;abonner
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
                En vous abonnant, vous acceptez notre politique de confidentialité et consentez à recevoir des informations de notre part
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              <Link href="/auth">&copy; {new Date().getFullYear()}</Link> David Vasseur. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">Politique de confidentialité</a>
                <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">Conditions d&apos;utilisation</a>
                <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">Politique relative aux cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;