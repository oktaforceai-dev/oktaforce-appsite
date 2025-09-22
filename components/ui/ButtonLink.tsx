'use client';

import {Link} from '@/i18n/routing';
import type {AnchorHTMLAttributes, MouseEvent, ReactNode} from 'react';
import {trackEvent} from '@/lib/analytics';

interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  eventName?: string;
  eventData?: Record<string, unknown>;
}

const base =
  'inline-flex min-h-[44px] items-center justify-center rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand';

const variantClasses = {
  primary: 'bg-brand text-white shadow-brand hover:opacity-90',
  secondary: 'bg-brand/10 text-brand hover:bg-brand/15',
  ghost: 'border border-transparent text-foreground hover:border-brand hover:text-brand'
} as const;

const sizeClasses = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base'
} as const;

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  eventName,
  eventData,
  onClick,
  ...props
}: ButtonLinkProps) {
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (eventName) {
      trackEvent(eventName, {href, variant, size, ...eventData});
    }
    onClick?.(event);
  };

  if (external) {
    return (
      <a href={href} className={classes} rel="noreferrer" target="_blank" onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href as any} className={classes} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
