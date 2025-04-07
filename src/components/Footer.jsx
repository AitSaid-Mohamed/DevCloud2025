import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b  to-gray-800 dark:from-black dark:to-black">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Connect with Me</h2>
        <div className="flex justify-center items-center gap-6 mb-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/mohamedaitsaid2?igsh=MXUydW1yaGJpc3NqNg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/moh-el-2338472a7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/AitSaid-Mohamed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          {/* Phone */}
          <a
            href="tel:+212762395513"
            className="text-green-500 hover:text-green-400 text-2xl"
            aria-label="Phone"
          >
            <FaPhone />
          </a>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Mohamed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
