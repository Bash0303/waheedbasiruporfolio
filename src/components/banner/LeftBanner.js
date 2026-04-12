import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      'FullStack Engineer.',
      'Mobile App Developer.',
      'Laravel Expert.',
      'React Specialist.',
      'System Architect.',
      'UI/UX Enthusiast.',
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  /**
   * HANDLER: Download PDF
   * Captures the 'root' element (entire app) and converts to PDF.
   */
  const handleDownloadCV = async () => {
    const element = document.getElementById('root'); // Targets your entire app
    const downloadBtn = document.getElementById('download-btn');
    
    // 1. Visual feedback & cleanup for PDF
    if (downloadBtn) downloadBtn.innerText = "Generating...";
    
    try {
      const canvas = await html2canvas(element, {
        scale: 2, // High resolution
        useCORS: true, 
        logging: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210; 
      const pageHeight = 295; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add pages as needed for long content
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Umar_Ibrahim_Ayobami_CV.pdf");
    } catch (error) {
      console.error("PDF Export Error:", error);
    } finally {
      if (downloadBtn) downloadBtn.innerText = "Download CV";
    }
  };

  return (
    <div className="flex flex-col w-full lgl:w-1/2 gap-12">
      <div className="flex flex-col gap-6">
        <h4 className="text-sm font-bold tracking-[4px] text-midnightBlue/60 uppercase">
          Welcome to my digital space
        </h4>
        <h1 className="text-5xl lgl:text-6xl font-black text-midnightBlue leading-tight">
          Hi, I'm
          {' '}
          <span className="text-blue-700 capitalize">Umar Ibrahim A.</span>
        </h1>
        <div className="h-16">
          <h2 className="text-3xl lgl:text-4xl font-bold text-midnightBlue">
            a <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#191970" />
          </h2>
        </div>
        <p className="text-base text-justify lgl:text-sm leading-8 text-gray-600 max-w-[650px] font-bodyFont md:text-left">
          I am a Full-Stack Developer with several years of experience delivering responsive,
          scalable, and user-friendly applications across different industries. I focus on
          building reliable platforms, collaborating effectively with cross-functional teams,
          and contributing to team growth through knowledge sharing, mentoring, and open
          collaboration. Always eager to learn from teammates while bringing value through
          technical expertise and problem-solving.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-10 sm:items-center">
        <Media />
        <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-bold text-midnightBlue">
            Quick Action
          </h2>
          <button 
            id="download-btn"
            onClick={handleDownloadCV}
            className="px-8 py-4 bg-midnightBlue text-white font-bold rounded-xl shadow-xl hover:bg-blue-900 hover:-translate-y-1 transition-all duration-300 active:scale-95"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;