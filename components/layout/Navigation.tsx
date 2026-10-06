import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  // We extract the link styles to keep things clean, adding strict focus rules 
  // to override the default black browser box.
  const linkStyle = "text-xs md:text-sm font-headings font-bold text-faded hover:text-sage transition-colors whitespace-nowrap px-1.5 py-0.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-4 focus-visible:ring-offset-[#FFFFFF]";

  return (
    <div className="fixed top-6 left-0 w-full z-40 flex justify-center px-4 pointer-events-none">
      {/* 
        The magic here is 'inline-flex' and 'w-max' which strictly forces 
        the container to hug the text as tightly as possible.
      */}
      <nav className="pointer-events-auto bg-cotton/90 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-pillowy border border-stitches inline-flex w-max items-center justify-center gap-3 md:gap-5">
        <Link href="#maker-profile" className={linkStyle}>
          THE MAKER
        </Link>
        <Link href="#project-basket" className={linkStyle}>
          PATTERN BOOK
        </Link>
        <Link href="#toolbox" className={linkStyle}>
          TOOLBOX
        </Link>
        <Link href="#contact" className={`${linkStyle} hover:!text-terracotta`}>
          CONTACT
        </Link>
      </nav>
    </div>
  );
}