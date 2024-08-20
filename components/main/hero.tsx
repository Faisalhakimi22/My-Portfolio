import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-100x top-[-400px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/p.mp4" type="video/mp4" />
      </video>

      <HeroContent />
    </div>
  );
};
