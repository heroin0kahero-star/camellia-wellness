import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface ImageRevealProps {
  src: string;
  alt: string;
  caption?: string;
  figureNumber?: string;
  aspectClass?: string;
  className?: string;
  priority?: boolean;
}

export function ImageReveal({
  src,
  alt,
  caption,
  figureNumber,
  aspectClass = 'aspect-[4/3]',
  className = '',
  priority = false,
}: ImageRevealProps) {
  const [hasError, setHasError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <figure className={`group ${className}`}>
      <div
        className={`relative overflow-hidden bg-[#E9DCD5] editorial-frame ${aspectClass}`}
      >
        {hasError ? (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#E9DCD5] via-[#F6F1E9] to-[#E2D5CB] p-6 text-center text-[#3B252B]"
            role="img"
            aria-label={alt}
          >
            <Sparkles className="h-5 w-5 text-[#737C67]" aria-hidden="true" />
            <span className="font-display text-lg italic">{alt}</span>
          </div>
        ) : (
          <motion.img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            initial={prefersReducedMotion ? false : { opacity: 0.9, scale: 1.03 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        )}
      </div>

      {(caption || figureNumber) && (
        <figcaption className="mt-2.5 flex items-baseline justify-between gap-4 border-t border-[#25221F]/10 pt-2 text-xs text-[#5C554E]">
          {figureNumber && (
            <span className="font-mono-index uppercase tracking-[0.14em] text-[#737C67]">
              {figureNumber}
            </span>
          )}
          {caption && <span className="italic">{caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}
