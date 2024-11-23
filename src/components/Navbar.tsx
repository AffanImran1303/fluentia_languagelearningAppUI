"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

// Mobile menu toggle button component
const MenuToggle = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => (
  <button
    className="block md:hidden p-2 rounded text-gray-800 hover:text-blue-600 focus:outline-none"
    onClick={toggleMenu}
    aria-label="Toggle navigation menu"
  >
    {isOpen ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    )}
  </button>
);

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 border-2 m-4 rounded-xl inset-x-0 z-50 bg-[#6f53ef] text-white shadow-md transition-all duration-300",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl poppins-bold nav-hover">
          fluentia
        </Link>

        {/* Menu Toggle Button for Mobile */}
        <MenuToggle isOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Navigation Links */}
        <ul
          className={cn(
            "fixed md:relative md:flex items-center md:space-x-6 bg-white md:bg-transparent md:static inset-x-0 top-16 md:top-auto transition-all duration-300 ease-in-out",
            menuOpen ? "block" : "hidden md:block",
            "p-6 md:flex p-0 space-y-4 md:space-y-0"
          )}
        >
          {navItems.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className={cn(
                  "block py-2 px-4 rounded nav-hover hover:bg-gray-100 md:hover:bg-transparent",
                  active === label ? "text-blue-600 font-semibold" : ""
                )}
                onClick={() => {
                  setActive(label);
                  setMenuOpen(false); // Close menu on link click (for mobile)
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
