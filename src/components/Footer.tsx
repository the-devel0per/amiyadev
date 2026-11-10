import { site } from '../config/site';

export default function Footer() {
  const links = [
    { label: 'Email', href: site.email ? `mailto:${site.email}` : '', external: false },
    { label: 'LinkedIn', href: site.linkedinUrl, external: true },
    { label: 'GitHub', href: site.githubUrl, external: true },
  ].filter((l) => l.href);

  return (
    <footer className="border-t border-line">
      <div className="container-content flex flex-col gap-2 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {site.year}{' '}
          <a
            href={site.url || 'https://amiya3.vercel.app/'}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-fg hover:underline underline-offset-4"
          >
            {site.name}
          </a>
        </p>
        {links.length > 0 && (
          <nav aria-label="Contact and social">
            <ul className="-mx-3 flex flex-wrap items-center">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex min-h-[44px] items-center rounded-full px-3 transition-colors duration-200 hover:text-fg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </footer>
  );
}
