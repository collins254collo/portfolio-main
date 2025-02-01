import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import ThemeToggle from "../themetoggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dark:text-gray-100 shadow-md top-0 left-0 w-full z-50  sticky ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-500 cursor-pointer">
          <a
            href="#home"
            className="hover:text-indigo-400 dark:hover:text-indigo-300 transition"
          >
            Collins Njogu
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none cursor-pointer dark:text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen ? "true" : "false"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:flex-row md:gap-6 text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 sm:flex flex-col md:bg-transparent transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:opacity-100 md:items-center dark:bg-gray-800`}
        >
          <li className="py-2 md:py-0 text-center md:text-left">
            <a
              href="#home"
              className="hover:text-indigo-400 dark:text-gray-100 dark:hover:text-indigo-300 transition block md:inline"
            >
              Home
            </a>
          </li>
          <li className="py-2 md:py-0 text-center md:text-left">
            <a
              href="#projects"
              className="hover:text-indigo-400 dark:text-gray-100 dark:hover:text-indigo-300 transition block md:inline"
            >
              Projects
            </a>
          </li>
          <li className="py-2 md:py-0 text-center md:text-left">
            <a
              href="#about"
              className="hover:text-indigo-400 dark:text-gray-100 dark:hover:text-indigo-300 transition block md:inline"
            >
              About
            </a>
          </li>
          <li className="py-2 md:py-0 text-center md:text-left">
            <a
              href="#contact"
              className="hover:text-indigo-400 dark:text-gray-100 dark:hover:text-indigo-300 transition block md:inline"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Theme Toggle */}
        <div>
          <ThemeToggle aria-label="Toggle Theme" />
        </div>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
