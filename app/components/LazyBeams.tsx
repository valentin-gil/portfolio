"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Lazy load Beams uniquement quand visible
const Beams = dynamic(() => import("./Beams"), {
  ssr: false,
  loading: () => null,
});

interface LazyBeamsProps {
  beamWidth?: number;
  beamHeight?: number;
  beamNumber?: number;
  speed?: number;
  noiseIntensity?: number;
  scale?: number;
  rotation?: number;
}

export default function LazyBeams(props: LazyBeamsProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Charge immédiatement si l'utilisateur a une bonne connexion et un device puissant
    const shouldLoadImmediately = () => {
      // @ts-expect-error navigator.deviceMemory n'est pas standard
      const hasGoodDevice = navigator.deviceMemory ? navigator.deviceMemory >= 4 : true;
      // @ts-expect-error navigator.connection n'est pas standard
      const hasGoodConnection = navigator.connection ? navigator.connection.effectiveType === '4g' : true;
      return hasGoodDevice && hasGoodConnection;
    };

    if (shouldLoadImmediately()) {
      // Charge après 500ms pour laisser le main thread se libérer pendant Lighthouse
      const timer = setTimeout(() => setShouldLoad(true), 500);
      return () => clearTimeout(timer);
    }

    // Sinon, utilise Intersection Observer
    const currentContainer = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
        }
      },
      {
        rootMargin: "200px", // Charge 200px avant d'être visible
      }
    );

    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      {shouldLoad ? (
        <Beams {...props} />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-[#dddddd] dark:bg-[#070707]" />
      )}
    </div>
  );
}
