import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container px-4 py-4 mx-auto lg:px-16">
        <div className="flex items-center justify-between">
          <a href="#home-section" className="font-extrabold text-lg">
            <h1>Indra</h1>
          </a>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className={`hidden lg:flex lg:items-center lg:space-x-6`}>
            <a href="#home-section" className="block py-2 text-gray-700 capitalize hover:text-blue-600 lg:inline-block lg:py-0">
              Home
            </a>
            <a href="#skills-section" className="block py-2 mt-4 text-gray-700 capitalize hover:text-blue-600 lg:mt-0 lg:inline-block lg:py-0">
              Skills
            </a>
            <a href="#portofolio-section" className="block py-2 mt-4 text-gray-700 capitalize hover:text-blue-600 lg:mt-0 lg:inline-block lg:py-0">
              Achievements
            </a>
            <a href="#sertif-section" className="block py-2 mt-4 text-gray-700 capitalize hover:text-blue-600 lg:mt-0 lg:inline-block lg:py-0">
              Certificates
            </a>
            <a href="#project-section" className="block py-2 mt-4 text-gray-700 capitalize hover:text-blue-600 lg:mt-0 lg:inline-block lg:py-0">
              Projects
            </a>
            <a href="#contact-section" className="block py-2 mt-4 text-gray-700 capitalize hover:text-blue-600 lg:mt-0 lg:inline-block lg:py-0">
              Contact
            </a>
          </div>
        </div>
      </div>
      
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg`}>
        <div className="flex flex-col px-4 py-2">
          <a href="#home-section" className="py-2 text-gray-700 capitalize hover:text-blue-600">
            Home
          </a>
          <a href="#skills-section" className="py-2 text-gray-700 capitalize hover:text-blue-600">
            Skills
          </a>
          <a href="#portofolio-section" className="py-2 text-gray-700 capitalize hover:text-blue-600">
            Achievements
          </a>
          <a href="#sertif-section" className="py-2 text-gray-700 capitalize hover:text-blue-600">
            Certificates
          </a>
          <a href="#project-section" className="py-2 text-gray-700 capitalize hover:text-blue-600">
            Projects
          </a>
          <a href="#contact-section" className="py-2 text-gray-700 capitalize hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
