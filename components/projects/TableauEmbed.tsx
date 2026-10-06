"use client";

import React, { useEffect, useRef } from 'react';

export default function TableauEmbed() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divElement = ref.current;
    if (divElement) {
      const vizElement = divElement.getElementsByTagName('object')[0];
      
      // Responsive sizing
      if (divElement.offsetWidth > 800) { 
        vizElement.style.width = '100%'; 
        vizElement.style.height = '850px'; 
      } else if (divElement.offsetWidth > 500) { 
        vizElement.style.width = '100%'; 
        vizElement.style.height = '850px'; 
      } else { 
        vizElement.style.width = '100%'; 
        vizElement.style.height = '900px'; 
      }
      
      // Inject Tableau script safely (preventing duplicates on re-renders)
      if (!document.getElementById('tableau-script')) {
        const scriptElement = document.createElement('script');
        scriptElement.id = 'tableau-script';
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode?.insertBefore(scriptElement, vizElement);
      }
    }
  }, []);

  return (
    <div className="w-full bg-cotton p-4 rounded-xl shadow-pillowy stitch-border mb-8 overflow-hidden">
      <div className='tableauPlaceholder w-full' id='viz1791293303762' style={{ position: 'relative' }} ref={ref}>
        <noscript>
          <a href='#'>
            <img 
              alt='Dashboard 1 ' 
              src='https://public.tableau.com/static/images/E-/E-commerceperformancedashboard/Dashboard1/1_rss.png' 
              style={{ border: 'none' }} 
            />
          </a>
        </noscript>
        <object className='tableauViz' style={{ display: 'none' }}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='site_root' value='' />
          <param name='name' value='E-commerceperformancedashboard/Dashboard1' />
          <param name='tabs' value='no' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https://public.tableau.com/static/images/E-/E-commerceperformancedashboard/Dashboard1/1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
        </object>
      </div>
    </div>
  );
}