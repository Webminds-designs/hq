"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import logo from "../asserts/logo.png";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const prevScrollY = useRef(0);
  const router = useRouter();
  const pathname = usePathname();

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

  const handleNavigation = (item: string) => {
    const isHomePage = pathname === "/";

    if (isHomePage) {
      // If on home page, use hash navigation
      const element = document.getElementById(item);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on different page, navigate to home with hash
      router.push(`/#${item}`);
    }

    // Close mobile menu if open
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 text-white px-6 py-4"
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleLogoClick}
        >
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
            <button
              key={item}
              onClick={() => handleNavigation(item)}
              className="relative transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300"
            >
              {item.toUpperCase()}
            </button>
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
          className="md:hidden mt-4 space-y-4 text-center bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          {["work", "services", "about", "connect"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item)}
              className="block text-sm font-medium hover:text-red-500 w-full"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
