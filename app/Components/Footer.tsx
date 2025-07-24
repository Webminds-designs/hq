"use client";
import Image from "next/image";
import logo from "../asserts/HQ_Logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white font-avenir px-4 sm:px-6 md:px-10 text-sm">
      <hr className="h-[1px] border-t border-white/50 mx-auto pt-10" />

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mt-8">
        {/* Logo and Tagline */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src={logo}
            alt="Logo"
            width={640}
            height={640}
            className="w-3/4 sm:w-2/3 md:w-full px-10 md:px-20 object-contain"
          />
        </div>

        {/* Navigation + Contact */}
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start justify-center space-y-2 font-medium uppercase tracking-wide text-[12px]">
            <Link href="#work">Work</Link>
            <Link href="#Projects">Projects</Link>
            <Link href="#Gallery">Gallery</Link>
            <Link href="#services">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#connect">Connect</Link>
            <Link href="#privacy">Privacy Policy</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <p className="font-medium text-[13px] uppercase break-words text-center md:text-left">
              hello@hqentertainment.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Info Row */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-3 text-center md:text-left py-6 mt-8 uppercase text-xs">
        <p>
          <span className="text-lg font-bold">&copy;</span> HQENTERTAINTMENT 2025
        </p>
        <p>LinkedIn, X, Instagram, YouTube</p>
        <p>
          <a href="https://webmindsdesigns.com/" target="_blank" rel="noopener noreferrer">
            Designed by WebMinds Designs
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
