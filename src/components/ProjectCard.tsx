import { ExternalLink } from 'lucide-react';
import GithubIcon from './GithubIcon';
import type { Project } from '../types';
import { useReveal } from '../hooks/useReveal';
import ActionLink from './ActionLink';

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLElement>();
  const { title, category, description, technologies, image, imageAlt, liveUrl, githubUrl } = project;

  return (
    <article
      ref={ref}
      aria-labelledby={`${project.id}-title`}
      className="project-card flex flex-col overflow-hidden rounded-[20px] border border-line bg-surface transition-colors duration-300 ease-smooth"
    >
      <div className="project-media relative aspect-[16/10] overflow-hidden bg-surface-2">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            width={1280}
            height={800}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={`Preview for ${title} not yet added`}
            className="project-placeholder flex h-full w-full flex-col items-center justify-center gap-1 text-center"
          >
            <span className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</span>
            <span className="text-sm text-muted">Screenshot coming soon</span>
          </div>
        )}

        <div className="project-overlay">
          <div className="project-actions">
            <ActionLink
              href={liveUrl}
              ariaLabel={`${title} — open live site (new tab)`}
              className="overlay-btn-primary"
              unavailableReason="Live site URL has not been added yet"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Live
            </ActionLink>
            <ActionLink
              href={githubUrl}
              ariaLabel={`${title} — open GitHub repository (new tab)`}
              className="overlay-btn"
              unavailableReason="Repository URL has not been added yet"
            >
              <GithubIcon size={16} />
              GitHub
            </ActionLink>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[13px] text-muted">{category}</p>
        <h3 id={`${project.id}-title`} className="mt-1 text-[clamp(1.375rem,1.5vw+1rem,1.75rem)] font-semibold tracking-[-0.02em]">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {technologies.map((t) => (
            <li key={t} className="rounded-full border border-line bg-surface-2 px-3 py-1 text-[13px] text-muted">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
