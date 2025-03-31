"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mt">
      <nav className="darkNav p-4 m">
        <div className="mt-8 container mx-auto flex justify-between items-center">
          <div className=" font-bold text-xl">ChrisNetEngineer</div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                />
              </svg>
            </button>
          </div>

          <ul className="hidden md:flex space-x-4 darkNav">
            <li>
              <a href="#" className="hover:text-gray-600 font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600 font-medium">
                Internship
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600 font-medium">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600 font-medium">
                Resume
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
        <div
          id="mobile-menu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden mt-2 darkNav`}
        >
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block py-2 px-4  hover:bg-gray-200 font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4  hover:bg-gray-200 font-medium"
              >
                Internship
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4  hover:bg-gray-200 font-medium"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4  hover:bg-gray-200 font-medium"
              >
                Resume
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
