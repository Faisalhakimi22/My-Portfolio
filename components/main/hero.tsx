import Image from 'next/image';
import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <Image
        src="/videos/p.jpg" // You need to provide an absolute path for the image
        alt="Hero Background"
        layout="fill" // This makes the image take up the entire space of its container
        objectFit="cover" // Ensures the image covers the container without distortion
        priority // Loads the image with high priority, good for above-the-fold images
        className="-z-20"
      />
      
      <HeroContent />
    </div>
  );
};
