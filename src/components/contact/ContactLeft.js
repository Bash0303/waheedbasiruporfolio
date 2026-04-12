import React from 'react';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLogoWhatsapp } from 'react-icons/io';
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  const socialLinks = [
    { icon: <FaInstagram />, link: "https://www.instagram.com/stopbegging01" },
    { icon: <FaTwitter />, link: "https://x.com/stopbegging95" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/feed/" },
    { icon: <IoLogoWhatsapp />, link: "https://wa.me/+2348165371302" },
  ];

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-b from-white to-gray-50 p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-8">
      {/* Image with subtle hover scale */}
      <div className="overflow-hidden rounded-xl group">
        <img 
          className="w-full h-64 object-cover group-hover:scale-105 duration-500" 
          src={contactImg} 
          alt="contact" 
        />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
            Umar Ibrahim A.
          </h3>
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mt-1">
            Full-Stack Engineer
          </p>
        </div>
        
        <p className="text-base text-slate-600 leading-relaxed font-medium">
          I'm currently available for freelance projects, remote and full-time opportunities. 
          Let's build something extraordinary together.
        </p>

        {/* Modern Contact List with Icons */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4 group">
            <span className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white duration-300">
              <FaPhoneAlt size={14} />
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-400 uppercase">Call Me</span>
              <span className="text-slate-800 font-semibold">08059971709, 09157779553</span>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <span className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white duration-300">
              <FaEnvelope size={14} />
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-400 uppercase">Email</span>
              <span className="text-slate-800 font-semibold">umaribrahimayobami@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <span className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white duration-300">
              <IoLogoWhatsapp size={16} />
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-400 uppercase">WhatsApp</span>
              <span className="text-slate-800 font-semibold">+234 816 537 1302</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <h2 className="text-xs uppercase tracking-widest font-black text-[#191970] mb-6">Connect with me</h2>
        <div className="flex gap-4">
          {socialLinks.map((item, i) => (
            <a 
              key={i} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white text-slate-700 text-xl inline-flex items-center justify-center rounded-xl shadow-sm hover:bg-slate-900 hover:text-white hover:-translate-y-1.5 duration-300 cursor-pointer border border-gray-200"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;