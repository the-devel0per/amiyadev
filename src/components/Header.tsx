import { site } from '../config/site';
import { useActiveSection } from '../hooks/useActiveSection';
import { usePath } from '../router';
import AppLink from './AppLink';
import ThemeToggle from './ThemeToggle';

const SECTION_IDS = ['projects'];

export default function Header() {
  const path = usePath();
  const onHome = path === '/';
  const activeSection = useActiveSection(SECTION_IDS, onHome);

  const items = [
    { label: 'About', href: '/about', active: path === '/about' },
    { label: 'Projects', href: '/#projects', active: onHome && activeSection === 'projects' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95">
      <div className="container-content flex h-16 items-center justify-between">
        <AppLink
          href="/"
          aria-label={`${site.name} — home`}
          className="-ml-2 inline-flex h-11 items-center rounded-full px-2 text-lg font-semibold tracking-tight"
        >
          {site.initials}
        </AppLink>
        <nav aria-label="Primary" className="flex items-center gap-1">
          {items.map(({ label, href, active }) => (
            <AppLink
              key={label}
              href={href}
              aria-current={active ? (href === '/about' ? 'page' : 'true') : undefined}
              className={`inline-flex h-11 items-center rounded-full px-3 text-[15px] transition-colors duration-200 ease-smooth hover:bg-hover sm:px-4 ${
                active ? 'font-medium text-fg' : 'text-muted hover:text-fg'
              }`}
            >
              {label}
            </AppLink>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
