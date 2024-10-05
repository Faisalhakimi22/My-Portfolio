import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <img
        src="videos/p.jpg" // Use forward slashes for paths
        alt="Hero Background"
        className="absolute inset-0 w-full h-full -z-20 object-cover md:object-contain md:mt-[-10%] md:h-auto" // Adjust for mobile and desktop
      />
      
      <HeroContent />
    </div>
  );
};
