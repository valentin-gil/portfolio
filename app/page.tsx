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
          
          {/* Contenu de la première section */}
          <div className="flex h-full flex-col items-center justify-center p-24" role="main" aria-label="Contenu principal">
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
              Work In Progress
            </h1>
          </div>
        </div>
      </ThemeProvider>
    </main>
  );
}