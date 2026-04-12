import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const exportPDF = async (elementId, fileName = "Umar_Ibrahim_CV.pdf") => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Temporarily hide elements you don't want in the PDF (like navbars or floating buttons)
  const nav = document.querySelector('nav');
  if (nav) nav.style.display = 'none';

  const canvas = await html2canvas(element, {
    scale: 2, // Higher scale for better quality
    useCORS: true, // Allows loading external images
    logging: false,
  });

  if (nav) nav.style.display = 'flex';

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  
  const imgWidth = 210; // A4 width in mm
  const pageHeight = 297; // A4 height in mm
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight;
  let position = 0;

  // Add first page
  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  // Add extra pages if the content is long
  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save(fileName);
};