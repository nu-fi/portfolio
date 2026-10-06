import React from 'react';
import Button from '../craft-ui/Button';

export default function Contact() {
  return (
    <section className="pt-20 max-w-3xl mx-auto text-center" id="contact">
      <div className="bg-oatmeal/50 rounded-3xl p-10 border-2 border-dashed border-stitches shadow-inner">
        <h2 className="text-3xl md:text-4xl text-charcoal mb-4 font-headings">
          Have a project in mind?
        </h2>
        <p className="text-xl text-sage font-headings tracking-wide mb-8">
          LET'S WEAVE SOMETHING TOGETHER.
        </p>
        <p className="text-faded mb-10 max-w-lg mx-auto">
          Whether you need a complex AI model trained, a full-stack web application architected, or just want to chat about code and craft, my inbox is always open.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:your.email@example.com">
            <Button variant="primary">DROP A LINE</Button>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <Button variant="tertiary">LINKEDIN PROFILE</Button>
          </a>
        </div>
      </div>
    </section>
  );
}