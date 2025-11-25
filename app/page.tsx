"use client";

import { Suspense } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import LazyBeams from "./components/LazyBeams";

export default function Home() {
  return (
    <main>
      <ThemeProvider>
        {/* Section avec Beams en fond - 100vh */}
        <div className="relative h-screen">
          {/* Beams en arrière-plan - chargé intelligemment */}
          <div className="absolute inset-0 w-full h-full -z-10">
            <Suspense fallback={<div className="absolute inset-0 w-full h-full bg-[#dddddd] dark:bg-[#070707]" />}>
              <LazyBeams
                beamWidth={3}
                beamHeight={25}
                beamNumber={10}
                speed={2}
                noiseIntensity={2}
                scale={0.2}
                rotation={30}
              />
            </Suspense>
          </div>
          
          <Navbar />
          
          {/* Icônes sociales en bas à gauche - uniquement sur landing page */}
          <div className="absolute bottom-8 left-8 flex flex-col gap-3">
            <a 
              href="https://linkedin.com/in/valentin-gil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center text-gray-900 dark:text-white hover:opacity-60 transition-opacity duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/valentin-gil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center text-gray-900 dark:text-white hover:opacity-60 transition-opacity duration-300"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </a>
            <a 
              href="mailto:contact@vgil.fr"
              className="w-6 h-6 flex items-center justify-center text-gray-900 dark:text-white hover:opacity-60 transition-opacity duration-300"
              aria-label="Email"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" aria-hidden="true">
                <path fill="currentColor" d="M860.13,1045.46c35.96,38.85,86.94,61.13,139.87,61.13s103.91-22.27,139.87-61.13l532.17-575.04c-10.51-2.18-21.37-3.36-32.51-3.36H360.48c-11.14,0-22.01,1.18-32.51,3.36l532.16,575.04Z"/>
                <path fill="currentColor" d="M1799.4,626.95c0-37.58-13.57-71.71-35.35-99.03l-436.81,472,436.81,472.18c21.78-27.32,35.35-61.45,35.35-99.03v-746.11Z"/>
                <path fill="currentColor" d="M1254.63,1078.37l-36.54,39.49c-56.08,60.58-135.58,95.32-218.09,95.32s-162.01-34.74-218.09-95.32l-36.54-39.49-417.41,451.21c10.51,2.18,21.38,3.36,32.52,3.36h1279.04c11.14,0,22.01-1.18,32.52-3.36l-417.41-451.21Z"/>
                <path fill="currentColor" d="M235.95,527.91c-21.78,27.32-35.35,61.45-35.35,99.03v746.11c0,37.58,13.57,71.71,35.35,99.03l436.81-472.18-436.81-472Z"/>
              </svg>
            </a>
          </div>
          
          {/* Contenu de la première section */}
          <div className="flex h-full flex-col items-center justify-center p-24" role="main" aria-label="Contenu principal">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center text-gray-900 dark:text-white mb-8 flex flex-col items-center">Valentin Gil
            </h1>
            <p className="text-xl md:text-2xl text-center text-gray-700 dark:text-gray-300">
              Développeur Web & Étudiant MMI
            </p>
          </div>
        </div>

        {/* Section À propos */}
        <section id="about" className="py-32 bg-gray-50 dark:bg-[#18181b]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">À propos</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">Je m&apos;appelle Valentin Gil, étudiant en BUT Métiers du Multimédia et de l&apos;Internet à l&apos;IUT d&apos;Angoulême. Passionné par le web, j&apos;aime concevoir des interfaces modernes, accessibles et performantes.</p>
            <p className="text-lg text-gray-700 dark:text-gray-300">J&apos;utilise principalement Next.js, React, Tailwind CSS et je m&apos;intéresse à l&apos;UX/UI, l&apos;accessibilité et l&apos;optimisation des performances.</p>
          </div>
        </section>

        {/* Section Projets */}
        <section id="projets" className="py-32">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-[#23272f] rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold mb-2">Portfolio</h3>
                <p className="text-gray-700 dark:text-gray-300">Ce site, développé avec Next.js 15, Tailwind CSS 4 et animations Three.js. Optimisé pour la performance, l&apos;accessibilité et le SEO.</p>
              </div>
              <div className="bg-white dark:bg-[#23272f] rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold mb-2">Projet fictif</h3>
                <p className="text-gray-700 dark:text-gray-300">Un projet de site vitrine pour une startup, avec design sur-mesure, dark mode, et animations interactives.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section id="contact" className="py-32 bg-gray-50 dark:bg-[#18181b]">
          <div className="max-w-xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Contact</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Envie de collaborer, de me proposer un stage ou simplement d&apos;échanger ?</p>
            <a href="mailto:contact@vgil.fr" className="inline-block px-8 py-4 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">Me contacter</a>
          </div>
        </section>

      </ThemeProvider>
    </main>
  );
}