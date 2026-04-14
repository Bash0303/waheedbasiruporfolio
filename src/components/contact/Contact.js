import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // =========================================================
    // ⚠️ REPLACE THESE 3 STRINGS WITH YOUR ACTUAL EMAILJS KEYS
    // =========================================================
    const serviceId = 'service_iw650z7';  // e.g., 'service_abc123'
    const templateId = 'template_9mk51an'; // e.g., 'template_xyz890'
    const publicKey = 'd49M7zfO5n5HKAONv';   // e.g., 'aB1cD2eF3gH4iJ5kL'

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset(); // Clears the form fields
          setIsSubmitting(false);
        },
        (error) => {
          alert('Failed to send the message, please try again.');
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section 
      id="contact" 
      className="w-full pt-20 pb-12 lg:pt-32 lg:pb-24 relative bg-transparent overflow-hidden"
    >
      {/* Curvy Top Shape Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg 
          className="relative block w-[calc(120%+1.3px)] h-[60px] md:h-[120px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      {/* Title Section */}
      <div className="flex justify-center text-center mb-8 md:mb-16 relative z-10">
        <Title 
          title="GET IN TOUCH" 
          des="Connect With Me" 
          className="text-white" 
        />
      </div>
      
      <div className="w-full flex flex-col lgl:flex-row justify-between gap-10 relative z-10">
        <ContactLeft />

        {/* Right Side: Professional Contact Form */}
        <div className="w-full lgl:w-[60%] h-full bg-white shadow-2xl border border-white/10 rounded-2xl p-6 md:p-10">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8">
            <div className="flex flex-col lgl:flex-row gap-8">
              {/* Name Field */}
              <div className="flex flex-col gap-3 w-full lgl:w-1/2 group">
                <label className="text-sm font-extrabold text-slate-900 uppercase tracking-widest group-focus-within:text-blue-700 transition-colors duration-300">
                  Your Name
                </label>
                <input 
                  name="user_name"
                  className="w-full h-14 bg-slate-50 rounded-xl border-2 border-slate-200 px-4 text-black font-medium outline-none focus:border-blue-700 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                  type="text" 
                  placeholder="e.g. John Doe"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-3 w-full lgl:w-1/2 group">
                <label className="text-sm font-extrabold text-slate-900 uppercase tracking-widest group-focus-within:text-blue-700 transition-colors duration-300">
                  Phone Number
                </label>
                <input 
                  name="user_phone"
                  className="w-full h-14 bg-slate-50 rounded-xl border-2 border-slate-200 px-4 text-black font-medium outline-none focus:border-blue-700 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                  type="text" 
                  placeholder="e.g. +234 816 537 1302"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-3 group">
              <label className="text-sm font-extrabold text-slate-900 uppercase tracking-widest group-focus-within:text-blue-700 transition-colors duration-300">
                Email Address
              </label>
              <input 
                name="user_email"
                className="w-full h-14 bg-slate-50 rounded-xl border-2 border-slate-200 px-4 text-black font-medium outline-none focus:border-blue-700 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                type="email" 
                placeholder="umaribrahimayobami@gmail.com"
                required
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-3 group">
              <label className="text-sm font-extrabold text-slate-900 uppercase tracking-widest group-focus-within:text-blue-700 transition-colors duration-300">
                Message
              </label>
              <textarea 
                name="message"
                className="w-full bg-slate-50 rounded-xl border-2 border-slate-200 p-4 text-black font-medium outline-none focus:border-blue-700 focus:bg-white transition-all duration-300 resize-none placeholder:text-slate-400"
                rows="6"
                placeholder="How can I help you with your next software engineering project?"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              disabled={isSubmitting}
              className={`w-full h-16 bg-[#191970] text-white text-base font-black uppercase tracking-widest rounded-xl shadow-lg transition-all duration-300 hover:bg-blue-800 hover:-translate-y-1 active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;