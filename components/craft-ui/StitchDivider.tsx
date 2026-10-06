import React from 'react';

export default function StitchDivider() {
  return (
    <div className="w-full py-8 flex items-center justify-center opacity-70">
      <div className="w-full border-t-2 border-dashed border-stitches"></div>
      <span className="px-4 text-stitches font-headings text-xl">〰</span>
      <div className="w-full border-t-2 border-dashed border-stitches"></div>
    </div>
  );
}