import jsPDF from 'jspdf';
import { personalInfo, education, experience, skills } from '@/data/portfolio-data';

export const generateResumePDF = () => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 20;
  let yPosition = 20;

  // Helper function to add text with word wrap
  const addText = (text: string, size: number = 12, isBold: boolean = false) => {
    pdf.setFontSize(size);
    pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
    const lines = pdf.splitTextToSize(text, pageWidth - 2 * margin);
    pdf.text(lines, margin, yPosition);
    yPosition += size * 0.5 * lines.length;
  };

  // Header - Name and Title
  pdf.setFillColor(14, 165, 233); // Primary color
  pdf.rect(0, 0, pageWidth, 40, 'F');
  
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.text(personalInfo.name, pageWidth / 2, 20, { align: 'center' });
  
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'normal');
  pdf.text(personalInfo.title, pageWidth / 2, 30, { align: 'center' });

  yPosition = 50;
  pdf.setTextColor(0, 0, 0);

  // Contact Information
  addText('CONTACT INFORMATION', 14, true);
  yPosition += 5;
  addText(`Email: ${personalInfo.email}`, 10);
  addText(`Phone: ${personalInfo.phone.ksa}`, 10);
  addText(`Location: ${personalInfo.location.current}`, 10);
  yPosition += 10;

  // Professional Summary
  addText('PROFESSIONAL SUMMARY', 14, true);
  yPosition += 5;
  personalInfo.bio.forEach(paragraph => {
    addText(paragraph, 10);
    yPosition += 5;
  });
  yPosition += 5;

  // Experience
  addText('WORK EXPERIENCE', 14, true);
  yPosition += 5;
  
  experience.forEach((exp, index) => {
    if (yPosition > 250) {
      pdf.addPage();
      yPosition = 20;
    }
    
    addText(exp.position, 12, true);
    addText(`${exp.company} | ${exp.location}`, 10);
    addText(exp.period, 10);
    addText(exp.description, 10);
    yPosition += 8;
  });

  // Education
  if (yPosition > 220) {
    pdf.addPage();
    yPosition = 20;
  }
  
  yPosition += 5;
  addText('EDUCATION', 14, true);
  yPosition += 5;
  
  education.forEach(edu => {
    if (yPosition > 250) {
      pdf.addPage();
      yPosition = 20;
    }
    
    addText(edu.degree, 12, true);
    addText(edu.institution, 10);
    addText(edu.year || edu.period || '', 10);
    yPosition += 8;
  });

  // Skills
  if (yPosition > 200) {
    pdf.addPage();
    yPosition = 20;
  }
  
  yPosition += 5;
  addText('TECHNICAL SKILLS', 14, true);
  yPosition += 5;
  
  const skillNames = skills.map(s => s.name).join(', ');
  addText(skillNames, 10);

  // Save the PDF
  pdf.save(`${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`);
};
