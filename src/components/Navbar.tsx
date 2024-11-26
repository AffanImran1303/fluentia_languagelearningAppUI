"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import {navItems} from '@/constants';

// Mobile menu toggle button component
const MenuToggle = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => (
  <button
    className="block md:hidden p-2 rounded text-gray-800 hover:text-blue-600 focus:outline-none"
    onClick={toggleMenu}
    aria-label="Toggle navigation menu"
  >
    {isOpen ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 menuIcon" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 menuIcon" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    )}
  </button>
);

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav
      className={cn(
        "fixed top-0 m-4 rounded-xl inset-x-0 z-50 bg-[#6f53ef] text-white shadow-2xl transition-all duration-300",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 sm:py-2 md:py-0">
        {/* Logo */}
        <Link href="/" className="text-lg poppins-bold nav-hover m-2 sm:text-2xl">
          fluentia
        </Link>

        {/* Menu Toggle Button for Mobile */}
        <MenuToggle isOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Navigation Links */}
        <ul
          className={cn( 
            "fixed m-4 rounded-xl md:relative md:flex items-center md:space-x-6 bg-[#6f53ef] text-white md:bg-transparent md:static inset-x-0 top-16 md:top-auto transition-all duration-300 ease-in-out",
            menuOpen ? "block" : "hidden md:block",
            "p-6 md:flex p-0 space-y-4 md:space-y-0"
          )}
        >
          {navItems.map((item,key) => (
            <li>
              <Link
              key={key}
                href={item.href}
                className={cn(
                  "block p-4 px-4 rounded nav-hover hover:bg-gray-100 md:hover:bg-transparent",
                  active === item.label ? "text-[#3e477a] font-semibold" : ""
                )}
                onClick={() => {
                  setActive(item.label);
                  setMenuOpen(false); // Close menu on link click (for mobile)
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
