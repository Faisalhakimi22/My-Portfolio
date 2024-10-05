import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <img
        src="videos\p.jpg" 
        alt="Hero Background"
        className="absolute inset-100x top-[-400px] left-0 w-full h-full object-cover -z-20"
      />
      
      <HeroContent />
    </div>
  );
};



