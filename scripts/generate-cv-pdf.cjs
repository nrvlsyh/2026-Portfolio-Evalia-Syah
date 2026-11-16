const fs = require('fs');
const path = require('path');

// Simple valid PDF generator without external dependencies
function createSimplePDF(lines) {
  let contentStream = 'BT\n/F1 18 Tf\n50 780 Td\n(NUR EVALIA SYAH BINTI SHARIZAD) Tj\n';
  contentStream += '/F1 12 Tf\n0 -20 Td\n(PRODUCT DESIGNER) Tj\n';
  contentStream += '/F1 10 Tf\n0 -18 Td\n(evaliasyahh@gmail.com | +601130726507 | Malaysia) Tj\n';
  contentStream += '0 -25 Td\n/F1 12 Tf\n(ABOUT ME) Tj\n0 -16 Td\n/F1 9 Tf\n';
  
  const text = [
    "Resourceful and product-minded UX professional with experience across UX research,",
    "product design, requirements analysis, and digital product development for web, mobile, and SaaS.",
    "Skilled in translating user needs and complex business requirements into structured product experiences.",
    "",
    "WORK EXPERIENCE",
    "Hatio Sea Sdn. Bhd. - Product Designer (March 2026 - current)",
    "- End-to-end product design and discovery for logistics, express and transportation management systems.",
    "- Developed AI-assisted product design workflow combining UX knowledge bases and design systems.",
    "- Multi-portal logistics architecture across 4 portals (EMS2.0 Express).",
    "",
    "PiNC Technology Sdn. Bhd. - Product Designer (May 2025 - Dec 2025)",
    "- Collaborated with cross-functional teams on mobile and SaaS products.",
    "- Junior UI/UX Designer (April 2024 - April 2025).",
    "",
    "EDUCATION",
    "Master of Computer Science (Research) - UiTM Melaka (2025 - 2027)",
    "Thesis: Developing UX Principles for Mobile Applications Using a Design Thinking Approach",
    "Bachelor of Computer Science (Hons.) Multimedia Computing - UiTM Melaka (CGPA 3.60)",
    "",
    "CORE SKILLS",
    "UX Research, Information Architecture, Interaction Design, Design Systems, Enterprise Logistics UX,",
    "AI-Assisted Prototyping, Figma, React/Tailwind prototyping."
  ];

  for (const line of text) {
    if (line === "WORK EXPERIENCE" || line === "EDUCATION" || line === "CORE SKILLS") {
      contentStream += `0 -20 Td\n/F1 12 Tf\n(${line}) Tj\n0 -14 Td\n/F1 9 Tf\n`;
    } else if (line === "") {
      contentStream += `0 -8 Td\n`;
    } else {
      // Escape parentheses
      const sanitized = line.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
      contentStream += `(${sanitized}) Tj\n0 -13 Td\n`;
    }
  }

  contentStream += 'ET';
  const streamLength = Buffer.byteLength(contentStream, 'utf8');

  const pdf = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 595.28 841.89]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica
      >>
    >>
  >>
>>
endobj
4 0 obj
<<
  /Length ${streamLength}
>>
stream
${contentStream}
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
trailer
<<
  /Size 5
  /Root 1 0 R
>>
startxref
${330 + streamLength}
%%EOF`;

  return Buffer.from(pdf, 'utf8');
}

const pdfBuffer = createSimplePDF();
const dest1 = path.join(__dirname, '../public/cv/NUR_EVALIA_SYAH_BINTI_SHARIZAD-product-designer-cv.pdf');
const dest2 = path.join(__dirname, '../public/cv/YOUR_NAME-product-designer-cv.pdf');

fs.writeFileSync(dest1, pdfBuffer);
fs.writeFileSync(dest2, pdfBuffer);
console.log('CV PDFs written successfully');
