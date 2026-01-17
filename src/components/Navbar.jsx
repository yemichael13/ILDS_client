import React from "react";
import Logo from "../assets/images/logo_live.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-5 px-20 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="w-20 rounded-full h-20">
        <img src={Logo} alt="ILDS" className="w-full h-full object-contain rounded-full" />
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 bg-white rounded-2xl text-black text-lg justify-center px-6 items-center font-medium h-10">
        <li>
          <Link to="/news" className="hover:text-green-700 transition py-2 ">
            News & Updates
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white font-semibold bg-green-700 py-2 px-4">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-green-700 transition py-2 ">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-green-700 transition py-2 ">
            Services
          </Link>
        </li>
        <li>
          <Link to="/faq" className="hover:text-green-700 transition py-2 ">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white bg-yellow-600 px-4 font-semibold py-2 ">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;