"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light"); // Default to light

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Apply the theme to the DOM
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]); // Run effect when theme changes

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none transition-colors duration-300"
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 4 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="-mt-1 w-6 h-7 text-yellow-400 dark:text-yellow-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.364l-2.122 2.122M17.25 12h-2.25m-1.612 2.122L12 14.25M10.75 12H8.5m-1.612-2.122L6.75 9.75M12 21v-2.25m6.364-2.122l-2.122-2.122M17.25 12h-2.25m-1.612-2.122L12 9.75M10.75 12H8.5m-1.612 2.122L6.75 14.25"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 3 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="-mt-1 w-6 h-6 white dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m-5.882 3.883A7.5 7.5 0 015.645 12H5.25m16.073 3.022A7.5 7.5 0 0118.355 12h-.396m-1.857 3.482l-.451-4.524a3.75 3.75 0 01-.885-3.995L9.5 3.122m10.354 3.922a7.5 7.5 0 00-10.701-10.701M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
    </button>
  );
}
