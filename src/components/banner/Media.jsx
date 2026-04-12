import React from 'react';
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Media = () => {
  const socials = [
    { icon: <FaInstagram />, link: "https://www.instagram.com/stopbegging01" },
    { icon: <FaTwitter />, link: "https://x.com/stopbegging95" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/feed/" },
    { icon: <IoLogoWhatsapp />, link: "https://wa.me/+2348165371302" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-base uppercase font-bold text-midnightBlue tracking-wide">Connect</h2>
      <div className="flex gap-4">
        {socials.map((social, i) => (
          <a
            href={social.link}
            key={i}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 bg-gray-50 text-midnightBlue text-xl flex items-center justify-center rounded-2xl shadow-sm border border-gray-100 hover:bg-midnightBlue hover:text-white hover:-translate-y-1.5 transition-all duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Media;