import type { ReactNode } from 'react';

interface SectionHeadingProps {
  index?: string;
  kicker?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  index,
  kicker,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left';
  const kickerColor = light ? 'text-[#B69A70]' : 'text-[#737C67]';
  const titleColor = light ? 'text-[#F6F1E9]' : 'text-[#3B252B]';
  const descColor = light ? 'text-[#E9DCD5]' : 'text-[#5C554E]';

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {(index || kicker) && (
        <div
          className={`mb-3 flex flex-wrap items-center gap-2 font-mono-index text-xs tracking-[0.16em] uppercase ${kickerColor}`}
        >
          {index && <span>{index}</span>}
          {index && kicker && <span aria-hidden="true">·</span>}
          {kicker && <span>{kicker}</span>}
        </div>
      )}
      <h2
        className={`font-display text-3xl leading-[1.12] font-medium tracking-[-0.015em] sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-[1.0625rem] ${descColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
