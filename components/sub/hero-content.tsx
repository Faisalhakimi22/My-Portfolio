"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const imageRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl px-5 sm:px-10 md:px-20 mt-20 sm:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-4 sm:gap-5 justify-center text-center sm:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto sm:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[12px] sm:text-[13px]">
            Decoding the Future with Artificial Intelligence
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 sm:gap-5 mt-3 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white items-center sm:items-start justify-center max-w-[700px] mx-auto sm:mx-0"
        >
          <span>
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Partner in
            </span>{" "}
            Technological Innovation.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-white max-w-[600px] mt-4 sm:mt-5 flex flex-col items-center sm:items-start justify-center mx-auto sm:mx-0"
        >
          <span>
            <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Welcome to Faisal Hakimi&apos;s Portfolio! <br />
            </span>
            As a Computer Science student at IM|Sciences with a focus on Data Science and AI, I am captivated by the art of revealing patterns that drive meaningful change. My expertise in Machine Learning, Data Visualization, and Database Management fuels my commitment to solving intricate problems and delivering results that resonate.<br /><br />

            Explore my portfolio to see how I combine technical skills with a creative mindset to deliver impactful data solutions that drive results and inspire innovation.
          </span>
        </motion.p>

        <motion.a
          href="/Faisalhakimi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto sm:mx-0"
        >
          View Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative cursor-pointer"
          ref={imageRef}
        >
          <Image
            src="/new.png"
            alt="work icons"
            height={650}
            width={650}
            draggable={false}
            className="select-none rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};