import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SeoHead } from '../components/common/SeoHead';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImageReveal } from '../components/common/ImageReveal';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { AppointmentCTA } from '../components/common/AppointmentCTA';
import { Button } from '../components/common/Button';
import { CLINIC_ASSETS } from '../data/assets';
import { LASER_FAQS, LASER_TREATMENT_AREAS } from '../data/treatments';

const LASER_JOURNEY = [
  {
    step: '01',
    title: 'In-Person Assessment',
    detail:
      'Review skin phototype, hair coarseness, medical history, and sun exposure habits to confirm suitability.',
  },
  {
    step: '02',
    title: 'Calibrated Sessions',
    detail:
      'Focused light energy targets melanin within active hair follicles while prioritizing comfort across surrounding skin.',
  },
  {
    step: '03',
    title: 'Scheduled Cadence',
    detail:
      'Sessions are spaced around natural hair-growth phases so follicles in the active growth stage can be addressed progressively.',
  },
  {
    step: '04',
    title: 'Aftercare & Maintenance',
    detail:
      'Gentle soothing care and diligent sun protection follow every visit, with periodic review as hair density evolves.',
  },
];

export function LaserHairReduction() {
  return (
    <>
      <SeoHead
        title="Laser Hair Reduction | Camellia Cosmetics & Wellness Centre"
        description="Explore Laser Hair Reduction for Full Face, Upper Lip, Underarms, and Bikini Area at Camellia Cosmetics & Wellness Centre in Vignan Nagar, Bengaluru."
        canonicalPath="/treatments/laser-hair-reduction"
        schemaType="MedicalWebPage"
      />

      {/* Hero */}
      <section className="border-b border-[#25221F]/12 bg-[#FAF7F2]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="lg:col-span-6">
            <p className="font-mono-index text-xs tracking-[0.18em] uppercase text-[#737C67]">
              PILLAR 02 · LASER HAIR REDUCTION
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.06] font-normal text-[#3B252B] sm:text-6xl">
              Freedom From the <em className="italic">Everyday Routine.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5C554E] sm:text-lg">
              Laser hair reduction offers a measured, longer-term alternative to frequent
              waxing, threading, and shaving—guided by careful consultation to match your
              skin tone and comfort.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                to="/contact?treatment=Laser%20Hair%20Reduction%20%E2%80%94%20Full%20Face"
                variant="primary"
              >
                Book Laser Consultation
              </Button>
              <a
                href="#treatment-areas"
                className="inline-flex min-h-[44px] items-center text-xs font-medium tracking-[0.14em] uppercase text-[#3B252B] underline decoration-[#B69A70] underline-offset-8 hover:text-[#737C67]"
              >
                Explore Treatment Areas
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ImageReveal
              src={CLINIC_ASSETS.laserSuite.src}
              alt={CLINIC_ASSETS.laserSuite.alt}
              figureNumber="FIG. 01"
              caption={CLINIC_ASSETS.laserSuite.caption}
              aspectClass="aspect-[4/3]"
              priority
            />
          </div>
        </div>
      </section>

      {/* How It Works & Suitability */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              index="01"
              kicker="Clinical Understanding"
              title={
                <>
                  How laser hair <em className="italic">reduction works.</em>
                </>
              }
            />
          </div>

          <div className="space-y-5 text-base leading-relaxed text-[#25221F]/85 lg:col-span-6 lg:col-start-7">
            <p>
              During a laser hair reduction session, concentrated light energy is
              directed toward pigment (melanin) inside the hair shaft and follicle.
              Converting gently into warmth, this energy slows future hair production
              from follicles that are in their active growth phase at the time of
              treatment.
            </p>
            <p className="text-[#5C554E]">
              Because hair grows in staggered cycles—and individual hormone profiles and
              follicle depths vary—multiple spaced sessions are required for meaningful
              reduction. Camellia does not claim guaranteed permanent hair removal;
              instead, we focus on steady, realistic reduction and comfort.
            </p>
            <div className="border border-[#25221F]/12 bg-[#E9DCD5]/50 p-5 text-xs leading-relaxed text-[#3B252B]">
              <span className="font-mono-index uppercase tracking-[0.14em]">
                Equipment &amp; Session Note:{' '}
              </span>
              Specific wavelength settings, session counts, and pricing are reviewed
              during your in-person assessment rather than published as generic presets.
            </div>
          </div>
        </div>
      </section>

      {/* Advertised Treatment Areas */}
      <section
        id="treatment-areas"
        className="border-y border-[#25221F]/12 bg-[#FAF7F2]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <SectionHeading
            index="02"
            kicker="Advertised Zones"
            title={
              <>
                Dedicated areas <em className="italic">offered at Camellia.</em>
              </>
            }
            description="Select any treatment area below to initiate a confidential consultation enquiry."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {LASER_TREATMENT_AREAS.map((area) => (
              <article
                key={area.id}
                className="flex flex-col justify-between border border-[#25221F]/12 bg-[#F6F1E9] p-7 sm:p-9"
              >
                <div>
                  <span className="font-mono-index text-xs tracking-[0.16em] text-[#737C67]">
                    ZONE {area.index}
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-medium text-[#3B252B]">
                    {area.name}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-[#25221F]/85">
                    {area.description}
                  </p>
                  <p className="mt-4 border-t border-[#25221F]/10 pt-3 text-xs leading-relaxed text-[#5C554E]">
                    <span className="font-mono-index uppercase tracking-[0.12em] text-[#3B252B]">
                      Area Focus:{' '}
                    </span>
                    {area.focus}
                  </p>
                </div>

                <div className="mt-7">
                  <Link
                    to={`/contact?treatment=${encodeURIComponent(
                      `Laser Hair Reduction — ${area.name}`
                    )}`}
                    className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-medium tracking-[0.14em] uppercase text-[#3B252B] hover:text-[#737C67]"
                  >
                    <span>Enquire About {area.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* General Treatment Journey */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <SectionHeading
          index="03"
          kicker="The Process"
          title={
            <>
              Your general <em className="italic">treatment journey.</em>
            </>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#25221F]/12 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {LASER_JOURNEY.map((item) => (
            <div key={item.step}>
              <span className="font-mono-index text-xs tracking-[0.16em] text-[#737C67]">
                {item.step}
              </span>
              <h3 className="mt-2 font-display text-2xl font-medium text-[#3B252B]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#5C554E]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Questions */}
      <section className="border-t border-[#25221F]/12 bg-[#FAF7F2]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                index="04"
                kicker="Common Questions"
                title={
                  <>
                    Clarity before <em className="italic">your first visit.</em>
                  </>
                }
              />
            </div>
            <div className="lg:col-span-8">
              <FAQAccordion items={LASER_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <AppointmentCTA
        treatmentContext="Laser Hair Reduction"
        heading="Plan your laser consultation in Vignan Nagar."
      />
    </>
  );
}
