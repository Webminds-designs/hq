"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "../asserts/logo.png";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    // Initial slide-down animation
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current && currentScrollY > 80) {
        // Hide navbar
        gsap.to(navRef.current, {
          y: -100,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        // Show navbar
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen && mobileMenuRef.current) {
      // Animate menu open
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    } else if (!menuOpen && mobileMenuRef.current) {
      // Animate menu close
      gsap.to(mobileMenuRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 text-white px-6 py-4"
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={140}
            height={140}
            className="w-28 h-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-20 text-[12px] font-medium pr-18">
          {["work", "services", "about", "connect"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden mt-4 space-y-4 text-center"
        >
          {["work", "services", "about", "connect"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium hover:text-red-500"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
