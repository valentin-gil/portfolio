"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();
  
  // Détecter si on est sur une page légale
  const isLegalPage = pathname === "/mentions-legales" || pathname === "/politique-confidentialite";

  // Gérer le scroll du body
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300); // Durée de l'animation de fermeture
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleLinkClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-3rem)] lg:w-auto" aria-label="Navigation principale">
        <div className="backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-gray-800/30 dark:border-white/30 rounded-full px-8 sm:px-12 shadow-lg">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            {isLegalPage ? (
            <Link href="/" className="flex items-center" aria-label="Retour à l'accueil">
              <Logo className="h-8 w-auto" />
            </Link>
            ) : (
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center" aria-label="Retour à l'accueil">
                <Logo className="h-8 w-auto" />
              </a>
            )}
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex lg:items-center ml-8">
            <ul className="flex items-baseline space-x-2">
              {isLegalPage ? (
                <>
                  <Link href="/" className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group">
                    <li className="group overflow-hidden relative whitespace-nowrap">
                      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">Accueil</div>
                      <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">Accueil</div>
                    </li>
                  </Link>
                  <Link href="/#about" className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group">
                    <li className="group overflow-hidden relative whitespace-nowrap">
                      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">À propos</div>
                      <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">À propos</div>
                    </li>
                  </Link>
                  <Link href="/#projets" className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group">
                    <li className="group overflow-hidden relative whitespace-nowrap">
                      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">Projets</div>
                      <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">Projets</div>
                    </li>
                  </Link>
                  <Link href="/#contact" className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group">
                    <li className="group overflow-hidden relative whitespace-nowrap">
                      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">Contact</div>
                      <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">Contact</div>
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group">
                    <li className="group overflow-hidden relative whitespace-nowrap">
                      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">Accueil</div>
                      <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">Accueil</div>
                    </li>
                  </a>
                  <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }} className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group">
                    <li className="group overflow-hidden relative whitespace-nowrap">
                      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">À propos</div>
                      <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">À propos</div>
                    </li>
                  </a>
                  <a href="#projets" onClick={(e) => { e.preventDefault(); document.querySelector('#projets')?.scrollIntoView({ behavior: 'smooth' }); }} className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group">
                    <li className="group overflow-hidden relative whitespace-nowrap">
                      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">Projets</div>
                      <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">Projets</div>
                    </li>
                  </a>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group">
                    <li className="group overflow-hidden relative whitespace-nowrap">
                      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">Contact</div>
                      <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">Contact</div>
                    </li>
                  </a>
                </>
              )}
            </ul>
            <div className="ml-8">
              <ModeToggle />
            </div>
          </div>

          {/* Bouton menu mobile */}
          <div className="lg:hidden ml-4 flex items-center gap-2">
            <ModeToggle />
            <button
              onClick={handleMenuToggle}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white focus:outline-none transition-all relative w-9 h-9 flex items-center justify-center"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? "Fermer" : "Ouvrir"} le menu</span>
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-[2px] w-full bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-[9px]' : 'rotate-0 translate-y-0'
                }`} />
                <span className={`block h-[2px] w-full bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`block h-[2px] w-full bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-[9px]' : 'rotate-0 translate-y-0'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Menu Mobile Plein Écran */}
    {isMenuOpen && (
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-white dark:bg-black ${
          isClosing ? 'animate-fade-out' : 'animate-fade-in'
        }`}
        role="menu" 
        aria-label="Menu mobile"
      >
        <div className={`flex flex-col items-center justify-center h-screen ${
          isClosing ? 'animate-slide-down' : 'animate-slide-up'
        }`}>
          <ul className="space-y-8 text-center">
            {isLegalPage ? (
              <li role="none" className="animate-fade-in-delay-1">
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className="text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 inline-block" 
                >
                  Retour à l&apos;accueil
                </Link>
              </li>
            ) : (
              <>
                <li role="none" className="animate-fade-in-delay-1">
                  <a 
                    href="#" 
                    onClick={handleLinkClick}
                    className="text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 inline-block" 
                    role="menuitem"
                  >
                    Accueil
                  </a>
                </li>
                <li role="none" className="animate-fade-in-delay-2">
                  <a 
                    href="#about" 
                    onClick={handleLinkClick}
                    className="text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 inline-block" 
                    role="menuitem"
                  >
                    À propos
                  </a>
                </li>
                <li role="none" className="animate-fade-in-delay-3">
                  <a 
                    href="#projets" 
                    onClick={handleLinkClick}
                    className="text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 inline-block" 
                    role="menuitem"
                  >
                    Projets
                  </a>
                </li>
                <li role="none" className="animate-fade-in-delay-4">
                  <a 
                    href="#contact" 
                    onClick={handleLinkClick}
                    className="text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 inline-block" 
                    role="menuitem"
                  >
                    Contact
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    )}
  </>
  );
}