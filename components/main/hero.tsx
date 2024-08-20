"use client";

import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/p.mp4" type="video/mp4" />
      </video>

      <HeroContent />
    </div>
  );
};
