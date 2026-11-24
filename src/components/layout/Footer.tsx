import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CLINIC_ASSETS } from '../../data/assets';
import { BRAND_INFO, CLINIC_VERIFICATION_NOTES } from '../../data/brand';

function buildWavePath(cy: number): string {
  const y = Number.isFinite(cy) ? cy.toFixed(2) : '0';
  return `M0 0 C0 0,464 ${y},1139 ${y} S2278 0,2278 0 V160 H0 Z`;
}

export function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const footerEl = footerRef.current;
    const pathEl = pathRef.current;
    if (!footerEl || !pathEl) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      pathEl.setAttribute('d', buildWavePath(0));
      return;
    }

    // Start dipped ready for bounce when entering viewport
    pathEl.setAttribute('d', buildWavePath(156));

    let lastScrollY = window.scrollY;
    let lastScrollTime = performance.now();
    let currentVelocity = 0;

    const onScroll = () => {
      const now = performance.now();
      const dt = Math.max(now - lastScrollTime, 8);
      const dy = window.scrollY - lastScrollY;
      currentVelocity = (dy / dt) * 1000;
      lastScrollY = window.scrollY;
      lastScrollTime = now;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    let animFrame = 0;

    const runElasticBounce = (velocity: number) => {
      window.cancelAnimationFrame(animFrame);

      const variation = Math.min(0.65, Math.abs(velocity) / 10000);
      const amplitude = Math.max(1, 1 + variation);
      const period = Math.max(0.32, 1 - variation);
      const duration = 2000;
      const startTime = performance.now();
      const startY = 156;
      const endY = 0;
      const s = (period / (2 * Math.PI)) * Math.asin(1 / amplitude);

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);

        if (t >= 1) {
          pathEl.setAttribute('d', buildWavePath(endY));
          return;
        }

        const easeOutElastic =
          t === 0
            ? 0
            : amplitude *
                Math.pow(2, -10 * t) *
                Math.sin(((t - s) * (2 * Math.PI)) / period) +
              1;

        const cy = startY + (endY - startY) * easeOutElastic;
        pathEl.setAttribute('d', buildWavePath(cy));

        animFrame = window.requestAnimationFrame(tick);
      };

      animFrame = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            runElasticBounce(currentVelocity);
          } else {
            window.cancelAnimationFrame(animFrame);
            pathEl.setAttribute('d', buildWavePath(156));
          }
        }
      },
      { threshold: 0.02 }
    );

    observer.observe(footerEl);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#F6F1E9] text-[#F6F1E9]"
    >
      {/* Elastic Bouncy Wave Cap in Deep Burgundy (#3B252B) */}
      <div className="relative w-full overflow-visible leading-none">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 2278 160"
          aria-hidden="true"
          className="-mb-px block h-20 w-full overflow-visible sm:h-28 lg:h-36"
        >
          <path
            ref={pathRef}
            fill="#3B252B"
            d={buildWavePath(0)}
          />
        </svg>
      </div>

      {/* Main Deep Burgundy Footer Surface with Subtle Local Grain */}
      <div className="relative overflow-hidden bg-[#3B252B]">
        <svg aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
          <defs>
            <filter
              id="camellia-logo-knockout"
              colorInterpolationFilters="sRGB"
            >
              <feColorMatrix
                type="matrix"
                values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  -3.2 -3.2 -3.2 0 8.8
                "
              />
            </filter>
          </defs>
        </svg>

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-soft-light"
        >
          <filter id="camellia-footer-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#camellia-footer-noise)" />
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 items-start justify-between gap-12 lg:grid-cols-12">
            {/* Brand Crest & Editorial Introduction */}
            <div className="lg:col-span-6">
              <Link
                to="/"
                aria-label="Camellia Cosmetics & Wellness Centre"
                className="inline-block py-1"
              >
                <img
                  src={CLINIC_ASSETS.logo.src}
                  alt={CLINIC_ASSETS.logo.alt}
                  className="logo-footer-blend h-20 w-auto object-contain"
                />
              </Link>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-[#E9DCD5]">
                {BRAND_INFO.name} offers a calm, consultation-first approach to skin care,
                laser hair reduction, hair restoration, and body wellness in Vignan Nagar,
                Bengaluru.
              </p>
              <div className="mt-6 flex items-center gap-5 text-xs tracking-[0.14em] uppercase">
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-2 text-[#F6F1E9] transition-colors hover:text-[#B69A70]"
                >
                  <Instagram className="h-4 w-4 text-[#B69A70]" aria-hidden="true" />
                  <span>Instagram</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-2 text-[#F6F1E9] transition-colors hover:text-[#B69A70]"
                >
                  <MessageCircle className="h-4 w-4 text-[#B69A70]" aria-hidden="true" />
                  <span>WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Bengaluru Location & Contact */}
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="font-mono-index text-[0.7rem] tracking-[0.18em] uppercase text-[#B69A70]">
                Centre Location
              </p>
              <div className="mt-4 space-y-4 text-sm text-[#E9DCD5]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#B69A70]" aria-hidden="true" />
                  <address className="not-italic leading-relaxed">
                    {BRAND_INFO.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
                <a
                  href={BRAND_INFO.phoneHref}
                  className="flex min-h-[36px] items-center gap-2.5 text-[#F6F1E9] transition-colors hover:text-[#B69A70]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#B69A70]" aria-hidden="true" />
                  <span className="font-mono-index">{BRAND_INFO.phoneDisplay}</span>
                </a>
                <p className="border-t border-[#F6F1E9]/15 pt-3 text-xs leading-relaxed text-[#E9DCD5]/80">
                  Hours: {CLINIC_VERIFICATION_NOTES.workingHours.status}. Enquire via
                  WhatsApp or phone for current scheduling.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#F6F1E9]/15 pt-7 text-xs text-[#E9DCD5]/80 sm:flex-row sm:items-center">
            <p>
              &copy; {year} {BRAND_INFO.name}. All rights reserved.
            </p>
            <p className="font-mono-index tracking-[0.1em] uppercase">
              Vignan Nagar · Bengaluru · Karnataka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
