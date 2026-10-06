import React from 'react';

interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    // Added hover-swing and transition classes
    <span className="inline-flex items-center px-3 py-1 bg-oatmeal text-faded text-sm font-headings font-semibold rounded-full border border-stitches shadow-sm hover-swing cursor-pointer transition-colors hover:border-terracotta hover:text-terracotta">
      {children}
    </span>
  );
}