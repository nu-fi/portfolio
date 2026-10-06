import React from 'react';
import Link from 'next/link';
import Panel from '../craft-ui/Panel';
import Tag from '../craft-ui/Tag';
import Button from '../craft-ui/Button';

interface ProjectCardProps {
  project: {
    id: string;
    patternNumber: string;
    title: string;
    role: string;
    tech: string[];
    description: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Panel className="flex flex-col h-full group">
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm font-headings font-bold text-stitches uppercase tracking-widest">
          Pattern {project.patternNumber}
        </span>
        <span className="text-xs font-headings text-charcoal bg-wool px-3 py-1 rounded-full border border-stitches">
          {project.role}
        </span>
      </div>
      
      <h3 className="text-2xl text-charcoal font-headings font-bold mb-4 group-hover:text-sage transition-colors duration-300">
        {project.title}
      </h3>
      
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      
      <p className="text-faded text-sm leading-relaxed mb-8 flex-grow">
        {project.description}
      </p>
      
      <div className="mt-auto pt-5 border-t border-dashed border-stitches">
        <Link href={`/projects/${project.id}`} className="block w-full">
          <Button variant="tertiary" className="w-full group-hover:bg-stitches group-hover:text-charcoal transition-colors">
            EXAMINE PATTERN
          </Button>
        </Link>
      </div>
    </Panel>
  );
}