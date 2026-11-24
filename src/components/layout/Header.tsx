import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { CLINIC_ASSETS } from '../../data/assets';
import { MAIN_NAVIGATION, TREATMENT_NAV_ITEMS } from '../../data/navigation';
import { Button } from '../common/Button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(true);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const isTreatmentActive = location.pathname.startsWith('/treatments');

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled
          ? 'border-b border-[#25221F]/12 bg-[#F6F1E9]/96 backdrop-blur-md'
          : 'border-b border-[#25221F]/8 bg-[#F6F1E9]/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-5 lg:px-10">
        {/* Zone 1: Uploaded Camellia Logo blended seamlessly on Warm Ivory */}
        <Link
          to="/"
          aria-label="Camellia Cosmetics & Wellness Centre Home"
          className="flex shrink-0 items-center py-1"
        >
          <img
            src={CLINIC_ASSETS.logo.src}
            alt={CLINIC_ASSETS.logo.alt}
            className="logo-ivory-blend h-14 w-auto object-contain sm:h-16"
          />
        </Link>

        {/* Zone 2: Clean 4-item navigation with Treatments mega-menu */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex"
          ref={dropdownRef}
        >
          {MAIN_NAVIGATION.map((item) => {
            if (item.children) {
              return (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setMegaOpen((prev) => !prev)}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    className={`inline-flex min-h-[40px] items-center gap-1.5 text-xs font-medium tracking-[0.14em] uppercase whitespace-nowrap shrink-0 transition-colors ${
                      isTreatmentActive
                        ? 'text-[#3B252B] underline decoration-[#B69A70] underline-offset-8'
                        : 'text-[#25221F]/80 hover:text-[#3B252B]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        megaOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? undefined : { opacity: 0, y: 4 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-3"
                      >
                        <div className="border border-[#25221F]/14 bg-[#FAF7F2] p-6 shadow-[0_18px_40px_-20px_rgba(37,34,31,0.2)]">
                          <div className="flex items-center justify-between border-b border-[#25221F]/10 pb-3">
                            <span className="font-mono-index text-[0.7rem] tracking-[0.16em] uppercase text-[#737C67]">
                              Service Pillars
                            </span>
                            <Link
                              to="/treatments"
                              className="inline-flex items-center gap-1 text-xs font-medium tracking-[0.12em] uppercase text-[#3B252B] hover:text-[#737C67]"
                            >
                              <span>View All Treatments</span>
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </Link>
                          </div>

                          <div className="mt-4 grid grid-cols-2 gap-4">
                            {TREATMENT_NAV_ITEMS.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className="group border border-transparent p-3 transition-colors hover:border-[#25221F]/12 hover:bg-[#F6F1E9]"
                              >
                                <span className="font-mono-index text-[0.68rem] tracking-[0.14em] text-[#737C67]">
                                  {sub.index}
                                </span>
                                <p className="mt-1 font-display text-xl font-medium text-[#3B252B] group-hover:underline decoration-[#B69A70] underline-offset-4">
                                  {sub.label}
                                </p>
                                <p className="mt-1 text-xs leading-relaxed text-[#5C554E]">
                                  {sub.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `inline-flex min-h-[40px] items-center text-xs font-medium tracking-[0.14em] uppercase whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-[#3B252B] underline decoration-[#B69A70] underline-offset-8'
                      : 'text-[#25221F]/80 hover:text-[#3B252B]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Zone 3: Single primary CTA + mobile menu toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <Button
            to="/contact"
            variant="primary"
            className="hidden !min-h-[42px] !px-5 sm:inline-flex"
          >
            Book Appointment
          </Button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-11 w-11 items-center justify-center border border-[#25221F]/15 text-[#3B252B] md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-[#25221F]/12 bg-[#F6F1E9] px-6 py-6 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col divide-y divide-[#25221F]/10">
              <NavLink
                to="/"
                end
                className="flex min-h-[46px] items-center text-sm font-medium tracking-[0.12em] uppercase text-[#3B252B]"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="flex min-h-[46px] items-center text-sm font-medium tracking-[0.12em] uppercase text-[#3B252B]"
              >
                About
              </NavLink>
              <div className="py-2">
                <button
                  type="button"
                  onClick={() => setMobileTreatmentsOpen((prev) => !prev)}
                  className="flex min-h-[44px] w-full items-center justify-between text-sm font-medium tracking-[0.12em] uppercase text-[#3B252B]"
                  aria-expanded={mobileTreatmentsOpen}
                >
                  <span>Treatments</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileTreatmentsOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {mobileTreatmentsOpen && (
                  <div className="mt-1 flex flex-col gap-1 border-l border-[#25221F]/15 pl-4">
                    <Link
                      to="/treatments"
                      className="flex min-h-[40px] items-center text-sm font-medium text-[#3B252B]"
                    >
                      All Treatments Directory
                    </Link>
                    {TREATMENT_NAV_ITEMS.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="flex min-h-[40px] items-center gap-2 text-sm text-[#5C554E]"
                      >
                        <span className="font-mono-index text-xs text-[#737C67]">{sub.index}</span>
                        <span>{sub.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <NavLink
                to="/contact"
                className="flex min-h-[46px] items-center text-sm font-medium tracking-[0.12em] uppercase text-[#3B252B]"
              >
                Contact
              </NavLink>
            </nav>

            <div className="mt-6">
              <Button to="/contact" variant="primary" className="w-full">
                Book Appointment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
