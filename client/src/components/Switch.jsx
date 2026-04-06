import styled from 'styled-components';

import React, { useEffect, useRef, useState } from 'react';

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
    <StyledWrapper>
      <button
        type="button"
        className={`button ${status}`}
        onClick={handleClick}
        disabled={status === 'downloading'}
      >
        {status !== 'open' && (
          <span className="circle" aria-hidden="true">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19V5m0 14-4-4m4 4 4-4" />
            </svg>
          </span>
        )}
        <span className="title">{buttonText}</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    background-color: transparent;
    border: 2px solid rgb(145, 67, 217);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    border-radius: 50px;
    width: 132px;
    height: 36px;
    cursor: pointer;
    transition: all 0.4s ease;
    padding: 3px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .button.open {
    justify-content: center;
  }

  .button:disabled {
    cursor: default;
  }

  .button .title {
    font-size: 9px;
    color: #ddd6fe;
    transition: all 0.4s ease;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
  }

  .button.open .title {
    font-size: 12px;
    font-weight: 700;
  }

  .button .circle {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: rgb(145, 67, 217);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
    position: relative;
    box-shadow: 0 0 0 0 rgb(255, 255, 255);
    overflow: hidden;
  }

  .button .circle .icon {
    color: #fff;
    width: 20px;
    transition: transform 0.4s ease;
  }

  .button.downloading .circle .icon {
    animation: spin 0.9s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Switch;
