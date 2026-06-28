'use client';

/** Captures the handout container with html2canvas and saves it as a multi-page A4 PDF. */
export async function generateHandoutPdf(
  element: HTMLElement,
  filename: string,
): Promise<void> {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
  ]);

  // Remove top padding that normally offsets the fixed nav bar
  const origPadding = element.style.padding;
  element.style.padding = '20px 48px 32px';

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff',
    width: element.scrollWidth,
    height: element.scrollHeight,
  });

  element.style.padding = origPadding;

  const pdf = new jsPDF({ format: 'a4', unit: 'mm', orientation: 'portrait' });
  const pageW = 210;
  const pageH = 297;
  const imgW = pageW;
  const imgH = (canvas.height / canvas.width) * imgW;
  const dataUrl = canvas.toDataURL('image/jpeg', 0.92);

  let heightLeft = imgH;
  let yPos = 0;

  pdf.addImage(dataUrl, 'JPEG', 0, yPos, imgW, imgH);
  heightLeft -= pageH;

  while (heightLeft > 0) {
    yPos -= pageH;
    pdf.addPage();
    pdf.addImage(dataUrl, 'JPEG', 0, yPos, imgW, imgH);
    heightLeft -= pageH;
  }

  pdf.save(filename);
}
