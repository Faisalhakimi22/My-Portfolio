"use client";

import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 left-0 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between">
        {/* Logo and Name */}
        <Link
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logos.png"
            alt="Logo"
            width={120}
            height={90}
            draggable={false}
            className="cursor-pointer hover:animate-slowspin"
          />
          <div className="font-bold ml-[10px] hidden md:block text-gray-300">
            Faisal Hakimi
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-row items-center justify-between w-[500px] h-full">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}

            {/* Source Code */}
            {/*
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
            >
              Source Code
            </Link>
            */}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-5 items-center">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
