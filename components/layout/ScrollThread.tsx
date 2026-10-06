"use client";

import React, { useEffect, useState } from 'react';

export default function ScrollThread() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 pointer-events-none bg-transparent">
      <div 
        className="h-full bg-terracotta rounded-r-full shadow-[0_0_8px_rgba(204,122,107,0.6)]"
        style={{ 
          width: `${scrollProgress}%`,
          transition: 'width 0.1s ease-out'
        }}
      />
    </div>
  );
}