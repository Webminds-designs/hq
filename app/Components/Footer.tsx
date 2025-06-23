"use client";
import Image from "next/image";
import logo from "../asserts/HQ sound LOGO wite 1.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white py-6 px-4 sm:px-6 md:px-10 text-sm">
      <hr className="h-[1px] border-t border-white mx-auto pt-10" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left mt-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start justify-center space-y-2">
          <Image
            src={logo}
            alt="Logo"
            width={540}
            height={540}
            className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[540px] object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start md:pl-40 justify-center space-y-2 font-medium uppercase tracking-wide text-[15px]">
          <Link href="#">Work</Link>
          <Link href="#">Projects</Link>
          <Link href="#">Gallery</Link>
          <Link href="#">Services</Link>
          <Link href="#">About</Link>
          <Link href="#">Connect</Link>
          <Link href="#">Privacy Policy</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <p className="font-medium text-[15px] break-words text-center md:text-left">
            hello@hqentertainment.com
          </p>
        </div>
      </div>

      {/* Bottom Info Row */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-3 text-center md:text-left py-6 mt-4">
        <p>
          <span className="text-lg font-bold">&copy;</span> HQENTERTAINTMENT
          2025
        </p>
        <p>LinkedIn, X, Instagram, YouTube</p>
        <p>Designed by WebMinds</p>
      </div>
    </footer>
  );
};

export default Footer;
