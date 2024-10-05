import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      <img
        src="videos/p.jpg" // Use forward slashes for paths
        alt="Hero Background"
        className="absolute inset-0 w-full h-full -z-20 mt-[-10%] object-contain md:mt-0 md:object-cover md:h-[60vh]" // Responsive styles applied
      />
      
      <HeroContent />
    </div>
  );
};
