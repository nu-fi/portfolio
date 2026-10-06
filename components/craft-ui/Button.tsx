import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  // Added active states for a physical "press" effect
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-headings font-bold rounded-full transition-all duration-300 overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F6F0] active:scale-[0.98] active:translate-y-0.5";
  
  const variants = {
    primary: "bg-sage text-cotton shadow-pillowy hover:bg-[#688a6b]",
    secondary: "bg-terracotta text-cotton shadow-pillowy hover:bg-[#b56758]",
    tertiary: "bg-oatmeal text-charcoal stitch-border hover:bg-stitches hover:text-charcoal",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-1 border border-dashed border-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
    </button>
  );
}