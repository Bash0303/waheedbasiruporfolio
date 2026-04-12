import React from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 border-b border-slate-200 bg-white">
      <div className="flex justify-center text-center mb-14">
        <Title title="GET IN TOUCH" des="Connect With Me" />
      </div>
      
      <div className="w-full flex flex-col lgl:flex-row justify-between gap-10">
        {/* Left Side: Contact Information */}
        <ContactLeft />

        {/* Right Side: Contact Form */}
        <div className="w-full lgl:w-[60%] h-full bg-white shadow-2xl border border-slate-200 rounded-2xl p-6 md:p-10">
          <form className="flex flex-col gap-8">
            <div className="flex flex-col lgl:flex-row gap-8">
              {/* Name Field */}
              <div className="flex flex-col gap-3 w-full lgl:w-1/2 group">
                <label className="text-sm font-extrabold text-slate-900 uppercase tracking-wider group-focus-within:text-blue-700 transition-colors duration-300">
                  Your Name
                </label>
                <input 
                  className="w-full h-14 bg-slate-50 rounded-xl border-2 border-slate-200 px-4 text-black font-medium outline-none focus:border-blue-700 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                  type="text" 
                  placeholder="e.g. John Doe"
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-3 w-full lgl:w-1/2 group">
                <label className="text-sm font-extrabold text-slate-900 uppercase tracking-wider group-focus-within:text-blue-700 transition-colors duration-300">
                  Phone Number
                </label>
                <input 
                  className="w-full h-14 bg-slate-50 rounded-xl border-2 border-slate-200 px-4 text-black font-medium outline-none focus:border-blue-700 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                  type="text" 
                  placeholder="e.g. +234 000 000 0000"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-3 group">
              <label className="text-sm font-extrabold text-slate-900 uppercase tracking-wider group-focus-within:text-blue-700 transition-colors duration-300">
                Email Address
              </label>
              <input 
                className="w-full h-14 bg-slate-50 rounded-xl border-2 border-slate-200 px-4 text-black font-medium outline-none focus:border-blue-700 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                type="email" 
                placeholder="example@mail.com"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-3 group">
              <label className="text-sm font-extrabold text-slate-900 uppercase tracking-wider group-focus-within:text-blue-700 transition-colors duration-300">
                Message
              </label>
              <textarea 
                className="w-full bg-slate-50 rounded-xl border-2 border-slate-200 p-4 text-black font-medium outline-none focus:border-blue-700 focus:bg-white transition-all duration-300 resize-none placeholder:text-slate-400"
                rows="6"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full h-16 bg-blue-700 text-white text-base font-black uppercase tracking-widest rounded-xl shadow-lg transition-all duration-300 hover:bg-slate-900 hover:-translate-y-1 active:scale-95">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;