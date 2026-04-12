import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
// import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";

function App() {
  return (
    <div className="w-full h-auto bg-white text-midnightBlue selection:bg-midnightBlue selection:text-white">
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4">
        <Banner />
        <Features />
        <Resume />
        <Contact />
        {/* <Footer /> */}
        <FooterBottom />
      </div>
    </div>
  );
}
export default App;