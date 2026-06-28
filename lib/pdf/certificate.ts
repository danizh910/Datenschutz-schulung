'use client';

/**
 * Captures the Teilnahmebestätigung container (cert card + module list) with
 * html2canvas and saves it as a centred single-page A4 PDF.
 * CSS custom properties are resolved by the browser before capture.
 */
export async function generateCertificatePdf(
  element: HTMLElement,
  filename: string,
): Promise<void> {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
  ]);

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff',
  });

  const pdf = new jsPDF({ format: 'a4', unit: 'mm', orientation: 'portrait' });
  const pageW = 210;
  const pageH = 297;
  const margin = 10;
  const imgW = pageW - margin * 2;
  const imgH = (canvas.height / canvas.width) * imgW;
  const yOffset = Math.max(0, (pageH - imgH) / 2);

  pdf.addImage(
    canvas.toDataURL('image/jpeg', 0.95),
    'JPEG',
    margin,
    yOffset,
    imgW,
    imgH,
  );

  pdf.save(filename);
}
