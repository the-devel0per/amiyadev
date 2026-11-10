import type { ReactNode } from 'react';

interface Props {
  href: string;
  className: string;
  children: ReactNode;
  /** Shown to everyone when href is empty. */
  unavailableReason: string;
  ariaLabel?: string;
}

/**
 * External link that degrades to a clearly disabled control when the URL is
 * missing. Never renders href="#".
 */
export default function ActionLink({ href, className, children, unavailableReason, ariaLabel }: Props) {
  if (!href) {
    return (
      <span role="link" aria-disabled="true" title={unavailableReason} className={className}>
        {children}
        <span className="sr-only"> — {unavailableReason}</span>
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={className}>
      {children}
    </a>
  );
}
