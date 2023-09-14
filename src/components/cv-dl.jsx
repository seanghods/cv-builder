import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const downloadResumeAsPDF = async () => {
  const resumeElement = document.querySelector('.cv');
  resumeElement.style.border = 0;
  const canvas = await html2canvas(resumeElement);
  resumeElement.style.border = '1px solid grey';
  const imgData = canvas.toDataURL('image/png');
  const pdfWidth = 8.5;
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  const pdf = new jsPDF({
    unit: 'in',
    format: [pdfWidth, pdfHeight],
  });
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save('resume.pdf');
};

export default function CvDownload() {
  return (
    <div className="dl">
      <button id="download" onClick={downloadResumeAsPDF}>
        Download PDF
      </button>
    </div>
  );
}
