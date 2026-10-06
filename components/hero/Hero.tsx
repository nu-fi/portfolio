import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../craft-ui/Button';
import Tag from '../craft-ui/Tag';

export default function Hero() {
  return (
    <section className="pt-20 pb-16 flex flex-col-reverse md:flex-row items-center gap-12 max-w-5xl mx-auto">
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <Tag>THE MAKER</Tag>
        <div>
          <h1 className="text-5xl md:text-6xl text-charcoal mb-3">NURUL FITRI</h1>
          <h2 className="text-xl md:text-2xl text-sage font-headings tracking-wide">
            FULL-STACK DEVELOPER <span className="text-stitches mx-2">|</span> AI & DATA ENTHUSIAST
          </h2>
        </div>
        <p className="text-lg text-faded max-w-xl leading-relaxed">
          I weave clean code, complex data, and intelligent systems into functional digital products. Like a well-crafted pattern, I believe software should be built with precision, robust structure, and a touch of warmth.
        </p>
        
        {/* BUTTON FIX: Wrapped in Next.js Links */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="#project-basket">
            <Button variant="primary">VIEW MY PATTERNS</Button>
          </Link>
          <Link href="#maker-profile">
            <Button variant="tertiary">MAKER PROFILE</Button>
          </Link>
        </div>
      </div>
      
      {/* Polaroid Portrait UI */}
      <div className="w-full max-w-sm flex-shrink-0">
        <div className="bg-cotton p-4 rounded-xl shadow-pillowy animate-float">
          <div className="stitch-border rounded-lg p-3 text-center">
            <span className="text-xs font-headings text-faded tracking-widest uppercase mb-3 block">
              Maker Info
            </span>
            
            {/* IMAGE FIX: Using Next.js Image component */}
            <div className="bg-oatmeal w-full aspect-[4/5] rounded flex items-center justify-center border border-stitches/50 mb-4 overflow-hidden relative">
              <Image 
                src="/portrait.jpg" 
                alt="Maker Portrait" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            <span className="text-sm font-headings text-charcoal bg-wool px-4 py-1.5 rounded-full border border-stitches inline-block">
              Status: Crafting Code
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}