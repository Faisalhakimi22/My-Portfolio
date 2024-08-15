import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-300px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/b.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-col text-lg sm:text-xl md:text-2xl lg:text-3xl gap-5 mt-5 text-5xl font-bold text-white max-w-[700px] items-center justify-center w-auto h-auto">
        Your dynamic and responsive text here
      </div>

      <HeroContent />
    </div>
  );
};
