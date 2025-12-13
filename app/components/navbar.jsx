// @flow strict
"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-transparent relative z-50">
      <div className="flex items-center justify-between py-5 px-4 md:px-0">

        {/* Logo */}
        <Link
          href="/"
          className="text-[#16f2b3] text-2xl font-bold"
          onClick={() => setOpen(false)}
        >
          KMS PRAVEEN
        </Link>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-white z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Menu */}
        <ul
          className={`
            md:flex md:items-center md:space-x-4
            absolute md:static top-20 left-0 w-full md:w-auto
            bg-[#0d1224] md:bg-transparent
            transition-all duration-300 ease-in-out
            ${open ? "block opacity-100" : "hidden opacity-0 md:opacity-100"}
          `}
        >
          {[
            ["About", "#about"],
            ["Experience", "#experience"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Education", "#education"],
            ["Contact", "#contact"],
          ].map(([label, link]) => (
            <li
              key={label}
              className="border-b border-gray-700 md:border-none"
            >
              <Link
                href={link}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-white hover:text-pink-500 transition-colors duration-200"
              >
                {label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
