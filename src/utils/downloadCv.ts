import type React from 'react';
import { profile } from '../config/profileConfig';

/**
 * Safely downloads the CV file using an in-memory Blob.
 *
 * Why this is necessary:
 * When running inside an iframe or behind privacy-focused browsers like Opera/Brave,
 * direct navigation or plain <a href="..." download> to cloud development domains
 * (such as *.run.app) can be blocked by browser shields (ERR_BLOCKED_BY_CLIENT).
 *
 * By fetching the PDF binary via same-origin fetch and creating a local blob URL,
 * the browser saves the file directly without any top-level URL navigation.
 */
export async function handleDownloadCV(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }

  const cvUrl = profile.cvPath;
  const fileName = profile.cvFilename || 'Nur-Evalia-Syah-Product-Designer-CV.pdf';

  try {
    const response = await fetch(cvUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/pdf',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to load CV (${response.status} ${response.statusText})`);
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const tempLink = document.createElement('a');
    tempLink.href = blobUrl;
    tempLink.setAttribute('download', fileName);
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    tempLink.click();

    // Clean up
    setTimeout(() => {
      document.body.removeChild(tempLink);
      window.URL.revokeObjectURL(blobUrl);
    }, 1500);
  } catch (error) {
    console.warn('In-memory blob download failed, falling back to direct download link:', error);

    // Graceful fallback for environments with strict blob policies
    const fallbackLink = document.createElement('a');
    fallbackLink.href = cvUrl;
    fallbackLink.setAttribute('download', fileName);
    fallbackLink.target = '_blank';
    fallbackLink.rel = 'noopener noreferrer';
    fallbackLink.style.display = 'none';
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    setTimeout(() => {
      document.body.removeChild(fallbackLink);
    }, 1000);
  }
}
