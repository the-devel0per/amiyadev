import { useEffect } from 'react';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import NotFound from './components/NotFound';
import ProjectSection from './components/ProjectSection';
import { site } from './config/site';
import { scrollToTarget, usePath } from './router';

const TITLES: Record<string, string> = {
  '/': `${site.name} — ${site.title}`,
  '/about': `About — ${site.name}`,
};

export default function App() {
  const path = usePath();

  useEffect(() => {
    document.title = TITLES[path] ?? `Page not found — ${site.name}`;
  }, [path]);

  // Honour #hash when the page is opened directly (e.g. /#projects).
  useEffect(() => {
    if (window.location.hash) scrollToTarget(window.location.hash);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" key={path}>
        {path === '/' && (
          <>
            <Hero />
            <ProjectSection />
          </>
        )}
        {path === '/about' && <AboutPage />}
        {path !== '/' && path !== '/about' && <NotFound />}
      </main>
      <Footer />
    </>
  );
}
