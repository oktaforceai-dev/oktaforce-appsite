interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  eyebrowClassName?: string;
}

export function SectionHeading({ kicker, title, subtitle, align = 'left', eyebrowClassName = '' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'text-left';

  return (
    <div className={`space-y-4 ${alignment}`}>
      {kicker ? <p className={`section-kicker ${eyebrowClassName}`}>{kicker}</p> : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}
