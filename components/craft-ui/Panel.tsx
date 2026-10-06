import React from 'react';

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Panel({ children, className = '', as: Component = 'div' }: PanelProps) {
  return (
    <Component className={`bg-cotton rounded-3xl p-1.5 shadow-pillowy transition-all duration-300 hover:shadow-pillowy-hover hover:-translate-y-1 ${className}`}>
      <div className="stitch-border rounded-2xl p-6 h-full w-full">
        {children}
      </div>
    </Component>
  );
}