import React from 'react';
import Panel from '../craft-ui/Panel';

export default function MakerProfile() {
  return (
    <section className="py-1 max-w-5xl mx-auto" id="maker-profile">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-charcoal mb-4">The Maker</h2>
        <p className="text-faded text-lg max-w-2xl mx-auto">
          Piecing together complex systems like a meticulously crafted pattern.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Main Background Panel */}
        <Panel className="md:col-span-3">
          <h3 className="text-2xl text-terracotta mb-4">Professional Identity</h3>
          <div className="space-y-4 text-faded leading-relaxed">
            <p>
              I am a software engineer with a deep appreciation for the craft of coding. I specialize in bridging the gap between intricate backend architectures and intuitive, accessible user interfaces.
            </p>
            <p>
              Whether I am training reinforcement learning models, administering PostgreSQL databases, or weaving together frontend components, I approach every project with a meticulous eye for detail. I believe that good code, much like good textile art, relies on strong foundational threads and intentional design.
            </p>
          </div>
        </Panel>

        {/* Sidebar Panels */}
        <div className="md:col-span-2 space-y-6">
          <Panel>
            <h3 className="text-xl text-denim mb-4">Education</h3>
            <div className="mb-3">
              <h4 className="text-charcoal font-headings font-bold text-lg">Bachelor of Computer Science</h4>
              <p className="text-faded text-sm mt-1">Universitas Tanjungpura</p>
            </div>
            <div className="inline-block px-3 py-1 bg-sage/10 text-sage rounded-full text-sm font-headings font-bold border border-sage/20">
              GPA: 3.91 / 4.00
            </div>
          </Panel>

          <Panel>
            <h3 className="text-xl text-sage mb-4">Technical Direction</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-faded">
                <span className="text-terracotta font-bold">〰</span> 
                Full-Stack Software Development
              </li>
              <li className="flex items-start gap-3 text-sm text-faded">
                <span className="text-terracotta font-bold">〰</span> 
                AI & Reinforcement Learning
              </li>
              <li className="flex items-start gap-3 text-sm text-faded">
                <span className="text-terracotta font-bold">〰</span> 
                Database Administration
              </li>
              <li className="flex items-start gap-3 text-sm text-faded">
                <span className="text-terracotta font-bold">〰</span> 
                Infrastructure & DevOps
              </li>
            </ul>
          </Panel>
        </div>
      </div>
    </section>
  );
}