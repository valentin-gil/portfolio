"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50" aria-label="Navigation principale">
      <div className="backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-gray-800/30 dark:border-white/30 rounded-full px-8 sm:px-12 shadow-lg">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center" aria-label="Retour à l'accueil">
              <Logo className="h-7 w-auto" />
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block ml-8">
            <ul className="flex items-baseline space-x-2">
              <a href="#accueil" className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group">
                <li className="group overflow-hidden relative">
                  <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">Accueil</div>
                  <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">Accueil</div>
                </li>
              </a>
              <a href="#about" className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group">
                <li className="group overflow-hidden relative">
                  <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">À propos</div>
                  <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">À propos</div>
                </li>
              </a>
              <a href="#projets" className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group">
                <li className="group overflow-hidden relative">
                  <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">Projets</div>
                  <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">Projets</div>
                </li>
              </a>
              <a href="#contact" className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group">
                <li className="group overflow-hidden relative">
                  <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">Contact</div>
                  <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">Contact</div>
                </li>
              </a>
            </ul>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden ml-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white focus:outline-none transition-all"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2" role="menu" aria-label="Menu mobile">
            <div className="backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-gray-800/30 dark:border-white/30 rounded-2xl px-4 py-3 shadow-lg">
              <ul className="space-y-1">
                <li role="none">
                  <a href="#accueil" className="relative overflow-hidden block px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group" role="menuitem">
                    <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-200%]">Accueil</span>
                    <span className="absolute left-4 top-full inline-block transition-transform duration-300 group-hover:translate-y-[-200%]">Accueil</span>
                  </a>
                </li>
                <li role="none">
                  <a href="#about" className="relative overflow-hidden block px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group" role="menuitem">
                    <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-200%]">À propos</span>
                    <span className="absolute left-4 top-full inline-block transition-transform duration-300 group-hover:translate-y-[-200%]">À propos</span>
                  </a>
                </li>
                <li role="none">
                  <a href="#projets" className="relative overflow-hidden block px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group" role="menuitem">
                    <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-200%]">Projets</span>
                    <span className="absolute left-4 top-full inline-block transition-transform duration-300 group-hover:translate-y-[-200%]">Projets</span>
                  </a>
                </li>
                <li role="none">
                  <a href="#contact" className="relative overflow-hidden block px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group" role="menuitem">
                    <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-200%]">Contact</span>
                    <span className="absolute left-4 top-full inline-block transition-transform duration-300 group-hover:translate-y-[-200%]">Contact</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}