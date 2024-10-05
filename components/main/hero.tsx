import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <img
        src="videos/p.jpg"  // Use forward slashes for paths
        alt="Hero Background"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-full max-h-[80vh] -z-20" // Maintain aspect ratio while limiting height
      />
      
      <HeroContent />
    </div>
  );
};
