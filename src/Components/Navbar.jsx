import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai"; // Optional: Close icon for better UX
import { Link } from "react-scroll";

const Navbar = () => {
  const [navChange, setNavChange] = useState(false);

  // Helper function to close menu when a link is clicked
  const handleClose = () => setNavChange(false);

  return (
    <div className="bg-linear-to-b from-blue-900 to-blue-600/60 fixed w-full z-10 shadow-md">
      <nav className="flex justify-between items-center px-4 max-[550px]:px-2 py-2">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="logo" className="h-20 max-[550px]:h-16" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden min-[450px]:flex sm:space-x-10 space-x-5 px-4 text-[14px] sm:text-[16px] font-bold text-white">
          <li>
            <Link to="home" smooth={true} duration={500} offset={-70} spy={true} activeClass="text-yellow-400" className="cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-70} spy={true} activeClass="text-yellow-400" className="cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} offset={-70} spy={true} activeClass="text-yellow-400" className="cursor-pointer">
              Services
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} offset={-70} spy={true} activeClass="text-yellow-400" className="cursor-pointer">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-70} spy={true} activeClass="text-red-400" className="cursor-pointer">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger / Close Button */}
        <div className="min-[450px]:hidden block">
          <button 
            onClick={() => setNavChange(!navChange)} 
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {navChange ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {navChange && (
        <div className="min-[450px]:hidden absolute top-full left-0 w-full bg-blue-900 border-t border-blue-700 shadow-lg py-4 px-6">
          <ul className="flex flex-col space-y-4 text-white font-bold text-base">
            <li>
              <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                offset={-70} 
                spy={true} 
                activeClass="text-yellow-400" 
                onClick={handleClose}
                className="cursor-pointer block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                offset={-70} 
                spy={true} 
                activeClass="text-yellow-400" 
                onClick={handleClose}
                className="cursor-pointer block"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="services" 
                smooth={true} 
                duration={500} 
                offset={-70} 
                spy={true} 
                activeClass="text-yellow-400" 
                onClick={handleClose}
                className="cursor-pointer block"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="portfolio" 
                smooth={true} 
                duration={500} 
                offset={-70} 
                spy={true} 
                activeClass="text-yellow-400" 
                onClick={handleClose}
                className="cursor-pointer block"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-70} 
                spy={true} 
                activeClass="text-red-400" 
                onClick={handleClose}
                className="cursor-pointer block"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;