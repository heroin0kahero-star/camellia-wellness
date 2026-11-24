import { SeoHead } from '../components/common/SeoHead';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImageReveal } from '../components/common/ImageReveal';
import { TreatmentCard } from '../components/treatments/TreatmentCard';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { AppointmentCTA } from '../components/common/AppointmentCTA';
import { Button } from '../components/common/Button';
import { CLINIC_ASSETS } from '../data/assets';
import { HAIR_FAQS, HAIR_RESTORATION_TREATMENTS } from '../data/treatments';

const SCALP_CONSULTATION_STEPS = [
  {
    index: '01',
    title: 'Scalp & Shedding History',
    detail:
      'Review onset, duration, flaking or itching patterns, nutritional habits, and recent styling stress.',
  },
  {
    index: '02',
    title: 'Visual Follicle Check',
    detail:
      'Assess scalp cleanliness, oil balance, and hair density distribution to separate breakage from root shedding.',
  },
  {
    index: '03',
    title: 'Tailored Therapy Sequencing',
    detail:
      'Recommend calm dandruff control, strengthening care, or GFC/PRP support based on clinical appropriateness.',
  },
];

export function HairRestoration() {
  return (
    <>
      <SeoHead
        title="Hair Restoration & Scalp Care | Camellia Cosmetics & Wellness Centre"
        description="Explore GFC Treatment, PRP Hair Treatment, Hair Fall Treatment, Hair Growth Therapy, Dandruff & Scalp Treatment, and Hair Strengthening at Camellia in Bengaluru."
        canonicalPath="/treatments/hair-restoration"
        schemaType="MedicalWebPage"
      />

      {/* Hero */}
      <section className="border-b border-[#25221F]/12 bg-[#FAF7F2]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="lg:col-span-6">
            <p className="font-mono-index text-xs tracking-[0.18em] uppercase text-[#737C67]">
              PILLAR 03 · HAIR RESTORATION
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.06] font-normal text-[#3B252B] sm:text-6xl">
              Care That Goes <em className="italic">Beyond the Surface.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5C554E] sm:text-lg">
              Lasting hair vitality begins with a calm, balanced scalp. Camellia offers
              targeted follicular and scalp therapies grounded in realistic clinical
              evaluation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                to="/contact?treatment=Hair%20Restoration%20%E2%80%94%20GFC%20Treatment"
                variant="primary"
              >
                Book Scalp Consultation
              </Button>
              <a
                href="#hair-services"
                className="inline-flex min-h-[44px] items-center text-xs font-medium tracking-[0.14em] uppercase text-[#3B252B] underline decoration-[#B69A70] underline-offset-8 hover:text-[#737C67]"
              >
                View All 6 Services
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ImageReveal
              src={CLINIC_ASSETS.hairRestoration.src}
              alt={CLINIC_ASSETS.hairRestoration.alt}
              figureNumber="FIG. 01"
              caption={CLINIC_ASSETS.hairRestoration.caption}
              aspectClass="aspect-[4/3]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Introduction to Hair & Scalp Care */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              index="01"
              kicker="Scalp-First Philosophy"
              title={
                <>
                  Understanding shedding,{' '}
                  <em className="italic">scalp health &amp; strength.</em>
                </>
              }
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[#25221F]/85 lg:col-span-6 lg:col-start-7">
            <p>
              Hair thinning, excessive shedding, and recurring dandruff rarely stem from
              a single cause. Hard water, daily stress, scalp build-up, nutritional
              shifts, and hereditary patterns can all affect strand resilience.
            </p>
            <p className="text-[#5C554E]">
              At Camellia, hair and scalp consultations separate surface hair breakage
              from root-level concerns before proposing GFC, PRP, or scalp-purifying
              care. No therapy guarantees hair regrowth; every plan is designed around
              honest clinical support.
            </p>
          </div>
        </div>
      </section>

      {/* Available Treatments */}
      <section
        id="hair-services"
        className="border-y border-[#25221F]/12 bg-[#FAF7F2]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <SectionHeading
            index="02"
            kicker="Available Services"
            title={
              <>
                Six dedicated <em className="italic">hair &amp; scalp therapies.</em>
              </>
            }
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HAIR_RESTORATION_TREATMENTS.map((item, idx) => (
              <TreatmentCard
                key={item.id}
                treatment={item}
                indexNumber={`H0${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <SectionHeading
          index="03"
          kicker="Consultation Process"
          title={
            <>
              How we evaluate <em className="italic">your scalp.</em>
            </>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#25221F]/12 pt-10 md:grid-cols-3">
          {SCALP_CONSULTATION_STEPS.map((step) => (
            <div key={step.index}>
              <span className="font-mono-index text-xs tracking-[0.16em] text-[#737C67]">
                STEP {step.index}
              </span>
              <h3 className="mt-2 font-display text-2xl font-medium text-[#3B252B]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#5C554E]">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-[#25221F]/12 bg-[#FAF7F2]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                index="04"
                kicker="Frequently Asked Questions"
                title={
                  <>
                    Honest answers on <em className="italic">hair restoration.</em>
                  </>
                }
              />
            </div>
            <div className="lg:col-span-8">
              <FAQAccordion items={HAIR_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <AppointmentCTA
        treatmentContext="Hair Restoration"
        heading="Arrange a calm scalp assessment."
      />
    </>
  );
}
