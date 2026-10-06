import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/projects';

export default function ProjectBasket() {
  return (
    <section className="py-1 max-w-5xl mx-auto" id="project-basket">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-charcoal mb-4">The Pattern Book</h2>
        <p className="text-faded text-lg max-w-2xl mx-auto">
          An archive of completed works. Each pattern represents a distinct blend of data logic, system architecture, and interface design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}