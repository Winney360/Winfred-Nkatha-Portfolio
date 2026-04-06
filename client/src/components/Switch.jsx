import React, { useEffect, useRef, useState } from 'react';
import ThreeDButton from './ThreeDButton';

const Switch = () => {
  const [status, setStatus] = useState('idle');
  const resetTimerRef = useRef(null);
  const RESUME_PATH = '/resume.pdf';
  const RESUME_NAME = 'Winfred_Nkatha_Resume.pdf';

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const showOpenForFiveSeconds = () => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }
    resetTimerRef.current = setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  const handleDownload = async () => {
    if (status === 'downloading') {
      return;
    }

    try {
      setStatus('downloading');

      const response = await fetch(RESUME_PATH, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Resume download failed');
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = RESUME_NAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);

      setStatus('open');
      showOpenForFiveSeconds();
    } catch {
      // Fallback if fetch fails for any reason.
      window.open(RESUME_PATH, '_blank');
      setStatus('open');
      showOpenForFiveSeconds();
    }
  };

  const handleClick = () => {
    if (status === 'idle') {
      handleDownload();
      return;
    }

    if (status === 'open') {
      window.open(RESUME_PATH, '_blank');
    }
  };

  const buttonText =
    status === 'idle' ? 'Download Resume' : status === 'downloading' ? 'Downloading...' : 'Open';

  return (
    <ThreeDButton
        type="button"
        onClick={handleClick}
        disabled={status === 'downloading'}
        size="md"
      >
        {buttonText}
    </ThreeDButton>
  );
}

export default Switch;
