import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Instagram, MapPin, Phone } from 'lucide-react';
import { SeoHead } from '../components/common/SeoHead';
import { Button } from '../components/common/Button';
import { ImageReveal } from '../components/common/ImageReveal';
import { SectionHeading } from '../components/common/SectionHeading';
import { AppointmentCTA } from '../components/common/AppointmentCTA';
import { CLINIC_ASSETS, INSTAGRAM_GALLERY } from '../data/assets';
import { BRAND_INFO, CLINIC_VERIFICATION_NOTES } from '../data/brand';
import { TREATMENT_CATEGORIES } from '../data/treatments';

const FEATURED_HIGHLIGHTS = [
  {
    index: '01',
    category: 'Skin & Face',
    name: 'HydraFacial & Korean Glass Skin',
    summary:
      'Multi-step pore cleansing, gentle exfoliation, and layered hydration curated to leave skin calmer, clearer, and deeply replenished.',
    path: '/treatments/skin-and-face',
    image: CLINIC_ASSETS.skinAndFace,
  },
  {
    index: '02',
    category: 'Laser Hair Reduction',
    name: 'Precision Zone Reduction',
    summary:
      'Tailored facial, underarm, upper-lip, and bikini sessions planned around individual skin tone and hair characteristics.',
    path: '/treatments/laser-hair-reduction',
    image: CLINIC_ASSETS.laserSuite,
  },
  {
    index: '03',
    category: 'Hair Restoration',
    name: 'GFC & Scalp Renewal',
    summary:
      'Consultation-led follicular and scalp care designed to address shedding, dandruff imbalance, and strand resilience.',
    path: '/treatments/hair-restoration',
    image: CLINIC_ASSETS.hairRestoration,
  },
];

