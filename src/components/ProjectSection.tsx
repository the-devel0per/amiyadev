import { projects } from '../config/site';
import ProjectCard from './ProjectCard';

export default function ProjectSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-16 pb-20 pt-4 sm:pb-28">
      <div className="container-content">
        <h2 id="projects-heading" className="text-[clamp(1.5rem,1.5vw+1.1rem,2rem)] font-semibold tracking-[-0.025em]">
          Selected Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
