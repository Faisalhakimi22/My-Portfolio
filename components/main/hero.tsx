import Image from 'next/image';
import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <div className="relative w-full h-full">
        <Image
          src="/videos/p.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center" // Ensures the image is centered within the container
          priority
          className="-z-20"
        />
      </div>
      <HeroContent />
    </div>
  );
};
