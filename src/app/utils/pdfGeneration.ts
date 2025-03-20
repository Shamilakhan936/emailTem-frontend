import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePdf = async (contentRef: HTMLDivElement | null): Promise<void> => {
  if (!contentRef) {
    console.error('No content reference provided');
    return;
  }

  try {
    const canvas = await html2canvas(contentRef, {
      scale: 2,
      useCORS: true,
      logging: false
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('resume.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}; 