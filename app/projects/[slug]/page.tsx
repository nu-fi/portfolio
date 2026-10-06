import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import Panel from '@/components/craft-ui/Panel';
import Tag from '@/components/craft-ui/Tag';
import StitchDivider from '@/components/craft-ui/StitchDivider';
import Button from '@/components/craft-ui/Button';
import TableauEmbed from '@/components/projects/TableauEmbed';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = await params;
  const projectIndex = projects.findIndex((p) => p.id === resolvedParams.slug);
  
  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  // Safely extract properties so TypeScript does not throw errors if some projects are missing them
  const hasTableau = 'isTableau' in project ? project.isTableau : false;
  const projectImage = 'image' in project ? (project.image as string) : null;
  const liveLink = 'liveLink' in project ? (project.liveLink as string) : null;
  const repoLink = 'repoLink' in project ? (project.repoLink as string) : null;

  return (
    <main className="px-6 md:px-12 py-24 max-w-4xl mx-auto overflow-x-hidden">
      {/* Pattern Header */}
      <div className="text-center mb-12">
        <span className="text-sm font-headings font-bold text-stitches uppercase tracking-widest block mb-4">
          Pattern {project.patternNumber}
        </span>
        <h1 className="text-4xl md:text-5xl text-charcoal mb-4">{project.title}</h1>
        <div className="inline-block bg-wool px-4 py-2 rounded-full border border-stitches shadow-sm">
          <span className="text-sm font-headings text-faded uppercase tracking-wider">
            Role: {project.role}
          </span>
        </div>
      </div>

      <StitchDivider />

      <div className="space-y-10">
        {/* Project Overview */}
        <section>
          <h2 className="text-2xl text-sage mb-4 font-headings">Project Overview</h2>
          <Panel>
            <p className="text-faded leading-relaxed">
              {project.overview}
            </p>
          </Panel>
        </section>

        {/* The Materials */}
        <section>
          <h2 className="text-2xl text-terracotta mb-4 font-headings">The Materials (Tech Stack)</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </section>

        {/* The Process */}
        <section>
          <h2 className="text-2xl text-denim mb-4 font-headings">The Process & Architecture</h2>
          <Panel>
            <p className="text-faded leading-relaxed">
              {project.process}
            </p>
          </Panel>
        </section>

        {/* The Final Piece */}
        <section>
          <h2 className="text-2xl text-charcoal mb-4 font-headings">The Final Piece</h2>
          <Panel className="bg-oatmeal/50">
            <p className="text-faded leading-relaxed">
              {project.outcome}
            </p>
          </Panel>
        </section>
        
        {/* Visual Evidence / Tableau Embed */}
        <section>
          {hasTableau ? (
            <TableauEmbed />
          ) : (
            projectImage && (
              <div className="w-full aspect-video bg-oatmeal rounded-2xl border-2 border-dashed border-stitches flex items-center justify-center shadow-inner overflow-hidden relative mb-8">
                <Image 
                  src={projectImage} 
                  alt={`${project.title} screenshot`} 
                  fill 
                  className="object-cover"
                />
              </div>
            )
          )}
        </section>

        {/* Examine the Work */}
        {(liveLink || repoLink) && (
          <section>
            <h2 className="text-2xl text-charcoal mb-6 font-headings text-center">Examine the Work</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              
              {liveLink && (
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                  <div className="walking-stitch rounded-xl group cursor-pointer">
                    <div className="bg-wool px-8 py-4 rounded-lg flex items-center justify-center gap-3">
                      <span className="font-headings font-bold text-sage group-hover:text-terracotta transition-colors">
                        ▶ LIVE DEMO
                      </span>
                    </div>
                  </div>
                </a>
              )}

              {repoLink && (
                <a href={repoLink} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                  <div className="walking-stitch rounded-xl group cursor-pointer">
                    <div className="bg-wool px-8 py-4 rounded-lg flex items-center justify-center gap-3">
                      <span className="font-headings font-bold text-charcoal group-hover:text-terracotta transition-colors">
                        {`{ }`} SOURCE CODE
                      </span>
                    </div>
                  </div>
                </a>
              )}

            </div>
          </section>
        )}
      </div>

      <StitchDivider />

      {/* Navigation Ribbon */}
      <nav className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
        <div className="w-full md:w-1/3 flex justify-start">
          {prevProject && (
            <Link href={`/projects/${prevProject.id}`}>
              <span className="text-faded hover:text-sage transition-colors font-headings text-sm flex items-center gap-2">
                ← Pattern {prevProject.patternNumber}
              </span>
            </Link>
          )}
        </div>
        
        <div className="w-full md:w-1/3 flex justify-center">
          <Link href="/#project-basket">
            <Button variant="tertiary" className="text-sm py-2 px-4">
              BACK TO BASKET
            </Button>
          </Link>
        </div>
        
        <div className="w-full md:w-1/3 flex justify-end">
          {nextProject && (
            <Link href={`/projects/${nextProject.id}`}>
              <span className="text-faded hover:text-sage transition-colors font-headings text-sm flex items-center gap-2">
                Pattern {nextProject.patternNumber} →
              </span>
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
}