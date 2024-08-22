"use client"; // This marks the component as a Client Component

import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 p-6">
      <div className="flex justify-between items-center mt-5 mb-5">
        <div className="text-xl font-bold"></div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none p-0"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 absolute md:static left-0 w-full md:w-auto bg-gray-100 md:bg-transparent z-10 md:z-auto transition-all duration-300 ease-in-out ${
            isOpen ? "top-16 right-0 pr-10 mt-8" : "top-[-500px]"
          } md:top-auto md:right-auto items-end md:items-center`}
        >
          <li>
            <a
              href="#home"
              className={`nav-link ${
                pathname === "/#home"
                  ? "font-bold"
                  : "text-gray-700 hover:text-gray-900"
              } p-1 block md:inline-block`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${
                pathname === "/#about"
                  ? "font-bold"
                  : "text-gray-700 hover:text-gray-900"
              } p-1 block md:inline-block`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-link ${
                pathname === "/#projects"
                  ? "font-bold"
                  : "text-gray-700 hover:text-gray-900"
              } p-1 block md:inline-block`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={`nav-link ${
                pathname === "/#resume"
                  ? "font-bold"
                  : "text-gray-700 hover:text-gray-900"
              } p-1 block md:inline-block`}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${
                pathname === "/#contact"
                  ? "font-bold"
                  : "text-gray-700 hover:text-gray-900"
              } p-1 block md:inline-block`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
