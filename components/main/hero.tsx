import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      <img
        src="videos/p.jpg" // Use forward slashes for paths
        alt="Hero Background"
        className="absolute inset-0 object-cover w-full h-[60vh] md:h-full -z-20" // 60vh for mobile, full height for larger screens
      />
      
      <HeroContent />
    </div>
  );
};
