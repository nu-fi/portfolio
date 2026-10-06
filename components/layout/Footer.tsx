import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-8 text-center border-t border-stitches/50 mt-12">
      <div className="inline-block px-4 py-2 bg-cotton border border-dashed border-stitches rounded-md shadow-sm transform -rotate-1 hover:rotate-0 transition-transform duration-300">
        <p className="text-xs font-headings text-faded uppercase tracking-widest">
          Handcrafted with Next.js & Tailwind <br/>
          © {new Date().getFullYear()} The Maker
        </p>
      </div>
    </footer>
  );
}