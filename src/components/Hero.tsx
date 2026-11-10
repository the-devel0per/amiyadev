import { ArrowUpRight, FileText } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { site } from '../config/site';
import ActionLink from './ActionLink';

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pt-28">
      <div className="container-content">
        <div className="hero-enter flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
          <div className="max-w-2xl">
            <h1
              id="hero-heading"
              className="text-[clamp(2.25rem,6vw+0.5rem,4.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
            >
              {site.name}
            </h1>
            <p className="mt-3 text-[clamp(1.25rem,2vw+0.5rem,1.75rem)] font-medium tracking-tight text-fg">
              {site.title}
            </p>
            <p className="mt-2 text-sm text-muted">{site.specializations.join(' · ')}</p>

            <p className="mt-8 max-w-[60ch] text-[17px] leading-relaxed text-muted">{site.intro}</p>
            <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-muted">{site.supporting}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ActionLink
                href={site.resumeUrl}
                className="btn btn-primary"
                unavailableReason="Resume PDF has not been added yet"
              >
                <FileText size={18} aria-hidden="true" />
                Resume
              </ActionLink>
              <ActionLink
                href={site.githubUrl}
                className="btn btn-secondary"
                unavailableReason="GitHub profile URL has not been added yet"
              >
                <GithubIcon size={18} />
                GitHub
                <ArrowUpRight size={16} aria-hidden="true" className="-ml-1 text-muted" />
              </ActionLink>
            </div>
          </div>

          {site.profileImage && (
            <img
              src={site.profileImage}
              alt={site.profileImageAlt}
              width={320}
              height={320}
              decoding="async"
              className="aspect-square w-40 rounded-[20px] border border-line object-cover sm:w-56 md:w-64 lg:w-72"
            />
          )}
        </div>
      </div>
    </section>
  );
}
