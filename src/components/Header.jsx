import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoText, setLogoText] = useState("Visionary Code");
  const menuRef = useRef(null); // Reference for the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Change logo text dynamically every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoText((prevText) => (prevText === "Visionary Code" ? " Visionary Code" : "Visionary Code"));
    }, 2000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Close the menu if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="p-4 flex justify-around items-start  z-50   ">
      {/* Logo with animation */}
      <h1 className="text-xl font-bold text-blue-400 animate-text-change">{logoText}</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex  dark:text-white">
        <a href="#about" className="mx-2 hover:text-gray-400">About</a>
        <a href="#skills" className="mx-2 hover:text-gray-400">Skills</a>
        <a href="#projects" className="mx-2 hover:text-gray-400">Projects</a>
        <a href="#contact" className="mx-2 hover:text-gray-400">Contact</a>
      </nav>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <nav
        ref={menuRef} // Assigning reference to the menu
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
          <li>
            <a
              href="#about"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
