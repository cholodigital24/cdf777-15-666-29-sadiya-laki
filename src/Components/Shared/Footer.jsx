import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">সাদিয়া লাকী</h2>
          <p className="text-gray-300">SK | BRAC.</p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="hover:text-secondary transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-secondary transition duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-secondary transition duration-300 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#"
            className="hover:text-secondary transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="mt-8 mx-4 flex justify-center items-center">
        <p className="text-gray-500 text-sm">
          &copy; 2023 Bio Site. All rights reserved. || Created by{" "}
          <a href="tel:+881826311125" className="text-white">
            Cholo Digital
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