export function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SeoHead
        title="Camellia Cosmetics & Wellness Centre | Vignan Nagar, Bengaluru"
        description="Discover a more considered approach to beauty, skin care, laser hair reduction, hair restoration, and body wellness at Camellia Cosmetics & Wellness Centre in Vignan Nagar, Bengaluru."
        canonicalPath="/"
        schemaType="HealthAndBeautyBusiness"
      />

      {/* Hero Split Composition */}
      <section className="border-b border-[#25221F]/12 bg-[#F6F1E9]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-12">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between px-6 py-14 sm:py-20 lg:col-span-7 lg:px-10 lg:py-24"
          >
            <div>
              <p className="font-mono-index text-xs tracking-[0.18em] uppercase text-[#737C67]">
                MODERN HERITAGE AESTHETICS · VIGNAN NAGAR, BENGALURU
              </p>
              <h1 className="mt-6 font-display text-4xl leading-[1.06] font-normal tracking-[-0.02em] text-[#3B252B] sm:text-6xl lg:text-[4.25rem]">
                Where Science Meets the <em className="italic">Art of Beauty.</em>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-[#5C554E] sm:text-lg">
                Discover a more considered approach to beauty and wellness at Camellia
                Cosmetics &amp; Wellness Centre.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button to="/treatments" variant="primary">
                  Explore Our Treatments
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button to="/contact" variant="outline">
                  Book an Appointment
                </Button>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 border-t border-[#25221F]/12 pt-6 text-xs text-[#5C554E] sm:grid-cols-3">
              <div>
                <p className="font-mono-index uppercase tracking-[0.14em] text-[#737C67]">
                  Location
                </p>
                <p className="mt-1 text-sm text-[#25221F]">
                  Above Airtel showroom, Vignan Nagar
                </p>
              </div>
              <div>
                <p className="font-mono-index uppercase tracking-[0.14em] text-[#737C67]">
                  Direct Desk
                </p>
                <a
                  href={BRAND_INFO.phoneHref}
                  className="mt-1 inline-block font-mono-index text-sm text-[#25221F] hover:text-[#3B252B]"
                >
                  {BRAND_INFO.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="font-mono-index uppercase tracking-[0.14em] text-[#737C67]">
                  Approach
                </p>
                <p className="mt-1 text-sm text-[#25221F]">
                  Consultation-first aesthetic care
                </p>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-[#25221F]/12 bg-[#E9DCD5] lg:col-span-5 lg:border-l lg:border-t-0">
            <div className="relative h-full min-h-[420px] lg:min-h-[640px]">
              <img
                src={CLINIC_ASSETS.heroPortrait.src}
                alt={CLINIC_ASSETS.heroPortrait.alt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#25221F]/70 via-[#25221F]/20 to-transparent px-6 py-5 text-[#F6F1E9]">
                <p className="font-mono-index text-[0.68rem] tracking-[0.16em] uppercase text-[#E9DCD5]">
                  FIG. 01 · CAMELLIA STANDARD
                </p>
                <p className="mt-1 font-display text-lg italic">
                  {CLINIC_ASSETS.heroPortrait.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01. Brand Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ImageReveal
              src={CLINIC_ASSETS.botanicalStillLife.src}
              alt={CLINIC_ASSETS.botanicalStillLife.alt}
              figureNumber="FIG. 02"
              caption={CLINIC_ASSETS.botanicalStillLife.caption}
              aspectClass="aspect-square"
            />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading
              index="01"
              kicker="The Institute"
              title={
                <>
                  An aesthetics and wellness house rooted in{' '}
                  <em className="italic">quiet precision.</em>
                </>
              }
            />
            <p className="mt-6 text-base leading-relaxed text-[#25221F]/85">
              Situated in Vignan Nagar, Bengaluru, Camellia Cosmetics &amp; Wellness Centre
              brings together clinical skin care, laser hair reduction, restorative hair
              therapies, and supportive body wellness under one composed roof.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#5C554E]">
              Rather than rushing visitors through generic menus, every appointment opens
              with an unhurried evaluation—observing skin condition, comfort thresholds,
              and realistic timelines before recommending any treatment pathway.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[#25221F]/12 pt-6">
              <Link
                to="/about"
                className="inline-flex min-h-[44px] items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-[#3B252B] transition-colors hover:text-[#737C67]"
              >
                <span>Read Our Philosophy</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <span className="font-mono-index text-xs text-[#5C554E]">
                {BRAND_INFO.locationShort}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Treatment Categories (Editorial Index + Asymmetric Grid) */}
      <section className="border-y border-[#25221F]/12 bg-[#FAF7F2]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col justify-between gap-6 border-b border-[#25221F]/12 pb-10 md:flex-row md:items-end">
            <SectionHeading
              index="02"
              kicker="Four Pillars of Care"
              title={
                <>
                  Curated disciplines across <em className="italic">skin, hair &amp; body.</em>
                </>
              }
            />
            <Button to="/treatments" variant="outline">
              View Complete Directory
            </Button>
          </div>

          <div className="divide-y divide-[#25221F]/12">
            {TREATMENT_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to={category.path}
                className="group grid grid-cols-1 items-center gap-8 py-10 transition-colors hover:bg-[#F6F1E9]/70 lg:grid-cols-12 lg:px-4"
              >
                <div className="lg:col-span-2">
                  <span className="font-mono-index text-sm tracking-[0.18em] text-[#737C67]">
                    {category.index}
                  </span>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#5C554E]">
                    {category.featuredNames.length} Services
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="font-display text-3xl font-medium text-[#3B252B] transition-colors group-hover:underline decoration-[#B69A70] underline-offset-4 sm:text-4xl">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 text-xs tracking-[0.12em] uppercase text-[#737C67]">
                    {category.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-sm leading-relaxed text-[#5C554E]">
                    {category.intro}
                  </p>
                </div>

                <div className="flex items-center justify-start lg:col-span-2 lg:justify-end">
                  <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-[#3B252B] transition-transform duration-200 group-hover:translate-x-1">
                    Explore
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Featured Treatments Showcase */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          index="03"
          kicker="Featured Protocols"
          title={
            <>
              Considered treatments, <em className="italic">tailored in person.</em>
            </>
          }
          description="Explore selected services from our publicly listed catalogue. Exact session plans are confirmed only after an individual aesthetic consultation."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURED_HIGHLIGHTS.map((item) => (
            <article key={item.index} className="flex flex-col justify-between">
              <div>
                <ImageReveal
                  src={item.image.src}
                  alt={item.image.alt}
                  figureNumber={`SERVICE ${item.index}`}
                  caption={item.category}
                  aspectClass="aspect-[4/3]"
                />
                <h3 className="mt-5 font-display text-2xl font-medium text-[#3B252B]">
                  {item.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5C554E]">
                  {item.summary}
                </p>
              </div>
              <div className="mt-5 pt-2">
                <Link
                  to={item.path}
                  className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-medium tracking-[0.14em] uppercase text-[#3B252B] hover:text-[#737C67]"
                >
                  <span>Explore {item.category}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 04 & 05. The Camellia Experience + Technology & Differentiators */}
      <section className="border-y border-[#25221F]/12 bg-[#E9DCD5]/55">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading
                index="04"
                kicker="The Camellia Experience"
                title={
                  <>
                    Modern aesthetics guided by{' '}
                    <em className="italic">thoughtful evaluation.</em>
                  </>
                }
              />
              <p className="mt-6 text-base leading-relaxed text-[#25221F]/85">
                Every visit begins with listening—understanding your skin history, daily
                environment in Bengaluru, sensitivities, and personal comfort before
                outlining an appropriate care plan.
              </p>

              <div className="mt-8 border border-[#25221F]/14 bg-[#F6F1E9] p-6">
                <p className="font-mono-index text-[0.7rem] tracking-[0.16em] uppercase text-[#737C67]">
                  Technology Approach · Owner Verification Note
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#25221F]/85">
                  {CLINIC_VERIFICATION_NOTES.technologiesCount.note}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 border-t border-[#25221F]/12 pt-8 sm:grid-cols-2">
                <div>
                  <span className="font-mono-index text-xs text-[#737C67]">01</span>
                  <h3 className="mt-1 font-display text-xl font-medium text-[#3B252B]">
                    Honest Expectations
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5C554E]">
                    Clear explanations of purpose and care steps without exaggerated
                    claims or guaranteed outcome promises.
                  </p>
                </div>
                <div>
                  <span className="font-mono-index text-xs text-[#737C67]">02</span>
                  <h3 className="mt-1 font-display text-xl font-medium text-[#3B252B]">
                    Private Suites
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5C554E]">
                    Calm, composed treatment rooms in Vignan Nagar designed for comfort
                    and discretion.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ImageReveal
                src={CLINIC_ASSETS.clinicLounge.src}
                alt={CLINIC_ASSETS.clinicLounge.alt}
                figureNumber="FIG. 03"
                caption={CLINIC_ASSETS.clinicLounge.caption}
                aspectClass="aspect-[4/3]"
              />
              <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#25221F]/12 pt-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#3B252B]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#3B252B]">
                      Accessible East Bengaluru Location
                    </p>
                    <p className="mt-1 text-sm text-[#5C554E]">
                      {BRAND_INFO.fullAddress}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#3B252B]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#3B252B]">
                      Direct WhatsApp &amp; Phone Desk
                    </p>
                    <p className="mt-1 text-sm text-[#5C554E]">
                      Speak directly with the centre on {BRAND_INFO.phoneDisplay}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Instagram Editorial Showcase */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-6 border-b border-[#25221F]/12 pb-8 sm:flex-row sm:items-end">
          <SectionHeading
            index="05"
            kicker="Editorial Journal & Instagram"
            title={
              <>
                Follow <em className="italic">{BRAND_INFO.instagramHandle}</em>
              </>
            }
          />
          <Button
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Visit Official Instagram
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-7">
          {INSTAGRAM_GALLERY.map((item, idx) => (
            <a
              key={item.src}
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <ImageReveal
                src={item.src}
                alt={item.alt}
                figureNumber={`0${idx + 1}`}
                caption={item.caption}
                aspectClass="aspect-square"
              />
            </a>
          ))}
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
