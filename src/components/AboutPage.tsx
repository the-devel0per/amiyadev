import type { ReactNode } from 'react';
import { about, site } from '../config/site';
import { useReveal } from '../hooks/useReveal';
import ActionLink from './ActionLink';
import AppLink from './AppLink';
import { FileText } from 'lucide-react';

function Block({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  const ref = useReveal<HTMLElement>();
  const id = `about-${title.toLowerCase().replace(/\W+/g, '-')}`;
  return (
    <section
      ref={ref}
      aria-labelledby={id}
      className="grid gap-6 border-t border-line py-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-12 md:py-14"
    >
      <div>
        <h2 id={id} className="text-[clamp(1.25rem,1vw+1rem,1.5rem)] font-semibold tracking-[-0.02em]">
          {title}
        </h2>
        {intro && <p className="mt-2 text-[15px] text-muted">{intro}</p>}
      </div>
      <div>{children}</div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="container-content pb-20 pt-14 sm:pb-28 sm:pt-20">
      <header className="hero-enter max-w-3xl pb-12 sm:pb-16">
        <h1 className="text-[clamp(2.25rem,5vw+0.5rem,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
          About
        </h1>
        <p className="mt-6 max-w-[62ch] text-[clamp(1.0625rem,0.6vw+0.9rem,1.25rem)] leading-relaxed text-fg">
          {about.lead}
        </p>
      </header>

      <Block title="How I work">
        <ul className="grid gap-8 sm:grid-cols-2">
          {about.approach.map((a) => (
            <li key={a.title}>
              <h3 className="text-[17px] font-semibold tracking-tight">{a.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{a.body}</p>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Experience" intro={about.experienceIntro}>
        <ul className="divide-y divide-line">
          {about.experience.map((e) => (
            <li key={e.role + e.org} className="grid gap-1 py-6 first:pt-0 last:pb-0 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-8">
              <p className="text-sm text-muted">{e.period}</p>
              <div>
                <h3 className="text-[17px] font-semibold tracking-tight">{e.role}</h3>
                <p className="text-[15px] text-muted">{e.org}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{e.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Tools & knowledge">
        <div className="grid gap-8 sm:grid-cols-2">
          {about.knowledge.map((k) => (
            <div key={k.group}>
              <h3 className="text-[17px] font-semibold tracking-tight">{k.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {k.items.map((item) => (
                  <li key={item} className="rounded-full border border-line bg-surface-2 px-3 py-1 text-[13px] text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Education">
        <p className="text-[17px] font-semibold tracking-tight">{about.education.degree}</p>
        <p className="mt-1 text-[15px] text-muted">
          {about.education.school} · {about.education.period}
        </p>
      </Block>

      <div className="flex flex-wrap gap-3 border-t border-line pt-10">
        <ActionLink href={site.resumeUrl} className="btn btn-primary" unavailableReason="Resume PDF has not been added yet">
          <FileText size={18} aria-hidden="true" />
          Resume
        </ActionLink>
        <AppLink href="/#projects" className="btn btn-secondary">
          View projects
        </AppLink>
      </div>
    </div>
  );
}
