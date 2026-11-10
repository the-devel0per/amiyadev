import AppLink from './AppLink';

export default function NotFound() {
  return (
    <div className="container-content py-24 sm:py-32">
      <h1 className="text-[clamp(2rem,4vw+0.5rem,3rem)] font-semibold tracking-[-0.03em]">Page not found</h1>
      <p className="mt-4 max-w-[50ch] text-muted">The page you are looking for does not exist or has moved.</p>
      <AppLink href="/" className="btn btn-primary mt-8">
        Back to home
      </AppLink>
    </div>
  );
}
