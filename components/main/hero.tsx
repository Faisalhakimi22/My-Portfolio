import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <img
        src="videos/p.jpg"  // Use forward slashes for paths
        alt="Hero Background"
        className="absolute inset-0 object-contain w-full h-full -z-20 mt-[-10%]" // Adjust margin to move image up
      />
      
      <HeroContent />
    </div>
  );
};
