import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { navLinksdata } from '../../constants';
// import Logo from '../logo';
import UmarEngineerLogo from '../UmarEngineerLogo';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for glassmorphism depth
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`border-2 border-b-4 w-full h-20 sticky top-0 z-50 transition-all duration-300 px-4 lg:px-80 flex justify-between items-center font-titleFont 
      ${isScrolled ? "bg-white/90 backdrop-blur-lg shadow-md h-16" : "bg-white h-24"}`}>

      {/* Logo Section */}
      <div className="group cursor-pointer">
        {/* <div className="flex items-center gap-1 p-1.5 bg-midnightBlue rounded-lg transition-transform group-hover:scale-105 duration-300">
          <span className="text-xl font-black text-white px-2 tracking-tighter">UIA</span>
        </div> */}
        {/* <Logo/> */}
        <UmarEngineerLogo isScrolled={isScrolled} />
      </div>

      {/* Desktop Navigation */}
      <div className="flex items-center gap-10">
        <ul className="hidden mdl:inline-flex items-center gap-8 lg:gap-12">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-sm font-bold uppercase tracking-wider text-midnightBlue/80 hover:text-midnightBlue cursor-pointer duration-300 relative group"
            >
              <Link
                activeClass="text-midnightBlue font-black"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
                {/* Modern animated underline */}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-midnightBlue transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden mdl:inline-flex">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="px-6 py-2.5 bg-midnightBlue text-white text-sm font-bold rounded-full hover:bg-blue-900 shadow-lg hover:shadow-midnightBlue/30 transition-all duration-300 cursor-pointer"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <span
          onClick={() => setShowMenu(true)}
          className="mdl:hidden text-3xl text-midnightBlue bg-gray-100 p-2 rounded-full cursor-pointer hover:bg-midnightBlue hover:text-white duration-300"
        >
          <FiMenu />
        </span>
      </div>

      {/* Modern Mobile Fullscreen Menu */}
      {showMenu && (
        <div className="fixed inset-0 w-full h-screen bg-midnightBlue/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center mdl:hidden">
          <div className="absolute top-6 right-6">
            <MdClose
              onClick={() => setShowMenu(false)}
              className="text-4xl text-white cursor-pointer hover:rotate-90 duration-300"
            />
          </div>

          <ul className="flex flex-col items-center gap-8">
            {navLinksdata.map((item) => (
              <li key={item._id} className="text-3xl font-bold text-white/80 hover:text-white transition-colors">
                <Link
                  onClick={() => setShowMenu(false)}
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <div className="flex gap-4">
              {/* Optional: Add small social icons here for the mobile drawer */}
              <span className="text-white/60 text-sm tracking-widest uppercase">Umar Ibrahim A.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;